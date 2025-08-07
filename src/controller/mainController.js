const path = require('node:path');
const data = require('../models/productos.json');
const personas = require('../models/personas.json');

const controller = {
    //Para mostrar archivos .ejs
    home: (req, res) => {
        res.render('home', {data:data})
    },
    personas: (req, res) => {
        res.render('personas', {personas})
    },
    // Para mostrar el formulario
    form: (req, res) => {
        res.render('form')
    },
    //  Procesa los datos del formulario y los muestra en consola
    processform: (req, res) => {
    const { nombre, apellido, edad, email, mensaje } = req.body;
    console.log('Datos recibidos del formulario: ', {nombre, apellido, edad, email, mensaje});
    res.send('Formulario recibido, gracias por registrarte');
    }
}

module.exports = controller;

















// processfORM: (req, res) => {
    // const { nombre, edad, email } = req.body;
    // console.log('Datos recibidos del formulario: ', {nombre, edad, email});
    // res.send('Formulario recibido, gracias por registrarte');
    // }

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