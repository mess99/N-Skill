const router = require("express").Router();
const storyController = require("../controllers/Story");

router.get("/", storyController.showStories);
router.get("/:id", storyController.storyWithExercices);

module.exports = router;
