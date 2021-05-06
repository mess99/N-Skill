const db = require("../models");
const userModel = db.user;
const Avatar = db.avatars;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const crypto = require("crypto");
const ResetToken = db.resetToken;
const nodemailer = require("nodemailer");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const user = {
    email,
    username: username ? username : "Anonyme" + id,
    password: hashPassword,
  };

  userModel
    .create(user)
    .then((user) => {
      res.status(201).json({ email });
    })
    .catch((error) => {
      if (error.fields.email) {
        res.status(200).json({ error: "Email déjà utilisé" });
      } else if (error.fields.username) {
        res.status(200).json({ error: "Pseudo déjà utilisé" });
      }
    });
};

exports.login = async (req, res) => {
  await userModel
    .findOne({
      where: { email: req.body.email },
      include: [
        {
          model: Avatar,
        },
      ],
    })

    .then((user) => {
      if (!user) {
        return res
          .status(200)
          .json({ error: "Email ou mot de passe incorrect" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(200)
              .json({ error: "Email ou mot de passe incorrect" });
          }

          let maxAge = 1 * 24 * 60 * 60 * 1000;

          const token = jwt.sign(
            { userId: user.id },
            process.env.TOKEN_SECRET,
            { expiresIn: "24h" }
          );
          res.cookie("jwt", token, { httpOnly: true, maxAge });

          res.status(200).json(user);
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
};

exports.findUserById = (req, res) => {
  const id = req.params.id;
  userModel
    .scope("withoutPassword")
    .findByPk(id)
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "no user with this id" });
      }
      res.status(201).json({ user });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.logout = (req, res) => {
  res.clearCookie("jwt");
  // OU res.cookie('jwt', '', { expiresIn: 1 })
  res.send("Logout");
};

exports.changeEmail = (req, res) => {
  userModel
    .findOne({ where: { id: req.params.id } })
    .then((user) => {
      try {
        user.update({ email: req.body.email });
      } catch (error) {
        if (error.fields.email) {
          res.status(200).json({ error: "Email déjà utilisé" });
        } else if (error.fields.username) {
          res.status(200).json({ error: "Pseudo déjà utilisé" });
        }
      }
      // res.status(201).json({ user });
    })
    // FIXME: pm2 pour restart le serveur quand il crash
    .catch((error) => {
      res.status(500).json(JSON.stringify(error));
    });
};

exports.changeUsername = (req, res) => {
  userModel
    .findOne({ where: { id: req.params.id } })
    .then((user) => {
      try {
        user.update({ username: req.body.username });
      } catch (error) {
        if (error.fields.email) {
          res.status(200).json({ error: "Email déjà utilisé" });
        } else if (error.fields.username) {
          res.status(200).json({ error: "Pseudo déjà utilisé" });
        }
      }
      // res.status(201).json({ user });
    })
    // FIXME: pm2 pour restart le serveur quand il crash
    .catch((error) => {
      res.status(500).json(JSON.stringify(error));
    });
};

exports.updateUserAvatar = (req, res) => {
  userModel
    .update({ AvatarId: req.body.avatarId }, { where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: "avatar updated !" }))
    .catch((error) => res.status(400).json(`User not found: ${error}`));
};

exports.forgotPassword = (req, res) => {
  userModel
    .findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user === null) {
        return res.status(200).json({ error: "Email not found" });
      }

      // ResetToken.findOne({ where: { email: user.email } }).then((reset) => {
      //   if (reset !== null) {
      //     return res.status(200).json({ error: "Mail already sent" });
      //   }

      ResetToken.update(
        {
          used: true,
        },
        {
          where: {
            email: req.body.email,
          },
        }
      );

      const fpSalt = crypto.randomBytes(64).toString("base64");

      Date.prototype.addHours = function (h) {
        this.setHours(this.getHours() + h);
        return this;
      };
      const expireDate = new Date().addHours(1);

      ResetToken.create({
        email: req.body.email,
        expiration: expireDate,
        token: fpSalt,
        used: 0,
      });
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "nskills.contact@gmail.com",
          pass: "swer59100",
        },
      });
      const message = {
        from: "noreply@nskills.ovh",
        to: req.body.email,
        subject: "Reset password - N'skills",
        html: `<h2>Email to reset your password</h2>
      <p>To reset your password, follow this link:</p>
      <a href=http://localhost/newpassword?token=${fpSalt}&email=${req.body.email}> Click here</a>`,
      };
      // FIXME: changer le localhost par le serveur
      transporter.sendMail(message, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
      return res.status(200).json({ status: "ok" });
    })
    // })
    .catch((err) => console.log(err));
};

exports.newPassword = async (req, res) => {
  const record = await ResetToken.findOne({
    where: {
      email: req.body.email,
      token: req.body.token,
      // used: 0
    },
  });

  if (record === null) {
    return res.json({
      status: "error",
      message: "Token not found. Try again.",
    });
  }

  const newhashPassword = await bcrypt.hash(req.body.password, 10);

  await userModel.update(
    {
      password: newhashPassword,
    },
    {
      where: {
        email: req.body.email,
      },
    }
  );
  return res.json({ status: "ok", message: "Password reset." });
};
