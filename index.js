// BACKEND SERVER

// importing
const express = require('express');

// crea el servidor de express
const app = express();

// rutas
app.get("/", (req, res) => {
    res.json({
        ok: true,
    });
});

// escucha peticiones
app.listen(5000, () => {
    console.log(`Server running at port ${5000}`);
})