const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();


const pool = new Pool({
    connectionString: process.env.DBConnLink,
    ssl: {
        resectUnanthorized: false
    }
});

module.exports = pool;