var Files = require('./filesModel');


exports.param = function(req, res, next, fileName){
    Files.findOne({name: fileName}, function(err, file){
      if (err){
         console.log("Error had occured.", err.message);
        res.status(400).json();
      }else if (!file){
        console.log("Could not find the file.")
        res.status(400).json();
      }else {
        res.file = file;
        next();
      }
    });
}

exports.get = function(req, res, next){
    res.json(res.file);
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
