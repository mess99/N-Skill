const db = require("../models");
const postModel = db.post;
const postResponse = db.postResponse;
const { getPagination, getPaginationData } = require("../utils");
// TODO: add od. pour filtrer od.LIKE ??? voir auth middleware petit ecplorateur
exports.addPost = (req, res) => {
  const { title, description, image, UserId } = req.body;

  const post = {
    title,
    description,
    image,
    UserId,
  };

  postModel
    .create(post)
    .then((post) => {
      res.status(201).json({ post });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.showPosts = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  postModel
    .findAndCountAll({ limit, offset, order: [["updatedAt", "DESC"]] })
    .then((data) => {
      const response = getPaginationData(data, page, limit);
      res.status(200).json(response);
    })
    .catch((err) => res.status(200).json(err));
};

exports.addAnswer = (req, res) => {
  const answer = {
    content: req.body.content,
    PostId: req.params.id,
    UserId: req.body.UserId,
  };

  postResponse
    .create(answer)
    .then((answer) => {
      res.status(201).json({ answer });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.showAnswersByIdPost = (req, res) => {
  postResponse
    .findAll({ where: { PostId: req.params.id } })
    .then((answers) => {
      res.status(201).json({ answers });
    })
    .catch((error) => res.status(500).json({ error }));
};
