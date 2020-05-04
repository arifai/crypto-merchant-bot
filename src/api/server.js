require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const { conn, createUser } = require('./config/database');
const apiResponse = require('./helper/api_response');
const { PORT } = process.env;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', (req, res) => {
    return apiResponse.notFoundRes(res, 'not found');
});

app.listen(PORT, () => {
    console.log('Starting...');
    console.log(`Server started on http://localhost:${PORT}`);
});

