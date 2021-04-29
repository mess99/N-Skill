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
db.user = require("./user")(sequelize, Sequelize);
db.avatars = require("./avatar")(sequelize, Sequelize);
db.post = require("./post")(sequelize, Sequelize);
db.postResponse = require("./postResponse")(sequelize, Sequelize);
db.story = require("./story")(sequelize, Sequelize);
db.storyQuestion = require("./storyQuestion")(sequelize, Sequelize);
db.storyResponse = require("./storyResponse")(sequelize, Sequelize);

// associate

db.avatars.hasMany(db.user, { as: "users" });
db.user.belongsTo(db.avatars, { foreignKey: "AvatarId" });

db.quiz.hasMany(db.question);
db.question.belongsTo(db.quiz);

db.question.hasMany(db.response);
db.response.belongsTo(db.question);

db.user.hasMany(db.post);
db.post.belongsTo(db.user);

db.post.hasMany(db.postResponse);
db.postResponse.belongsTo(db.post);

db.user.hasMany(db.postResponse);
db.postResponse.belongsTo(db.user);

// STORY

db.story.hasMany(db.storyQuestion);
db.storyQuestion.belongsTo(db.story);

db.storyQuestion.hasMany(db.storyResponse);
db.storyResponse.belongsTo(db.storyQuestion);

module.exports = db;
