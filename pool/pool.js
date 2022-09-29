const { Pool } = require('pg');
/*const config = {
  user : 'postgres',
  host : 'localhost',
  password : '1234',
  database : 'EPS'
};
*/
const config = {
  user : 'owwnczwsjdxqcg',
  host : 'ec2-3-229-165-146.compute-1.amazonaws.com',
  password : '8f5823c8a52209f4a398b0dcb52a79918d7df592501f2cb35da9a09ef11d927b',
  database : 'de8t1fjr64qguu',
  port: 5432
};

const pool = new Pool(config);
module.exports.pool = pool;
