const { Router } = require('express');
const { createEvent, getEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

// todas las peticiones 'router' pasan por JWT
router.use(validateJWT);
router.post('/', createEvent);
router.get('/', getEvent);
router.put('/:d', updateEvent);
router.delete('/:d', deleteEvent);

module.exports = router;