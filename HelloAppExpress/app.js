/**
 * Created by hamzajridi on 21/04/16.
 */
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
/** if the views pages are not in a dir called "views"
 * you have to ste the path like this :
 * "app.set('views', __dirname + '/DirName')" */

/** when the app gets a request that points to
* the home page, the we'll execute a function that
* send as a response 'Hello Express'*/
//Adding routes
app.get('/', function(req, res){
    res.render('default', {
        title : 'Home',
        classname : 'home',
        users : ["hamza", "bilel", "yassin", "nihel"]
    });
});

app.get('/about', function(req, res){
    res.render('default', {
        title : 'About Us',
        classname : 'about'
    });
});



app.get('*', function(req, res){
    res.send('<h1>Bad Route!!!</h1> <h3>This page don\'t exist</h3>');
});

//set up the server
var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});