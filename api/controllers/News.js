const db = require("../models");
const newsModel = db.news;

exports.showLatestNews = (req, res) => {
  newsModel
    .findAll({ limit: 5, order: [["updatedAt", "DESC"]] })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(200).json(err));
};
