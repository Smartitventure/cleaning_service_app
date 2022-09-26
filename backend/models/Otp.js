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
  code: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  expire_at: {
    type: Sequelize.DATE,
    allowNull: true,
  }
});

module.exports = Otp;
