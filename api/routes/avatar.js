const router = require("express").Router();
const avatarController = require("../controllers/Avatar");

router.get("/", avatarController.showAvatars);
router.get("/:id", avatarController.showAvatar);

module.exports = router;
