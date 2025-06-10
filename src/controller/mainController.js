const path = require('node:path');

const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    productos: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productos.html'))
    },
    registrarse: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/registrarse.html'))
    }
    // contac: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../views/contact.html'));
    // }
}


module.exports = controller;