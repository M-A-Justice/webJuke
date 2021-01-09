require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const { PORT, YOUTUBE } = process.env;

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());

// get routes go here

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
