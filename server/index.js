/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const path = require('path');
// const axios = require('axios');

const app = express();
const { PORT } = process.env;

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/search', (req, res) => {
  const { data } = req.body;
  console.log(data);
  // axios.get()
  res.status(200).send(data);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
