module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define(
    "Story",
    {
      theme: {
        type: DataTypes.STRING(20),
      },

      title: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING(1300),
      },
    },
    {
      timestamps: true,
    }
  );
  return story;
};
