const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const Review = sequelize.define("reviews", {
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
  service_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rating_star: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  punctuality: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  speed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cleaning: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Review;