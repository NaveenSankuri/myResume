const express = require('express');
const app = express();
const fs = require('fs');
const mustacheExpressn = require('mustache-express');
const path = require('path');
const VIEWS_PATH = path.join(__dirname, '/views');
const port = 3000;

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.engine('mustache', mustacheExpressn(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');


app.get('', (req, res) => {
    res.render('home');
})


app.listen(port, () => {
    console.log("server running...");
});