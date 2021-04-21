module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define(
    "Question",
    {
      contentQuestion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      QuizzId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return question;
};
