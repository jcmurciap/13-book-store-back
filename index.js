// BACKEND SERVER

// importing
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// crea el servidor de express
const app = express();

// base de datos
dbConnection();

// CORS
app.use(cors());


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
app.use('/api/events', require('./routes/events'));

// escucha peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});
