const { Router } = require('express');
require('dotenv').config()
// const videogames = require('./Controllers/ControllerVideogames.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerGames = require("./routerGames")
const routerGenres = require("./routerGenres")

const router = Router();

// Configurar los routers
router.use('/videogames', routerGames);
router.use('/genres', routerGenres)



module.exports = router;
