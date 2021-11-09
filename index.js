// BACKEND SERVER

// importing
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// crea el servidor de express
const app = express();

// base de datos
dbConnection();


// Directorio publico
// use() is a middleware*
app.use(express.static('public'));

// lectura y parseo del body
app.use(express.json());

/**
 * =>RUTAS<=
 * todo lo que require(...) vaya a exportar lo va
 * a habilitar en '/api/auth'
*/
app.use('/api/auth', require('./routes/auth'));

// escucha peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});
