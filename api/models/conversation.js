module.exports = (sequelize, DataTypes) => {
  const conversation = sequelize.define(
    "Conversation",
    {
      chapter: {
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      intro: {
        type: DataTypes.STRING,
      },
      firstdialogue: {
        type: DataTypes.TEXT,
      },
      seconddialogue: {
        type: DataTypes.TEXT,
      },
      firsttips: {
        type: DataTypes.STRING(500),
      },
      secondtips: {
        type: DataTypes.STRING(500),
      },
    },
    {
      timestamps: true,
    }
  );

  return conversation;
};
