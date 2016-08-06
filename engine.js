var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.set('views', './');

app.get('/engine', function(req, res, next){
    res.render('default.hbs', {date: new Date()});
});
app.listen(3001);