//Se realiza la conexion a mongoDB

const mongoose = require('mongoose');
const dbURL = require('./propiedades');

module.exports = () => {
    mongoose.connect(dbURL, {useNewUrlParser: true})
        .then (() => console.log('Base de datos conectada'))
        .catch (err => console.log('Error en la conexion con la base de datos'))

        process.on('SIGINT', () =>{
            mongoose.connection.close(() => {
                console.log ('Mongo esta desconectada');
                process.exit(0);
            });
        });
}