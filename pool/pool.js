const { Pool } = require('pg');
const config = {
  user : 'postgres',
  host : 'localhost',
  password : '1234',
  database : 'EPS'
};

const pool = new Pool(config);
module.exports.pool = pool;
