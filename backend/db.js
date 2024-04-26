// gonna help us connect server with database
require("dotenv").config();
const Pool = require("pg").Pool;
const url=process.env.DB_URL
console.log(url)
const pool = new Pool({connectionString: url});
pool.query('SELECT 1', (err, res) => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Database connection successful');
    }
    pool.end(); // Don't forget to release the pool when done.
  });

module.exports = pool;
