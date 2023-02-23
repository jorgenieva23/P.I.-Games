const express = require('express');
const routerGames = express.Router()

const {getGamesHandler, getGameHandler, createGameHandler} = require("../Handlers/GameHandler")

routerGames.get('/', getGamesHandler)

routerGames.get('/:id', getGameHandler)

routerGames.post('/', createGameHandler)

module.exports = routerGames