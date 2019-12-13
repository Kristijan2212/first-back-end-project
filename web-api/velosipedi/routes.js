var express = require('express');
const query = require('./query');

var routes = express.Router();


routes.get('/velosipedi', query.getAllBikes);








module.exports = routes;