
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('thereisnosecret'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());

});
app.use(express.bodyParser());
app.get('/', routes.index);
app.get('/thankyou', routes.thankyou);
app.get('/convertboth', routes.convertboth);
app.get('/convert1', routes.convert1);
app.get('/convert2', routes.convert2);

app.get('/convertxhtml', routes.convertxhtml);
app.get('/convertchtml', routes.convertchtml);
app.get('/convertwml', routes.convertwml);







app.get('/submit', routes.submit);


app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
