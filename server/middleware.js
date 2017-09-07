var queryString = require('querystring')


/*Takes query params. Adds populate and constaint fields.
'populate' field is a string passed into mongoose populate function.
'constraint' field is a string passed into queries (mongoose 'find' function)
*/
var prepareQueries = function(){


return function(req, res, next){
  var queryParams = req.query;
  console.log("Query params: " + JSON.stringify(queryParams))
var populateString = "";
  //Handle include parameters
  var include = queryParams.include
  var includeFields;
  if (include){
       includeFields = include.split(',')
       //Create a string to pass into Mongoose's populate function

       includeFields.forEach(function(memberField){
            populateString += memberField + " "
       })

       populateString.slice(0, populateString.length-1)

       //We dont need this property anymore it will be confusing if we keep
       //for the following few lines
       delete queryParams.include
  }

  var escapedString = queryString.unescape(queryParams["where"]);
  var constraint = JSON.parse(escapedString);
  req.constraint = constraint;

  req.populate = populateString
  next()

}

}




exports.prepareQuery = prepareQueries;
