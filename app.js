
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//var add = require('./routes/add'); 
var index = require('./routes/index');
var questions = require('./routes/questions');
var slider = require('./routes/slider');
var profile = require('./routes/profile');
var history = require('./routes/history');
var settings = require('./routes/settings');
var suggestions = require('./routes/suggestions');
var rating = require('./routes/rating');
var logout = require('./routes/logout');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/questions', questions.view);
app.get('/slider', slider.view);
app.get('/profile', profile.view);
app.get('/history', history.view);
app.get('/settings', settings.view);
app.get('/suggestions', suggestions.view);
app.get('/logout', logout.view);
app.get('/rating', rating.addRating);

//app.get('/rating/:')

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
