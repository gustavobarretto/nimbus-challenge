const express = require('express');
require('express-async-errors');

const app = express();
const cors = require('cors');
const routes = require('./routes');
const { response } = require('express');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);
app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080, (err) => {
  console.log('Starting server http://localhost:8080...');
  if (err) {
    console.error(err);
  }
});
