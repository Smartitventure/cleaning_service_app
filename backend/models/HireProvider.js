const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const HireProvider = sequelize.define("hire_providers", {
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
  service_provider_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  booking_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    default: 0,
  }
});

module.exports = HireProvider;