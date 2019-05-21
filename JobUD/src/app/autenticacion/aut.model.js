const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex');
const usuarioSchema = new Schema ({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }, 
    contraseña: {
        type: String,
        required: true,
    }
}, {
    // crear fecha de creación y actualización  
    timestamps: true
});

module.exports = usuarioSchema;