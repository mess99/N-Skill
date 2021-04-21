const db = require("../models");
const quizModel = db.quiz;

exports.showQuiz = (req, res) => {
  quizModel
    .findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.showQuizByLevel = (req, res) => {
  quizModel
    .findOne({ where: { level: req.params.level } })

    .then((quiz) => {
      if (!quiz) {
        return res.status(401).json({ error: "no quiz" });
      }
      res.status(201).json({ quiz });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.showQuizByTheme = (req, res) => {
  quizModel
    .findOne({ where: { theme: req.params.theme } })

    .then((quiz) => {
      if (!quiz) {
        return res.status(401).json({ error: "no quiz" });
      }
      res.status(201).json({ quiz });
    })
    .catch((error) => res.status(500).json({ error }));
};
