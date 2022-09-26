const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const RequestedBooking = sequelize.define("requested_bookings", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  customer_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  service_provider_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  provider_image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  provider_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  provider_comment: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  booking_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = RequestedBooking;