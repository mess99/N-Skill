module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(50),
        unique: true,
      },
      email: {
        type: DataTypes.STRING(75),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstConnection: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      AvatarId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        defaultValue: 1,
      },
    },
    {
      scopes: {
        withoutPassword: {
          attributes: { exclude: ["password"] },
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return user;
};
