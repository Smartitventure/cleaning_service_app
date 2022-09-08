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
  location: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = FavouriteLocation;