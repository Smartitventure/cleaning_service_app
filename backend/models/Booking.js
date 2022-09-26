const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const Booking = sequelize.define("bookings", {
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
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  long: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Booking;