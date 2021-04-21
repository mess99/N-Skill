const Sequelize = require("sequelize");

const dbConfig = require("../config/DBconfig");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// TODO: changer la config (https://github.com/teamstarter/graphql-sequelize-generator/blob/develop/src/tests/models/index.js)

db.quiz = require("./quiz")(sequelize, Sequelize);
db.question = require("./questions")(sequelize, Sequelize);
db.response = require("./responses")(sequelize, Sequelize);

db.quiz.hasMany(db.question);
db.question.belongsTo(db.quiz);

db.question.hasMany(db.response);
db.response.belongsTo(db.question);

module.exports = db;
