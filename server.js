const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

// View Engine
app.set('view engine', 'ejs');

// Database
const db = require('./models');

// ---------------------------------------- MIDDLEWARE ---------------------------------------- //

// Parse URL Encoded Form Data
app.use(bodyParser.urlencoded({extended: true}));
// Parse JSON Data
app.use(bodyParser.json());

// Serve Public Directory
app.use(express.static(__dirname + '/public'));

// ------------------------------------------ ROUTES ------------------------------------------ //

// GET Root Route
app.get('/', (req, res) => {
  res.send('<h1>Auth App</h1>');
});

// GET New User Route
app.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// --------------------------------------- START SERVER --------------------------------------- //

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
