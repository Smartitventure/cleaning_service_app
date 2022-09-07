const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const Otp = sequelize.define("otp", {
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
  otp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  expiryDate: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Otp;
