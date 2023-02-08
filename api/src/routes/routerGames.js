const express = require('express');
const routerGames = express.Router()

const {getGamesHandler} = require("../Handlers/GameHandler")

routerGames.get('/', getGamesHandler)