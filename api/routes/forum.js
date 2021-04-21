const router = require("express").Router();
const forumController = require("../controllers/Forum");

// proteger cette route avec checkuser TODO:
router.post("/", forumController.addPost);

router.get("/", forumController.showPosts);

// router.get("/quiz/:id", forumController.showQuestionsByQuiz);
// router.get("/:id/responses", forumController.showResponses);

module.exports = router;
