var express = require('express');
var app = express();
var apiRouter = require('./api/api');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//For logging
app.use(morgan());
//Json parsing
app.use(bodyParser.json());
//Set up api routes
app.use('/api', apiRouter );








app.listen(3000, function(){
  console.log("Listening on port 3000.");
});
