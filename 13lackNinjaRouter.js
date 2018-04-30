// Modules

const express = require('express');
const router = express.Router();


// Middlewear

app.use(express.static('public'));


// Routes

// Sendfile options
const options = {
  root: './public/markup',
}

router.get('/', (req, res) => {
  res.sendFile('index.html', options);
});

router.get('/gallery', (req, res) => {
  res.sendFile('gallery.html', options);
});

router.get('/about', (req, res) => {
  res.sendFile('about.html', options);
});

module.exports = router;
