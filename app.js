// require dependencies
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var ejs            = require('ejs');
var app            = express();
// requires handlers
var container      = require('./backend/web-content/container/app');

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);
// app config
app.use(express.static(__dirname + '/static'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// app-middleware
app.use(function(req,res,next){
    next();
})
// routes
app.use('/',container);

// endpoint
app.use(function(req,res,next){
    res.status(404).render('not-found');
});


module.exports = app;