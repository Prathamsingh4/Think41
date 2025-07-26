module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Message", {
    sender: DataTypes.STRING,
    text: DataTypes.TEXT,
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
};