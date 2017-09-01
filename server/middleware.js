

var prepareQueries = function(){
return function(req, res, next){
  var queryParams = req.query;
  console.log("Query params: " + queryParams)


  //Handle include parameters
  var include = queryParams.include
  var includeFields;
  if (include){
       includeFields = include.split(',')
       //Create a string to pass into Mongoose's populate function
       var populateString = "";
       includeFields.forEach(function(memberField){
            populateString += memberField + " "
       })

       populateString.slice(0, populateString.length-1)

       req.populate = populateString
       //We dont need this property anymore it will be confusing if we keep
       //for the following few lines
       delete queryParams.include
  }


  req.constraint = queryParams;
  next()

}

}




exports.prepareQuery = prepareQueries;
