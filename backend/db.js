// gonna help us connect server with database
require("dotenv").config();
const Pool = require("pg").Pool;
const url=process.env.DB_URL
console.log(url)
const ssl = {
    rejectUnauthorized: false // You may need to adjust this based on your SSL/TLS configuration
  };
const pool = new Pool({
    connectionString: url,
    ssl: ssl
});
pool.query('SELECT 1', (err, res) => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Database connection successful');
    }
  });

module.exports = pool;
