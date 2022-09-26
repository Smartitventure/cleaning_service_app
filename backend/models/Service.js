const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const Service = sequelize.define("services", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  service_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  service_description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    default: 0,
  }
});

module.exports = Service;
