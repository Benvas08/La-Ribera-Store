const express = require('express');

const router = express.Router();
const mainController = require('./../controller/mainController');

router.get('/', mainController.home);

// Ruta  para el formulario
router.get('/registrarse', mainController.form);

router.post('/form', mainController.processform);

router.get('/personas', mainController.personas);

// router.get('/form', mainController.registrarse);

module.exports = router;