const mysql = require('mysql2/promise');
require('dotenv').config();

async function connect() {
    try {
    const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
    });
    if (connection) {
    console.log('Database Connected');
    //console.log(connection);
    }
    return connection;
    } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
    }
    }

module.exports = {connect}