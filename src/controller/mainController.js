const path = require('node:path');
const data = require('../models/productos.json')

const controller = {
    //Para mostrar archivos .ejs
    home: (req, res) => {
        res.render('home', {data:data})
    }
    
}

module.exports = controller;

    // Plantilla de prueba para .ejs
    // home: (req, res) => { //MOSTRAR MOTOR DE PLANTILLAS
    //     // res.sendFile(path.join(__dirname, '../views/home.html'));
    //     res.render('home', {
    //         title: 'home',
    //         description: 'Bienvenido a la página de inicio'
    //     })
    // }

    //Para mostrar archivos .html
    // home: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../views/home.html'));
    // },
    // productos: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../views/productos.html'))
    // },
    // registrarse: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../views/registrarse.html'))
    // }

//}