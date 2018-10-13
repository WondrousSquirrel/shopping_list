require('dotenv').config()

const express = require('express');
const items = require('./routes/api/items');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const db = require('./config/mongoUri').mongoURI;

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//  server static files
app.use(express.static('dist'));

// Use Routes
app.use('/api/items', items);
if(process.env.NODE_ENV === 'development') {
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on port ${port}`));