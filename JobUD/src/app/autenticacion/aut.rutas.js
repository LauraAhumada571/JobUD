const User = require('./aut.controlador');
module.exports = (router) => {
    router.post('/registro', Users.crearUsuario);
    router.post('/login', Users.loginUser);
};