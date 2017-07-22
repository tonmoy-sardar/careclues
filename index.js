var express = require('express');
var winston = require('winston');
var fs = require('fs');


logger.info('log to file');


var app = express();

app.set('port', (process.env.PORT || 5000));



// views is directory for all template files
app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');


app.get('/*', function(req, res) {
   console.log('All');
    res
        .status(200)
        .set({ 'content-type': 'text/html; charset=utf-8' })
        .sendfile(__dirname + '/index.html');
});


app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});