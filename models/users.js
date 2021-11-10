const { Schema, model } = require('mongoose');

// info que se va a grabar en la base de datos
const UserSchema = new Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true, 
    },
});

const Model = model('User', UserSchema);
module.exports = {Model};