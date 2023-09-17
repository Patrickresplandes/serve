const mysql = require('mysql2/promise');
require('dotenv').config();

async function connect() {
    try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
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