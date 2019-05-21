const mongoose = require('mongoose');
const autSchema = require('./aut.model');

autSchema.statics = {
    crear: function (dato, callback){
        const usuario = new this(dato);
        usuario.save(cb);
    }, 
    
    login: function (query, callback){
        this.find(query, callback);
    }
}

const autModel = mongoose.model('Usuarios', autSchema);

module.exports = autModel;