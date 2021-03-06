const { Schema, model } = require('mongoose');

// Info que se grabarĂ¡ en la base de datos
const EventSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    user: {
        // es una referencia a user
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
}); 

// quitar el '__v' y cambia '_id' a 'id' en la respuesta de postman.
EventSchema.method('toJSON', function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

const Event = model('Event', EventSchema);
module.exports = { Event }; 