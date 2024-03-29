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
  const searchRes = {};
  const videos = [];
  axios({
    method: 'get',
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      key: YOUTUBE_API,
      type: 'video',
      part: 'snippet',
      maxResults: 10,
      videoEmbeddable: true,
      q: data,
    },
  })
    .then((response) => {
      const { items, nextPageToken } = response.data;
      searchRes.nextPageToken = nextPageToken;
      searchRes.prevPageToken = response.data.prevPageToken !== undefined ? response.data.prevPageToken : '';

      items.forEach((item) => {
        const { videoId } = item.id;
        const {
          channelId,
          title,
          description,
          channelTitle,
        } = item.snippet;

        const video = {
          videoId,
          channelId,
          title,
          description,
          channelTitle,
        };
        videos.push(video);
        searchRes.items = items;
      });
      res.status(200).send(searchRes);
    })
    // .then(() => {
    //   axios({
    //     method: 'get',
    //     baseURL: 'https://www.googleapis.com/youtube/v3/videos',
    //     params: {
    //       key: YOUTUBE_API,
    //       part: [
    //         'snippet',
    //         'contentDetails',
    //         'player',
    //       ],
    //       id: videoIds,
    //       maxResults: 10,
    //     },
    //   })
    //     .then((videoData) => {
    //       console.log(videoData.data);
    //       // res.status(200).send(response.data);
    //     })
    //     .catch((error) => {
    //       res.status(500).send(error);
    //     });
    // })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
