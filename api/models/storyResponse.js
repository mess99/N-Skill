module.exports = (sequelize, DataTypes) => {
  const storyResponse = sequelize.define(
    "StoryResponse",
    {
      content: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      is_true: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      StoryquestionId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return storyResponse;
};
