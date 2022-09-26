const Sequelize = require("sequelize");
const sequelize = require("../db/database");
const RequestedBooking = require('../models/RequestedBooking');
const User = require('../models/User');

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
  location_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address_lat: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address_long: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  landmark: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  hours: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  service_category: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  total_pay: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING,
    default: 0,
  },
});


Booking.hasMany(RequestedBooking, { foreignKey: 'booking_id'});
RequestedBooking.belongsTo(Booking,{ foreignKey: 'booking_id'});

module.exports = Booking;