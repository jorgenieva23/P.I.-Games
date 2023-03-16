const express = require('express');
const routerPlatforms = express.Router()

const {getPlatHandlers} = require('../Handlers/PlatHandlers');

routerPlatforms.get('/', getPlatHandlers)

module.exports = routerPlatforms