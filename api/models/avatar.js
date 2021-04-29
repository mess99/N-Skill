module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define(
    "Avatar",
    {
      image: {
        type: DataTypes.STRING(100),
      },
    },
    {
      timestamps: true,
    }
  );

  return Avatar;
};
