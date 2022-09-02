const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config({ path: `${__dirname}/config.env`})

const app = require('./app');

const db_uri = process.env.DB.replace('PASSWORD', process.env.DB_PASSWORD);
const port = process.env.PORT || 8000;

mongoose.connect(db_uri, {
  useNewUrlParser: true
}).then(() => console.log('Connected to database'));

app.listen(port, () => console.log(`Server running on port ${port}`));