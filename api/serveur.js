const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json());
const db = require("./models");
db.sequelize
  .sync({
    // force: true,
  })
  .then(() => {
    console.log("Synchro db ok");
  });

// Routes
const routes = require("./routes");
app.use("/api", routes);

app.listen(8000, () => {
  console.log("listening port 8000");
});
