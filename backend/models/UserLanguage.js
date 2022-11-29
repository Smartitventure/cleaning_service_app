const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const UserLanguage = sequelize.define("user_language", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = UserLanguage;