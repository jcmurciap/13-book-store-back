const { Router } = require('express');
const { check } = require('express-validator');
const { createEvent, getEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

// todas las peticiones 'router' pasan por JWT
router.use(validateJWT);

router.post(
    '/',
    [
        check('name','Book name must be included').not().isEmpty(),
        check('author','Price name must be included').not().isEmpty(),
        check('price','Price name must be quantity').isNumeric(),
        validateFields,
    ], 
    createEvent);

router.get('/', getEvent);

router.put(
    '/:id',
    [
        check('name','Book name must be included').not().isEmpty(),
        check('author','Price name must be included').not().isEmpty(),
        check('price','Price name must be quantity').isNumeric(),
        validateFields,
    ], 
    updateEvent
);

router.delete('/:id', deleteEvent);

module.exports = router;