var express     = require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var path        = require('path');
var morgan      = require('morgan');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/getAll', function(req, res){
    var delay = req.query.delay || 10,
        data = req.query.data || 'data';
    console.log('Call from client', delay, data);
    res.send('Admin Homepage');
});

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server listening on " + host + ":" + port + " in " + app.settings.env + " mode")
});
