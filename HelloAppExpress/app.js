/**
 * Created by hamzajridi on 21/04/16.
 */
var express = require('express');
var app = express();
/** when the app gets a request that points to
* the home page, the we'll execute a function that
* send as a response 'Hello Express'*/
//Adding routes
app.get('/', function(req, res){
    res.send('<h1>Hello</h1> Express');
});

app.get('/me', function(req, res){
    res.send('@Hamza_1408');
});

app.get('/:name?', function(req, res){
    /** get  the passed name in the url, put it in the
     * req.params array then get it by req.params.name*/
    var name = req.params.name;
    res.send('@'+name);
});

app.get('/:name?/:title?', function(req, res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('<p>name: '+name +'<br>title : '+title +'</p>');
});

app.get('*', function(req, res){
    res.send('<h1>Bad Route!!!</h1> <h3>This page don\'t exist</h3>');
});

//set up the server
var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});