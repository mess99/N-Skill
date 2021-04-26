const db = require("../models");
const storyModel = db.story;
const questionModel = db.storyQuestion;
const responseModel = db.storyResponse;

exports.showStories = (req, res) => {
  storyModel
    .findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.storyWithExercices = (req, res) => {
  storyModel
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: questionModel,
          include: [
            {
              model: responseModel,
            },
          ],
        },
      ],
    })
    .then((story) => {
      if (!story) {
        return res.status(401).json({ error: "no story with this id" });
      }
      res.status(201).json(story);
    })
    .catch((error) => res.status(500).json({ error }));
};
// exports.storyWithQuestion = (req, res) => {
//   questionModel
//     .findAll({
//       where: { StoryId: req.params.id },
//       include: [
//         {
//           model: responseModel,
//         },
//       ],
//     })
//     .then((story) => {
//       if (!story) {
//         return res.status(401).json({ error: "no story with this id" });
//       }
//       res.status(201).json(story);
//     })
//     .catch((error) => res.status(500).json({ error }));
// };

// exports.storyWithExercices = (req, res) => {
//     responseModel.findAll({
//     where: { QuestionId: req.params.id },
//     include: [
//       {
//         model: Question,
//       },
//     ],
//   })
//   .then((Proposition) => {
//     if (!Proposition) {
//       return res.status(401).json({ error: "no Proposition with this id" });
//     }
//     res
//       .status(201)
//       .json(Proposition)
//       .catch((error) => res.status(500).json({ error }));
//   });
// };
