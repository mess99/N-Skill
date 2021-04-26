const router = require("express").Router();
const userRoute = require("./user");
const quizRoute = require("./quiz");
const questionRoute = require("./question");
const forumRoute = require("./forum");
const storyRoute = require("./story");

router.use("/user", userRoute);
router.use("/quiz", quizRoute);
router.use("/question", questionRoute);
router.use("/forum", forumRoute);
router.use("/stories", storyRoute);

module.exports = router;
