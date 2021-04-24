module.exports = (sequelize, DataTypes) => {
  const postResponse = sequelize.define(
    "Postresponse",
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      vote: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      PostId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
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
  return postResponse;
};
