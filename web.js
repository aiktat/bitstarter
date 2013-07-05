var fs = require('fs');
var buffer = require('buffer');
var express = require('express');

var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//    var file_content = fs.readFileSync('index.html', 'utf-8');
//    console.log(file_content);
//    response.send(file_content);
//});

app.get('/', function(request, response) {
    var file_content = fs.readFileSync('index.html');
    var buffer = new Buffer(file_content);
    var string = buffer.toString('utf-8');
    console.log(string);
    response.send(string);
});
 
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

