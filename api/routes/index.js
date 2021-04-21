const router = require("express").Router();
const quizRoute = require("./quiz");
const questionRoute = require("./question");
const forumRoute = require("./forum");

router.use("/quiz", quizRoute);
router.use("/question", questionRoute);
router.use("/forum", forumRoute);

module.exports = router;
