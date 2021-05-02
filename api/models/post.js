module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "Post",
    {
      title: {
        type: DataTypes.STRING(1200),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
      answers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      UserId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return post;
};
