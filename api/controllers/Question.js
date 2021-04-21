const db = require("../models");
const questionModel = db.question;
const quiz = db.quiz;
const responseModel = db.response;

exports.showQuestion = (req, res) => {
  questionModel
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: quiz,
        },
      ],
    })

    .then((Question) => {
      if (!Question) {
        return res.status(401).json({ error: "no Question with this id" });
      }
      res.status(201).json({ Question });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.showQuestionsByQuiz = (req, res) => {
  questionModel
    .findAll({ where: { QuizzId: req.params.id } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.showResponses = (req, res) => {
  responseModel
    .findAll({
      where: { QuestionId: req.params.id },
      include: [
        {
          model: questionModel,
        },
      ],
    })

    .then((Proposition) => {
      if (!Proposition) {
        return res.status(401).json({ error: "no Proposition with this id" });
      }
      res.status(201).json(Proposition);
    })
    .catch((error) => res.status(500).json({ error }));
};
