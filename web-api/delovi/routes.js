var express = require('express');
const query = require('./query');

var routes = express.Router();


routes.get('/delovi', query.getAllDel);








module.exports = routes;