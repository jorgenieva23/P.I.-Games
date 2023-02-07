const { Router } = require('express');
const videogames = require('./Controllers/ControllerVideogames.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers

router.use('/videogames', videogames);
// router.use('/genres');

// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
