/**
 * Created by hamzajridi on 21/04/16.
 */
var express = require('express');
var app = express();
/* when the app gets a request that points to
* the home page, the we'll execute a function that
* send as a response 'Hello Express'*/
app.get('/', function(req, res){
    res.send('<h1>Hello</h1> Express');
});
//set up the server
var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});