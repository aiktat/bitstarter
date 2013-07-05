var fs = require('fs');
var buffer = require('buffer');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var file_content = fs.readFileSync('index.html', 'utf-8');
    console.log(file_content);
    response.send(file_content);
});
 
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

