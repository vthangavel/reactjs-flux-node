var express = require('express');
var expressServer  = express();
var port = 3000;
require('node-jsx').install({extension: '.js'});

var React = require('react');
var AppComponent = React.createFactory(require('./js/components/ShoppingCart.react.js'));

expressServer.use('/static', express.static('static'));

expressServer.set('view engine', 'ejs');

expressServer.get('/', function(req, res, next){
    var component = AppComponent();
    var html = React.renderToString(component);
    res.render('index.ejs', {reactOutput: html});
});

expressServer.listen(port, function(){
    console.log('Server running in port 3000');
});
