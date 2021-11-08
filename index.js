// BACKEND SERVER

// importing
const express = require('express');
require('dotenv').config();

// crea el servidor de express
const app = express();

// Directorio publico
// use() is a middleware*
app.use(express.static('public'));

// rutas
// app.get("/", (req, res) => {
//     res.json({
//         ok: true,
//     });
// });

// escucha peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});