const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {routerBusquedas} = require('./routers/routerBusqueda.js');
app.use('/buscar', routerBusquedas);

const { pool } = require('./pool/pool.js');

//Middleware
var cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("API de eps");
});

const PORT = process.env.PORT || 8080;
console.log(PORT);


app.listen(PORT, ()=> {
    console.log('Escuchando el puerto ' + PORT);
});
