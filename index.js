const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.Conversation = require("./Conversation")(sequelize, Sequelize);
db.Message = require("./Message")(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Conversation);
db.Conversation.belongsTo(db.User);

db.Conversation.hasMany(db.Message);
db.Message.belongsTo(db.Conversation);

module.exports = db;
