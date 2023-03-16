const express = require('express');
const routerGames = express.Router()

const {getGamesHandler, getGameHandler, createGameHandler, deleteGame} = require("../Handlers/GameHandler")

routerGames.get('/', getGamesHandler)

routerGames.get('/:id', getGameHandler)

routerGames.post('/', createGameHandler)

routerGames.delete('/:id', deleteGame)

module.exports = routerGames