const router = require("express").Router();
const userController = require("../controllers/User");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

router.get("/:id", userController.findUserById);

module.exports = router;
