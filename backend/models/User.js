const Sequelize = require("sequelize");
const sequelize = require("../db/database");
const FavouriteLocation = require('../models/FavouriteLocation');


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
  lat: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  long: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  image: {
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
    allowNull: true,
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

User.hasMany(FavouriteLocation, { foreignKey: 'user_id'});
FavouriteLocation.belongsTo(User,{ foreignKey: 'user_id'});

module.exports = User;