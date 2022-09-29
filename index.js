const express = require('express');
const app = express();

const {routerBusquedas} = require('./routers/routerBusqueda.js');
app.use('/buscar', routerBusquedas);

//Middleware
var cors = require('cors');

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });

app.get('/', (req, res) => {
    res.send("API de eps");
});

const PORT = process.env.PORT || 8080;
console.log(PORT);


app.listen(PORT, ()=> {
    console.log('Escuchando el puerto ' + PORT);
});
