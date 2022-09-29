const express = require('express');
const app = express();

const {routerBusquedas} = require('./routers/routerBusqueda.js');
app.use('/buscar', routerBusquedas);

const { pool } = require('./pool/pool.js');

const agregarEps = async () => {
    const query = 'INSERT INTO eps VALUES ($1, $2, $3)';
    const values = [1, 'Sanitas', 6];
    const res = await pool.query(query, values);
    console.log(res);
};

app.get('/', (req, res) => {
    res.send("API de eps");
});

const PORT = process.env.port || 8080;


app.listen(PORT, ()=> {
    console.log('Escuchando el puerto ' + PORT);
});
