require('dotenv').config();
const mysql = require('mysql');
const { USER, PASSWORD, DB_NAME } = process.env;

const conn = mysql.createConnection({
    host: 'localhost',
    user: USER,
    password: PASSWORD,
    database: DB_NAME
});

conn.connect((err) => {
    if (err) {
        console.log(`Status: ${err.stack}`);
        return;
    }

    console.log(`Status: ${conn.state}`);
});

module.exports = { conn };