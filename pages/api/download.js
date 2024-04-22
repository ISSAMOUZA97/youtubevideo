import ytdl from 'ytdl-core';
import express from 'express';

const app = express();

app.use('/api/download', async (req, res) => {
  const videoURL = req.query.url;
  if (!ytdl.validateURL(videoURL)) {
    return res.status(400).send('Invalid URL');
  }

  res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
  
  try {
    const videoInfo = await ytdl.getInfo(videoURL);
    const format = ytdl.chooseFormat(videoInfo.formats, { quality: 'highestvideo' });

    res.setHeader('Content-Length', format.contentLength);
    ytdl(videoURL, { format: format })
      .on('error', (err) => {
        console.error(err);
        res.status(500).send('Failed to download video');
      })
      .pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to get video info');
  }
});

export default app;
