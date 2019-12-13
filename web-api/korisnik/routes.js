var express = require('express');
const query = require('./query');

var routes = express.Router();


routes.get('/users', query.getAllUsers);








module.exports = routes;