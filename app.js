
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var fs = require('fs');
var mime = require('mime');
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
app.get('/convertbcoff', routes.convertbcoff);
app.get('/convertbcon', routes.convertbcon);




app.get('/convert.wml', function(req, res) {
  thePath = 'static/convert.wml'
  fs.readFile(thePath, function read(err, data) {
      if (err) {
          throw err;
      }
      body = data;
      mimeType = mime.lookup(thePath);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Length', body.length);
      res.end(body);
      console.log('response: ' + mimeType + '\n' + body  + '===========================\n');
    });
});

app.get('/convert.xhtml', function(req, res) {
  thePath = 'static/convert.xhtml'
  fs.readFile(thePath, function read(err, data) {
      if (err) {
          throw err;
      }
      body = data;
      mimeType = mime.lookup(thePath);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Length', body.length);
      res.end(body);
      console.log('response: ' + mimeType + '\n' + body  + '===========================\n');
    });
});

app.get('/convert.chtml', function(req, res) {
  thePath = 'static/convert.htm'
  fs.readFile(thePath, function read(err, data) {
      if (err) {
          throw err;
      }
      body = data;
      mimeType = mime.lookup(thePath);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Length', body.length);
      res.end(body);
      console.log('response: ' + mimeType + '\n' + body  + '===========================\n');
    });
});

app.get('/convert.html', function(req, res) {
  thePath = 'static/convert.html'
  fs.readFile(thePath, function read(err, data) {
      if (err) {
          throw err;
      }
      body = data;
      mimeType = mime.lookup(thePath);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Length', body.length);
      res.end(body);
      console.log('response: ' + mimeType + '\n' + body  + '===========================\n');
    });
});



app.get('/oldconvert.wml', function(req, res) {
  thePath = 'static/oldconvert.wml'
  fs.readFile(thePath, function read(err, data) {
      if (err) {
          throw err;
      }
      body = data;
      mimeType = mime.lookup(thePath);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Length', body.length);
      res.end(body);
      console.log('response: ' + mimeType + '\n' + body  + '===========================\n');
    });
});

app.get('/oldconvert.xhtml', function(req, res) {
  thePath = 'static/oldconvert.xhtml'
  fs.readFile(thePath, function read(err, data) {
      if (err) {
          throw err;
      }
      body = data;
      mimeType = mime.lookup(thePath);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Length', body.length);
      res.end(body);
      console.log('response: ' + mimeType + '\n' + body  + '===========================\n');
    });
});

app.get('/oldconvert.chtml', function(req, res) {
  thePath = 'static/oldconvert.htm'
  fs.readFile(thePath, function read(err, data) {
      if (err) {
          throw err;
      }
      body = data;
      mimeType = mime.lookup(thePath);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Length', body.length);
      res.end(body);
      console.log('response: ' + mimeType + '\n' + body  + '===========================\n');
    });
});






app.get('/submit', routes.submit);


app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
