const db = require("../models");
const userModel = db.user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
        res.status(400).json({ error: "Email déjà utilisé" });
      } else if (error.fields.username) {
        res.status(400).json({ error: "Pseudo déjà utilisé" });
      }
    });
};

exports.login = async (req, res) => {
  await userModel
    .findOne({ where: { email: req.body.email } })

    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ error: "Email ou mot de passe incorrect" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
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
