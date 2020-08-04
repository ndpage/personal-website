
// Package declarations for this server.js file

var express= require('express'); 
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var hostname = '127.0.0.1';

app.use(bodyParser.json());

// Configuation for the server app

app.use(express.static(__dirname + '/public')); // Serve everything in the public directory

app.get('/home', (reg,res)=>res.sendFile(__dirname + '/public/index.html'));  

app.get('/projects', (req,res) => res.sendFile(__dirname + '/public/projects.html')); 

app.get('/contact', (req,res) => res.sendFile(__dirname + '/public/contact.html')); 

app.get('/admin',
    function(request, response){
        response.json(
                    {   
                        username:"Nonya",
                        password: "Bizness"
                    });
    }
);
//app.get('/hello-world', function(req, res) => res.send('Hello World!'));


// Start the server
app.listen(port, hostname); //127.0.0.1
console.log("Listening at http://" + hostname + ":" + port);
