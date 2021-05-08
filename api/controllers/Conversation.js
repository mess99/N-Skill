const db = require("../models");
const convModel = db.conversation;

exports.showConversations = async (req, res) => {
  await convModel
    .findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
