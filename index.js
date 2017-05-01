var express = require('express');
var app = express();
var fs = require('fs');

var server = app.listen(7000, function() {
  console.log('Express server has started on port 7000');
});
var router = require('./router/main')(app, fs);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/styles', express.static(__dirname + '/styles'));