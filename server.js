
// Package declarations for this server.js file

var express= require('express');
// var bodyParser = require('body-parser')syn
var app = express();
var port = 3000;
var hostname = '127.0.0.1';
// Configuation for the server app

app.use(express.static(__dirname + '/public')); // Serve everything in the public directory

//app.use(bodyParser.json());

app.get('/', (reg,res)=>res.sendFile(__dirname + '/public/index.html'));  
// app.get('/hello-world', (req, res) => res.send('Hello World!'));
//app.get('/projects', (reg,res)=>res.sendFile(__dirname + '/public/projects.html'));

// Start the server
app.listen(port, hostname); //127.0.0.1
console.log("Listening at http://" + hostname + ":" + port);
