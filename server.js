var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function(req, res, next){
    console.log('Jestem posrednikeim przy Store');
    next();
});

app.get('/', function(req, res){
    res.render('login');
});

app.get('/index', function(req, res){
    res.render('index');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

