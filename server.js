
// Package declarations for this server.js file
var express= require('express');
var bodyParser = require('body-parser')
var app = express();

// Configuation for the server app
app.use(express.static(__dirname + '/public')); // Server everything in the public directory
app.use(bodyParser.json());


app.post('')
/*
app.get('/home', function(req, res){
    res.send('public/index.html');
  });
  */

// Start the server
var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});