# PetWorldServer

Download server from GITHUB here .
https://github.com/EddieCurio/PetServer

Download and install Node.js
https://nodejs.org/en/download/

Download mongodb here
https://www.mongodb.com/download-center#community



After you download the project navigate to the project root  <WHEREEVER_YOU_DOWNLOADED_PROJECT>/Petworld


If you use the server from github, the server runs on port 3000 so when you are using the server locally you should the url: http://localhost:3000/api/whateverelsefam…

Also make sure to start the mongodb server first since the server assumes it is already on.

Quick Mongo Tutorial

Command: sudo mongod <- starts mongodb

 sudo mongo <- Will let you perform command on database


Example
Start mongo database (‘sudo mongod’)
in one tab.

Start mongo command line interface (‘sudo mongo’) in another tab

To see what elements are in each “Collection” (Similar to table)
navigate to database by going inside mongo command line interface(the one you typed ‘sudo mongo’ for...)

type command ‘use myapp’ (myapp is the name of the database)

Type ‘show collections’ to show all Models/Collections/Tables in a list like Pet, User, Comment, Post, etc.

Type ‘db.<collection_name>.find()’ to show all documents/rows/objects inside the collection
Example: ‘db.comments.find()’ will display a list of all the comments in the Comments colleciton.



User API


{
	“GET /users”: {
     CAN USE QUERY PARAMS
	  “desc”: “returns all users”,
	  “response: 200 application/json”,
         “data”: [{}, {}, {}]
},

“GET /users/:id”: {
	  “desc”: “returns a user represented by it’s id.”,
	  “response: 200 application/json”,
         “data”: [{}, {}, {}]
},

"POST /users": {
    "desc": "create and returns a new user using the posted object as the user",
    "response": "201 application/json",
    "data": {}
  },




}





Pet API
{
	“GET /pets”: {
        CAN USE QUERY PARAMS
	  “desc”: “returns all public  pets”,
	  “response: 200 application/json”,
         “data”: [{}, {}, {}]
	   “query”: where = {name: {“$”}}

},

“GET /pets/id/:id” {
	  “desc”: “returns a pet represented by it’s id.”,
	  “response: 200 application/json”,
         “data”: {}
},

“GET /pets/me”: {
	  “desc”: “Returns all the pets associated with the current user logged in”,
	  “response: 200 application/json”,
         “data”: [{}, {}, {}]
},

“PUT /pets/id/:id”: {
	  “desc”: “Updates the pet associated with the id”,
	  “response: 200 application/json”,
         “data”: {}
},

“POST /pets/”: {
	  “Desc”: “create and returns a new pet using the posted object as the pet",
	  “response: 201 application/json”,
         “data”: {}
},



}
Post API
{
	“GET /posts”: {
       CAN USE QUERY PARAMS
	  “desc”: “returns all public posts”,
	  “response: 200 application/json”,
         “data”: [{}, {}, {}]
},

“GET /posts/id/:id”: {
	  “desc”: “returns a post represented by it’s id.”,
	  “response: 200 application/json”,
         “data”: {}
},

“GET /posts/me”: {
	  “desc”: “Returns all the post associated with the current user logged in”,
	  “response: 200 application/json”,
         “data”: [{},{},{},...,{}]
	   “queryParams”: ‘where’= {jsonObject: field}
},

“POST /posts/”: {
	  “Desc”: “create and returns a new post using the posted object as the post",
	  “response: 201 application/json”,
         “data”: {}





}











Comment API
{
“GET /comments/:id”: {
	  “desc”: “returns a comment represented by it’s id.”,
	  “response: 200 application/json”,
         “data”: {}
},

“GET /comments/”: {
	  “desc”: “Returns all the comments associated with a post using where key”,
	  “response: 200 application/json”,
         “data”: [{},{},{},...,{}]
	   “queryParams”: ‘where’= {post: field}
}

“POST /comments”: {
	  “desc”: “Create a new comment for an associat post using where key”,
	  “response: 200 application/json”,
         “data”: [{},{},{},...,{}]
	   “queryParams”: ‘where’= {post: field}
}



}

















Files API
{


“GET /files/:fileName” {
	  “desc”: “returns a file represented by it’s id.”,
	  “response: 200 application/json”,
         “data”: {}
},

“POST /files” {
	  “desc”: “returns a file represented by it’s id.”,
	  “response: 200 application/json”,
         “data”: {}
}





}




Query Params
Format <API_URL>?include=<member field trying to populate depending on api>&where=<member field meets constraint>

 include value will a normal key
Example include=owner
where value will be a json object
Example: where={breed: “Cairn Terrier”}

Make sure to url encode json (To account for special characters like spaces.)
IF YOU DON’T KNOW HOW TO DO THAT THEN ASK ME OR GOOGLE/STACKOVERFLOW my friend. I will probably google it if you ask me.

Example

http://baseurl.com/api/pets?include=owner&where={age: {$gt: 5}}


Woah nested object. What’s with the nested  {$gt: 5}. $gt stands for greater than. So I am trying to query for all pets greater than 5 years of age. Nothing special, follow this link for more ---> https://docs.mongodb.com/manual/reference/operator/query/
