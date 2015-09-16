var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//passport and mongoose modules that are being used for login and registering
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local');
var flash = require('connect-flash');
var Users = require('./models/user');
var mongoose = require('mongoose');
//var users = require('./routes/users');
var comments = require('./routes/comments');

//routes for login and registering
var routes = require('./routes/index');
var register = require('./routes/register');
var login = require('./routes/login');
var privateviews = require('./routes/privateviews');

//connect to mongo/account_info
var mongoURI = 'mongodb://localhost:27017/account_info';
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function (err) {
   console.log('mongodb connection error', err);
});
MongoDB.once('open', function () {
 console.log('mongodb connection open');
});


var app = express();

//passport session set up, init, and flash for login
app.use(session({
  secret: 'SoSupersecret',
  key: 'user',
  resave: true,
  saveUninitialized: false,
  cookie: {maxage: 60000, secure: false}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//local strategy for passport
passport.use('local', new localStrategy({
       passReqToCallback : true,
       usernameField: 'username'
   },
function(req, username, password, done){
   Users.findOne({ username: username }, function(err, user) {
       if (err) throw err;
       if (!user)
           return done(null, false, {message: 'Incorrect username and password.'});

       user.comparePassword(password, function(err, isMatch) {
           if (err) throw err;
           if(isMatch)
               return done(null, user);
           else
               return done(null, false, { message: 'Incorrect username and password.'});
       });
   });
}));
//serializeUser and deserializeUser for login stuff
passport.serializeUser(function(user, done){
  done(null, user.id);
});
passport.deserializeUser(function(id, done){
  Users.findById(id, function(err, user){
    if (err) done(err);
    done(null, user);
  })
});

// view engine setup
app.set('partials', path.join(__dirname, 'partials'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/register', register);
app.use('/partials', privateviews);
app.use('/login', login);
//app.use('/users', users);
app.use('/comments', comments);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
