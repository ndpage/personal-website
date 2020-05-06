
// Package declarations for this server.js file

var express= require('express');
var bodyParser = require('body-parser')
var app = express();

// Configuation for the server app
app.use(express.static(__dirname + '/public')); // Server everything in the public directory
app.use(bodyParser.json())
  

// Start the server
app.listen(3000, '127.0.0.1');