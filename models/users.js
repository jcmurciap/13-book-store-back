const { Schema, model } = require('mongoose');

// info que se va a grabar en la base de datos
const UserSchema = new Schema({
    name: {
        type: String,
        require: true, 
    },
    email: {
        type: String,
        require: true,
        unique: true 
    },
    password: {
        type: String,
        require: true, 
    },
});

const Model = model('User', UserSchema);
module.exports = {Model};