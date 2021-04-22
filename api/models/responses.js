module.exports = (sequelize, DataTypes) => {
  const response = sequelize.define(
    "Response",
    {
      content: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      is_true: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      QuestionId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return response;
};
