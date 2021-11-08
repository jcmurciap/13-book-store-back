/**
 * rutas de usuarios /auth
 * host + api/auth
*/

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        ok: true,
    });
});

// la ruta '/' ya esta habilitada, ya existe
module.exports = router;