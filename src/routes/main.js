const express = require('express');

const router = express.Router();
const mainController = require('./../controller/mainController');



router.get('/', mainController.home);
router.get('/productos', mainController.productos);
router.get('/registrarse', mainController.registrarse);
//router.ger('/contact', mainController.contact);

module.exports = router;