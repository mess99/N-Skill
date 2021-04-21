const router = require("express").Router();
const questionController = require("../controllers/Question");

router.get("/:id", questionController.showQuestion);
router.get("/quiz/:id", questionController.showQuestionsByQuiz);
router.get("/:id/responses", questionController.showResponses);

module.exports = router;
