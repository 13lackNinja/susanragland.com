// Modules

const express = require('express');
const app = express();


// Middlewear

app.use(express.static('public'));


// Sendfile options

const options = {
  root: './public/markup',
}


// Routes

app.get('/', (req, res) => {
  res.sendFile('index.html', options);
});

app.get('/gallery', (req, res) => {
  res.sendFile('gallery.html', options);
});

app.get('/about', (req, res) => {
  res.sendFile('about.html', options);
});

app.listen(9010);
