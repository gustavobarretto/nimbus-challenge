const express = require('express');
require('express-async-errors');

const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 5000);
