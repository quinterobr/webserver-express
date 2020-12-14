const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();

app.use(express.static(__dirname + '/pubic'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));

app.listen(3000);