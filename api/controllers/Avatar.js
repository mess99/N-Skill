const db = require("../models");
const avatarModel = db.avatars;

exports.showAvatars = (req, res) => {
  avatarModel
    .findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.showAvatar = (req, res) => {
  avatarModel
    .findOne({
      where: { id: req.params.id },
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
