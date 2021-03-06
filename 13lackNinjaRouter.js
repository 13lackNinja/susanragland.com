// Modules

const express = require('express');
const router = express.Router();


// Middlewear

router.use(express.static('public'));


// Sendfile options

const options = {
  root: './public/markup',
}


// Routes

router.get('/', (req, res) => {
  res.sendFile('index.html', options);
});

router.get('/gallery', (req, res) => {
  res.sendFile('gallery.html', options);
});

router.get('/about', (req, res) => {
  res.sendFile('about.html', options);
});


// Exports

module.exports = router;
