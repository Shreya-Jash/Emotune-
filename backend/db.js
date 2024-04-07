// gonna help us connect server with database
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Shreya@2001",
  host: "localhost",
  port: 5432,
  database: "loginauth",
});

module.exports = pool;
