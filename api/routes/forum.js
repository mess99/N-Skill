const router = require("express").Router();
const forumController = require("../controllers/Forum");

// proteger cette route avec checkuser TODO:
router.post("/", forumController.addPost);
router.get("/:id", forumController.showPostById);
router.get("/myPosts/:id", forumController.loadPostsById);

router.get("/", forumController.showPosts);
router.patch("/:id", forumController.updatePost);

router.post("/:id/answer", forumController.addAnswer);
router.get("/:id/answers", forumController.showAnswersByIdPost);

router.patch("/answer/vote/:id", forumController.increaseAnswer);
router.patch("/answer/unvote/:id", forumController.decreaseAnswer);

module.exports = router;
