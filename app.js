var express = require('express');

var app = express();
app.set('view engine', 'ejs'); //Gaat automatisch bij conventie in de views folder kijken

app.get('/', (req, res) => {
    res.send(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.send(__dirname, '/contact.html');
});

app.get('/profile/:name', (req, res) => {
    var data = {
        age: 22,
        job: 'IT Consultant'
    };
    res.render('profile', 
    {
        person: req.params.name,
        data: data
    });
});

app.listen(3000);
console.log('Express server listening...');