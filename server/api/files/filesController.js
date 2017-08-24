var multer = require('multer');
var upload = multer();
var mongoose = require('mongoose');
var gfs = require('../../db');
var fs = require('fs');
var stream = require('stream');
var crypto = require('crypto');
var Files = require('./filesModel');



exports.param = function(req, res, next, fileName){
    var readStream = gfs.createReadStream({
      filename: fileName
    });

    readStream.on('error', function(err){
      console.log(err.message);
      return  res.status(400).json();
    });

    if (!readStream){
    return  res.status(400).json();
    }

    req.stream = readStream
    next();


}

exports.upload = function(req, res, next ){
  var file = req.file
  console.log("HEADERS:",req.headers)
  console.log("BODY", req.body);
  if (!file){
    console.log('Trouble finding file wanted to upload');
    return res.status(401).json();
  }
 console.log(file)

//Convert file buffer to stream to be passed to GridFS
  var buffer = req.file.buffer;
  var uploadFileStream = new stream.PassThrough();
  uploadFileStream.end(buffer);
  var id = crypto.randomBytes(20).toString();

  var writeStream = gfs.createWriteStream({
    filename: file.originalname
  });

  uploadFileStream.pipe(writeStream);

  writeStream.on('close', function(){
    console.log("Finished writing to GRIDFS");
  });

  writeStream.on('error', function(){
     console.log("Error writing file to GRID");
    return res.status(400).json();
  })

  res.status(201).json({ok: "ok"});

}



exports.get = function(req, res, next){
    req.stream.pipe(res);

}

exports.post = function(req, res, next){
  var file = req.body;
  Files.create(file, function(err, newFile){
    if (err ){
      console.log("ERROR", err.message);
      res.status(400).json();

    }else if (!newFile){
      console.log("Could not find the file");
      res.status(400).json();
    }else{
      console.log("Created the file");
      res.status(201).json({ok:"ok"});
    }
  })
}
