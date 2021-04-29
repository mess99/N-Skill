const router = require("express").Router();
const newsController = require("../controllers/News");

router.get("/", newsController.showLatestNews);

module.exports = router;
