/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const { PORT, YOUTUBE_API } = process.env;

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/search', (req, res) => {
  const { data } = req.body;
  axios({
    method: 'get',
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      key: YOUTUBE_API,
      type: 'video',
      part: 'snippet',
      maxResults: 5,
      videoEmbeddable: true,
      q: data.userInput,
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
