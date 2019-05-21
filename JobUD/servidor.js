const autRutas = require('./src/app/autenticacion/aut.rutas');
const express = require ('express');
const propiedades = require('./src/app/configuracion/propiedades');
const DB = require('./src/app/configuracion/db');

DB();
const app = express();
const ruta = express.Router();

app.use('/api', router);
autRutas(router);

router.get ("/", (req, res) =>{
    res.send('Hey');
});
app.use(router);
app.listen(propiedades.PORT, () => console.log('Servidor corriendo en el puerto 3000'));