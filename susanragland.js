// Modules

const express = require('express');
const app = express();
const router = require('./13lackNinjaRouter');


// Middlewear

app.use('/susanragland', router);
app.use(express.static('public'));


app.listen(9010);
