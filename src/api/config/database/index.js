const { conn } = require('./connection');
const { createUser } = require('./create_tables');

module.exports = { conn, createUser };