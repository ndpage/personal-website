
var express= require('express');
var app = express();



app.use(express.static(__dirname + '/public'));

app.get('/hello.txt', function(req, res){
    res.send('Hello World');
  });
  



  // Start the server
  var server = app.listen(8080, function() {
      console.log('Listening on port 8080');
  });