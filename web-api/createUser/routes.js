var express = require('express');
const query = require('./query');

var routes = express.Router();

routes.post('/user', query.getAll);









module.exports = routes;