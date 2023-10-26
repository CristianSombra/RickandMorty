const {Router} = require('express');
const { getAllCharHandler, getCharByIdHandler } = require('../handlers/characterHandler');
// const { postFav, deleteFav } = require('../handlers/favoriteHandler');

const routes = Router()

routes.get("/", getAllCharHandler)
routes.get("/character/:id", getCharByIdHandler);
// routes.post("/favorite", postFav);
// routes.delete("/favorite/:id", deleteFav);

module.exports = routes;