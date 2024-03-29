
// Package declarations for this server.js file

var express= require('express'); 
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var upload = multer();
var app = express();

var port = 3000;
var hostname = '127.0.0.1';

let formData = {};

// Configuation for the server app

app.use(express.static(__dirname + '/public')); // Serve everything in the public directory

app.set('view engine', 'pug');
app.set('views', './views');

// For parsing Application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/home', (reg,res)=>res.sendFile(__dirname + '/public/index.html'));  

app.get('/projects', (req,res) => res.sendFile(__dirname + '/public/projects.html')); 

app.get('/contact', (req,res) => res.sendFile(__dirname + '/public/contact.html')); 

app.get('/admin',
    function(request, response){
        response.json(
                        {   
                            username:"Nonya",
                            password: "Bizness"
                        }
                    );
    }
);

app.post('/contact/submit', function (req, res) {
   /*
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.collection('feedbacks').insertOne(req.body);
    });
    */  
    res.send('Data received:' + JSON.stringify(req.body));
});

app.get('/view-feedbacks',  function(req, res) {
   
            res.status(200).json(feedbacks);
});

//Capture All 404 errors
app.use(function (req,res,next){
    res.status(404).sendFile(__dirname+'/public/index.html');
});

// Start the server
app.listen(port, hostname); //127.0.0.1
console.log("Listening at http://" + hostname + ":" + port);
