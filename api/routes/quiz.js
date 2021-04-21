const router = require("express").Router();
const quizController = require("../controllers/Quiz");

router.get("/", quizController.showQuiz);
router.get("/:level", quizController.showQuizByLevel);
router.get("/theme/:theme", quizController.showQuizByTheme);

module.exports = router;
