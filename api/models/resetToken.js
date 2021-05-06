module.exports = (sequelize, DataTypes) => {
  const resetToken = sequelize.define(
    "ResetToken",
    {
      email: {
        type: DataTypes.STRING(75),
        allowNull: false,
        // unique: true,
      },
      token: {
        type: DataTypes.STRING(255),
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      used: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return resetToken;
};
