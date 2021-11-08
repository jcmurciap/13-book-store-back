/**
 * rutas de usuarios /auth
 * host + api/auth/new||login||renew
*/
const { Router } = require('express');
const {createUser, loginUser, renewToken} = require('../controllers/auth');
const router = Router();


router.get('/renew', renewToken);
router.post('/', loginUser);
router.post('/register', createUser);


module.exports = router;