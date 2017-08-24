
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
//Connect to db
mongoose.connect('mongodb://localhost/myapp');

var connection = mongoose.connection;
//Connect grid and mongo
Grid.mongo = mongoose.mongo



//Create connection to database and Grid
module.exports = Grid(connection.db)
