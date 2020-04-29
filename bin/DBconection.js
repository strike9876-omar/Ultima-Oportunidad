/**
 * AUTOR: Rony Villafuerte Serna
 * FECHA: 02-AGO-2019
 * DESCRIPCION: encargada de realizar una conexion a la BD
 * 
 * MODIFICACIONES:

*/


const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 3,
    host: '127.0.0.1',
    user: 'root',
    password: 'oculto',
    database: 'DBdemo'
});



module.exports = pool;