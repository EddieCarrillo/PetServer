var express = require('express');
var app = express();
var apiRouter = require('./api/api');

//Set up api routes
app.use('/api', apiRouter );

  






app.listen(3000, function(){
  console.log("Listening on port 3000.");
});
