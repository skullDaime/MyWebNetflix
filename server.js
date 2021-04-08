const express = require('express');
var router = express.Router();
const path = require('path');
const { renderFile } = require('ejs');
const { Script } = require('vm');
const { homedir } = require('os');

const app = express();
const server = require('http').createServer(app);

const port = 3000;
const hostname = '127.0.0.1'; 

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', router);

router.get('/', (req, res) =>{
    res.render('profile.html');
});

router.get('/home', (req, res) => {
    res.render('home.html');
});


server.listen(3000);