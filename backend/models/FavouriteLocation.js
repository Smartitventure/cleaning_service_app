const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const FavouriteLocation = sequelize.define("favourite_location", {
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
  lat: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  long: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = FavouriteLocation;