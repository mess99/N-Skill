const db = require("../models");
const postModel = db.post;
const userModel = db.user;

const postResponse = db.postResponse;
const { getPagination, getPaginationData } = require("../utils");
// TODO: add od. pour filtrer od.LIKE ??? voir auth middleware petit ecplorateur
exports.addPost = (req, res) => {
  const { title, description, image, UserId } = req.body;

  const post = {
    title,
    description,
    // image,
    UserId,
  };

  postModel
    .create(post, {
      include: [
        // FIXME: include doesnt work
        {
          model: userModel,
          attributes: ["username"],
        },
      ],
      order: [["updatedAt", "DESC"]],
    })
    .then((post) => {
      res.status(201).json({ post });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.showPosts = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  postModel
    .findAndCountAll({
      limit,
      offset,
      order: [["updatedAt", "DESC"]],
      include: [
        {
          model: userModel,
        },
      ],
    })
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
      postModel.findOne({ where: { id: answer.PostId } }).then((post) => {
        post.update({ answers: post.answers + 1 });
      });
      res.status(201).json({ answer });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.showAnswersByIdPost = (req, res) => {
  postResponse
    .findAll({
      where: { PostId: req.params.id },
      order: [["createdAt", "ASC"]],
      include: [
        {
          model: userModel,
          attributes: ["username"],
        },
      ],
    })
    .then((answers) => {
      res.status(201).json({ answers });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.increaseAnswer = (req, res) => {
  postResponse
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: userModel,
          attributes: ["username"],
        },
      ],
    })
    .then((answer) => {
      answer.update({ vote: answer.vote + 1 });
      res.status(201).json({ answer });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.decreaseAnswer = (req, res) => {
  postResponse
    .findOne({
      where: { id: req.params.id },
      include: [
        {
          model: userModel,
          attributes: ["username"],
        },
      ],
    })
    .then((answer) => {
      answer.update({ vote: answer.vote - 1 });
      res.status(201).json({ answer });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.updatePost = (req, res) => {
  postModel
    .findOne({
      where: { id: req.params.id },
      include: [
        // FIXME: exclure password
        {
          model: userModel,
        },
      ],
    })
    .then((post) => {
      post.update({ description: req.body.description });
      res.status(201).json({ post });
    })
    .catch((error) => res.status(500).json({ error }));
};
