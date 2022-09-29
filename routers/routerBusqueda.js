const express = require('express');

const routerBusquedas = express.Router();
const { pool } = require('../pool/pool.js');
//middleware
routerBusquedas.use(express.json());

routerBusquedas.post('/', (req, res) => {
    const { body } = req;
    buscar(body)
        .then((response) => {
            res.send(response);
        });
});

const buscar = async ( body ) => {
    if(body.query){
        return buscarQuery(body.query);
    };

    if(body.tabla){
        return buscarTabla(body.tabla, body.columnas, body.condiciones);
    }
    
    return res.rows;
}

const buscarTabla = async ( tabla, columnas, condiciones ) => {
    const stringColumnas =  columnas === undefined ? '*' : columnas.join(', ');
    const stringCondiciones = condiciones === undefined ? '' : 'WHERE ' + condiciones;
    const query = `SELECT ${stringColumnas} FROM ${tabla} ${stringCondiciones}`;
    const res = await pool.query(query);
    if(res.error){
        routerBusquedas.status(400).send('Error en el query');
        return;
    } 
    return res.rows;
}

const buscarQuery = async ( {query} ) => {
    const res = await pool.query(query);
    if(res.error){
        routerBusquedas.status(400).send('Error en el query');
        return;
    } 
    return res.rows;
}

module.exports.routerBusquedas = routerBusquedas;