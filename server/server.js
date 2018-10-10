require('dotenv').config()

const express = require('express');
const router = require('./routes/main');

const app = express();

//  server static files
app.use(express.static('dist'));

// app.get('/', (request, response) => response.send('Hello World'));
app.use(router);

const port = process.env.PORT || 5000
app.listen(port, () => console.log('server started'));