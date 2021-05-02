const express = require("express");
const { requireAuth, checkUser } = require("./middleware/auth");
const app = express();
require("dotenv").config({ path: "./config/.env" });
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const db = require("./models");
db.sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log("Synchro db ok");
  });

app.get("/api/*", checkUser);

app.get("/api/jwtid", requireAuth, (req, res) => {
  res.status(200).json(res.locals.user);
});

// Routes
const routes = require("./routes");
app.use("/api", routes);

const serveur = app.listen(8000, () => {
  console.log("listening port 8000");
});

process.addListener("SIGINT", () => {
  console.log("here");
});
