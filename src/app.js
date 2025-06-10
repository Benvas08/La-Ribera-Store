const express = require ('express');
const path = require ('node:path'); // 1. IMPORTACION ACOMODADA
const rutasMain = require ('./routes/main'); // Importamos las rutas principales desde main.js
const app = express(); // 2. INICIALIZACION

app.use(express.static(path.join(__dirname, '../public'))); // 3. MIDDLEWARE PARA ARCHIVOS ESTATICOS
// Rutas
app.use('/', rutasMain); // 4. RUTAS PRINCIPALES
// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Servidor funcionando en http://localhost:${PORT}`);}); // 5. INICIALIZACION DEL SERVIDOR