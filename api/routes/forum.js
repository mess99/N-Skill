const router = require("express").Router();
const forumController = require("../controllers/Forum");

// proteger cette route avec checkuser TODO:
router.post("/", forumController.addPost);

router.get("/", forumController.showPosts);

router.post("/:id/answer", forumController.addAnswer);
router.get("/:id/answers", forumController.showAnswersByIdPost);

module.exports = router;
