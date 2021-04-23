const jwt = require("jsonwebtoken");
const db = require("../models");
const userModel = db.user;

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await userModel
          .scope("withoutPassword")
          .findOne({ where: { id: decodedToken.userId } });
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.send(200).json("no token");
      } else {
        next();
      }
    });
  } else {
    // next();
    console.log("no token");
  }
};
