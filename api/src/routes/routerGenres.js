const express = require('express');
const routerGenres = express.Router()

const {getGenHandlers} = require('../Handlers/GenresHandlers');

routerGenres.get('/', getGenHandlers)

module.exports = routerGenres