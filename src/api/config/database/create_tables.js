const { conn } = require('./connection');
const { DB_NAME } = process.env;

const createUsers = conn.query(`CREATE TABLE ${DB_NAME}.users (id INT(5) NOT NULL AUTO_INCREMENT, tele_id INT(25) NOT NULL, first_name VARCHAR(128), last_name VARCHAR(128), username VARCHAR(128), balance DECIMAL(8, 2) NULL, point INT(8), registered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id));`, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    
    console.log(`Users table created`);
});

module.exports = { createUsers };