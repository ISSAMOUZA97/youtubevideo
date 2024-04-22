// pages/api/download.js
import ytdl from 'ytdl-core';
import express from 'express';

const app = express();

app.use('/api/download', (req, res) => {
  const videoURL = req.query.url;
  if (!ytdl.validateURL(videoURL)) {
    return res.status(400).send('Invalid URL');
  }

  res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(videoURL, {
    format: 'mp4'
  }).pipe(res);
});

export default app;
