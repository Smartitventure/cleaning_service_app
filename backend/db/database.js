const Sequelize = require("sequelize");

const sequelize = new Sequelize("cleaning_service_app", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;