// Dependencies
var express = require("express");
var bodyParser= require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
//var PORT = 8082;
var PORT = process.env.PORT || 8082;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//Server Listenting
app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
    