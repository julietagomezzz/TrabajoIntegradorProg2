var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products'); // agrego esto 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'nuestro mensaje secreto',
  resave: false,
  saveUninitialized: true
}))


app.use(function(req,res,next){
  if (req.session.usuario != undefined) {
    res.locals.usuario = req.session.usuario;
    return next()
  }
  return next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); // agrego esto

/*app.use(function(req, res, next) {
  if (req.cookies.usuario != undefined && req.session.Usuario == undefined) {
    let idUsuarioEnCookie = req.cookies.usuario;
    Usuario.findByPk(idUsuarioEnCookie)
      .then((user) => {

        req.session.Usuario = user.dataValues;
        res.locals.username  = user.dataValues;

        return next();
        
      }).catch((err) => {
        console.log(err);
        return next();
      });
  } else {
    return next();
  }

  }
);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;