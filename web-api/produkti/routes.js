var express = require('express');
const query = require('./query');

var routes = express.Router();

routes.get('/produkti', query.getAllProdukt);









module.exports = routes;