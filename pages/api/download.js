import ytdl from 'ytdl-core';
import express from 'express';

const app = express();

app.use('/api/download', (req, res) => {
  const videoURL = req.query.url;
  if (!ytdl.validateURL(videoURL)) {
    return res.status(400).send('Invalid URL');
  }

  // Limit the number of items returned
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;

  res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(videoURL, {
    format: 'mp4',
    range: { start: 0, end: limit * 1000000 } // Limit to 10MB
  }).pipe(res);
});

export default app;
