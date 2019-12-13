var express = require('express');
var bodyParser = require('body-parser');

const appRouter = require("./router");
const middleware = require('./mi/common');
const con = require('./database');
require('dotenv/config');

const app = express();

app.use(middleware.logger);

app.use(appRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var port = process.env.PORT || 8020;
app.listen(port, () => {
    console.log(`API is listenig on port ${port}!`);
});