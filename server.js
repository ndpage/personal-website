
// Package declarations for this server.js file

var express= require('express');
var bodyParser = require('body-parser')
var app = express();
var port = 3000;
var hostname = '127.0.0.1';
// Configuation for the server app

app.use(express.static(__dirname + '/public')); // Serve everything in the public directory
app.use(bodyParser.json())
  
app.get('/hello-world', (req, res) => res.send('Hello World!'))


// Start the server
app.listen(port, hostname); //127.0.0.1
console.log("Listening at http://" + hostname + ":" + port);
