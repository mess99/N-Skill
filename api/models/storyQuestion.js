module.exports = (sequelize, DataTypes) => {
  const storyQuestion = sequelize.define(
    "Storyquestion",
    {
      contentQuestion: {
        type: DataTypes.STRING(100),
      },

      StoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return storyQuestion;
};
