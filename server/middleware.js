var queryString = require('querystring')


/*Takes query params. Adds populate and constaint fields.
'populate' field is a string passed into mongoose populate function.
'constraint' field is a string passed into queries (mongoose 'find' function)
*/
var prepareQueries = function(){


return function(req, res, next){
  var constraint = {};
  var populateString = "";
  req.constraint = constraint
  req.populate = populateString

  var queryParams = req.query;
  if (!queryParams || queryParams == {}){
    return next();
  }
  //console.log()
  console.log("Query params: " + JSON.stringify(queryParams))

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

  if (!queryParams["where"]){return next();}
 // Unescape url encoded json string query param
  var escapedString = queryString.unescape(queryParams["where"]);



    //If there is a where query
       constraint = JSON.parse(escapedString);

  console.log("escapedString: ", escapedString)
  //Convert the string into a javascript object

  //Added the query as the constraint for search.
  req.constraint = constraint;
//Attatch populate string to request. for mongoose upon search.
  req.populate = populateString
  next()

}

}




exports.prepareQuery = prepareQueries;
