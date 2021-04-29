module.exports = (sequelize, DataTypes) => {
  const news = sequelize.define(
    "News",
    {
      content: {
        type: DataTypes.STRING(100),
      },
    },
    {
      timestamps: true,
    }
  );

  return news;
};
