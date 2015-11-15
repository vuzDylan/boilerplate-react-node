var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname+'/../dist/'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/templates/index.html');
});

app.listen(3000);
