const db = require("../models");
const postModel = db.post;
const { getPagination, getPaginationData } = require("../utils");
// TODO: add od. pour filtrer od.LIKE ???
exports.addPost = (req, res) => {
  const { title, description, image } = req.body;

  const post = {
    title,
    description,
    image,
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
    .findAndCountAll({ limit, offset })
    .then((data) => {
      const response = getPaginationData(data, page, limit);
      res.status(200).json(response);
    })
    .catch((err) => res.status(200).json(err));
};
