const { Schema, model } = require('mongoose');

// Info que se grabará en la base de datos
const EventSchema = Schema({
    name: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    user: {
        // es una referencia a user
        type: Schema.Types.ObjectId,
        ref: 'Model',
    },
}); 

const Model = model('Event', EventSchema);
module.exports = { Model };