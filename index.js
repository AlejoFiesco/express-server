const express = require('express');
const app = express();

const {routerBusquedas} = require('./routers/routerBusqueda.js');
app.use('/buscar', routerBusquedas);

const { pool } = require('./pool/pool.js');

app.get('/', (req, res) => {
    res.send("API de eps");
});

const PORT = process.env.PORT || 8080;
console.log(PORT);


app.listen(PORT, ()=> {
    console.log('Escuchando el puerto ' + PORT);
});
