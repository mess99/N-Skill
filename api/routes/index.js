const router = require("express").Router();
const userRoute = require("./user");
const quizRoute = require("./quiz");
const questionRoute = require("./question");
const forumRoute = require("./forum");
const storyRoute = require("./story");
const avatarRoute = require("./avatar");
const newsRoute = require("./news");
const conversationRoute = require("./conversation");

router.use("/user", userRoute);
router.use("/quiz", quizRoute);
router.use("/question", questionRoute);
router.use("/forum", forumRoute);
router.use("/stories", storyRoute);
router.use("/avatars", avatarRoute);
router.use("/news", newsRoute);
router.use("/conversation", conversationRoute);

// contact us

const nodemailer = require("nodemailer");
// const smtpTransport = require("nodemailer-smtp-transport");

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "nskills.contact@gmail.com",
//     pass: "swer59100",
//   },
// });

router.post("/send-email", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nskills.contact@gmail.com",
      pass: "swer59100",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "nskills.contact@gmail.com",
    subject: `message from ${req.body.email}:  ${req.body.subject}`,
    text: req.body.contain,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.send(error);
    }
    console.log("Message sent: " + info.response);
    res.send("sucess");
  });
});

module.exports = router;
