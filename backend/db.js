// gonna help us connect server with database
const Pool = require("pg").Pool;

const pool = new Pool({connectionString: process.env.DB_URL});
console.log(pool)

module.exports = pool;
