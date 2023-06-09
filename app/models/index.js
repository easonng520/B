const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
   // operatorsAliases: true,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.events = require("../models/event.model.js")(sequelize, Sequelize);
db.trekkers = require("../models/trekker.model.js")(sequelize, Sequelize);
db.trekkers = require("../models/photo.model.js")(sequelize, Sequelize);

module.exports = db;