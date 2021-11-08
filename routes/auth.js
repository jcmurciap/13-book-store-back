/**
 * rutas de usuarios /auth
 * host + api/auth/endpoints
*/
const { Router } = require('express');
const {createUser, loginUser, renewToken} = require('../controllers/auth');
const router = Router();

//endpoints
router.get('/renew', renewToken);
router.post('/', loginUser);
router.post('/register', createUser);

module.exports = router;