const { conn, createUser } = require('../config/database');
const apiResponse = require('../helper/api_response');

exports.getUsers = (req, res) => {
    conn.query('SELECT * FROM users', (err, rows, fields) => {
        if (err) console.error(err.message);
        
        apiResponse.successRes(res, '', rows);
    });
};