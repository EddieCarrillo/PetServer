var express = require('express');
var router = express.Router();
var User = require('../userModel')
var decodeToken = require('../../auth').decodeToken






router.post('/login',decodeToken(), function(req, res, next){
  var user = req.user


})
