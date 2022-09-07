const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gps_position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  mobile_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  join_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  last_seen: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: true,
  }

});

module.exports = User;
