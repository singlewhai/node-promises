var express     = require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var path        = require('path');
var morgan      = require('morgan');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server listening on " + host + ":" + port + " in " + app.settings.env + " mode")
});
