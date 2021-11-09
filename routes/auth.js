/**
 * rutas de usuarios /auth
 * host + api/auth/endpoints
*/
const { Router } = require('express');
const { check } = require('express-validator');
const {createUser, loginUser, renewToken} = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post(
    '/register',
    [
        check('name', 'name must be inserted').not().isEmpty(),
        check('email', 'email is incorrect').isEmail(),
        check('password', 'password must be at least 5 words').isLength({min:5}),
        validateFields
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'email is incorrect').isEmail(),
        check('password', 'password must be at least 5 words').isLength({min:5}),
        validateFields,
    ],
    loginUser
);

router.get('/renew', validateJWT, renewToken);

module.exports = router;