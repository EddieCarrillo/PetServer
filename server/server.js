var express = require('express');
var app = express();
var apiRouter = require('./api/api');
var authRouter = require('./auth/router');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt')
var checkValidToken = expressJwt({secret: 'lemon'})

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myapp');



app.post('/test', function(req,res, next){


});

//For logging
app.use(morgan());
//Json parsing
app.use(bodyParser.json());
//Set up api routes
app.use('/api', apiRouter );
app.use('/auth', authRouter);

app.use(function(err, req, res, next){
  console.log(err.message)
  res.status(400).send('Here is the error ^^^^^^')
});









app.listen(process.env.port || 3000, function(){
  console.log("Listening on port");
});


module.exports = app;
