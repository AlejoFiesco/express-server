const express = require('express');

const routerBusquedas = express.Router();
const { pool } = require('../pool/pool.js');
//middleware
routerBusquedas.use(express.json());

routerBusquedas.get('/', (req, res) => {
    res.send(JSON.stringify({
        respuesta: "respuesta"
    }))
});

routerBusquedas.get('/:tabla', (req, res) => {
    const tabla = req.params.tabla;

    buscar(tabla)
        .then((response) => {
            res.send(response);
        });
});

const buscar = async ( tabla, columnas=undefined, condiciones=undefined ) => {  
    return await buscarTabla(tabla, columnas, condiciones);
}

const buscarTabla = async ( tabla, columnas, condiciones ) => {
    const stringColumnas =  columnas === undefined ? '*' : columnas.join(', ');
    const stringCondiciones = condiciones === undefined ? '' : 'WHERE ' + condiciones;
    const query = `SELECT ${stringColumnas} FROM ${tabla} ${stringCondiciones}`;
    console.log(query);
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