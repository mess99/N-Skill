const router = require("express").Router();
const userController = require("../controllers/User");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

router.get("/:id", userController.findUserById);
router.patch("/:id/email", userController.changeEmail);
router.patch("/:id/username", userController.changeUsername);
router.patch("/:id/avatar", userController.updateUserAvatar);

module.exports = router;
