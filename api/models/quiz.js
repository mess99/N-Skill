module.exports = (sequelize, DataTypes) => {
  const quizz = sequelize.define(
    "Quizz",
    {
      image: {
        type: DataTypes.STRING,
      },
      level: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      theme: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return quizz;
};
