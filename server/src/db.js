require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const characterModel = require("./models/characters")
// const FavoriteModel = require("./models/favorite");

const sequelize = new Sequelize(
     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   { logging: false }
);

characterModel(sequelize);
// FavoriteModel(sequelize);

const { Character } = sequelize.models;

// User.belongsToMany(Favorite, {through: "tabla_intermedia"});
// Favorite.belongsToMany(User, {through: "tabla_intermedia"});

module.exports = {
   Character,
   // Favorite,
   conn: sequelize,
};
