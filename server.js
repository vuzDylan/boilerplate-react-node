'use strict';

var path = require('path');
var express = require('express');
var config = require('./gulp/config').default;

const app = express();

app.use('/', express.static(config.build.dir));

app.use('/*', function(req, res){
  res.sendFile(path.join(__dirname, (config.build.dir), 'index.html'))
});

module.exports =  app;
