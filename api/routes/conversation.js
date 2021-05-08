const router = require("express").Router();
const conversationController = require("../controllers/Conversation");

router.get("/", conversationController.showConversations);

module.exports = router;
