module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "Post",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      vote: {
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
