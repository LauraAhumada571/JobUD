const  User = require('./aut', );
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const CLAVE_SECRETA = 'jobud82738102Distri';

exports.crearUsuario = (req, res, next) => {
    const nuevoUsuario = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }

    User.crearUsuario (nuevoUsuario, (err, User) => {
        if (err) return res.status(500).send('Error del servidor');
        const expiresIn = 24*60*60;
        const accesoToken = jwt.sign({id: User.id},
            CLAVE_SECRETA, {
                expiresIn : expiresIn
            })   

        // respuesta hacia fronend
        res.send({User});    
    })
};

exports.loginUser = (req, res, next) => {
    const datosUsuario = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({email: datosUsuario.email}, (err, User) => {
        if (err) return res.status(500).send('Error del servidor')
        //--->pendiente
        if (!User){
            // correo electronico no existe
            res.status(409).send({message: 'Algo esta mal'});
        }else{
            const resulPassword = datosUsuario.password;
            if(resulPassword){
                const expiresIn = 24 * 60 * 60;
                const accesoToken = jwt.sign({id: User.id}, CLAVE_SECRETA, {expiresIn: expiresIn}); 
                res.send({datosUsuario});
            }else{
                // contraseña incorrecta
                res.status(409).send({message: 'Algo esta mal'});
            }
        }
    })
}