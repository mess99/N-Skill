const router = require("express").Router();
const quizRoute = require("./quiz");
const questionRoute = require("./question");

router.use("/quiz", quizRoute);
router.use("/question", questionRoute);

module.exports = router;
