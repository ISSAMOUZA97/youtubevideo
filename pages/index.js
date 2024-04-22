import { useState } from 'react';
import Head from 'next/head'; // Import Head for SEO
import styles from './Home.module.css';

export default function Home() {
  const [videoURL, setVideoURL] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleDownload = async () => {
    if (!videoURL) {
      setIsValid(false);
      return;
    }

    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    if (!youtubeRegex.test(videoURL)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    window.open(`/api/download?url=${encodeURIComponent(videoURL)}`);
  };

  return (
    <>
      <Head>
        <title>SSYouTube - YouTube Video Downloader</title>
        <meta name="description" content="Download any YouTube video directly to your device with SSYouTube, a YouTube video downloader tool. It's fast, free, and without any ads." />
        <meta property="og:title" content="SSYouTube - YouTube Video Downloader" />
        <meta property="og:description" content="Easily download YouTube videos or convert them to MP3 with SSYouTube. No ads, no download limits, and support for all devices." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path/to/image.jpg" /> {/* Add the path to an image if available */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          YouTube Video Downloader
        </header>
        <main className={styles.mainContent}>
          <div className={styles.formContainer}>
            <h1>Téléchargeur de vidéos Youtube</h1>
            <input
              type="text"
              placeholder="Enter YouTube Video URL"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              className={`${styles.formInput} ${!isValid ? styles.invalid : ''}`}
            />
            {!isValid && <p className={styles.errorMessage}>Please enter a valid YouTube video URL.</p>}
            <button onClick={handleDownload} className={styles.formButton}>Download Video</button>
           
          </div>
           
        </main>
        {/* Detailed Description Here */}
        <div className={styles.description}>
              <p>YouTube is the most used website in the world with the best user experience. However, it lacks the functionality of downloading videos directly into the user's device. So, SSYouTube comes into use with its unique tool through which you can download any YouTube video directly to your device with just a few simple clicks. Basically, SSYouTube is a YouTube video downloader that will help users save time.</p>
              <p>SSYouTube is a tool for youtube downloader as well as it provides facilities to download youtube short films and users can download any video for free without any ads and without any download limits.</p>
              {/* Steps and additional details omitted for brevity */}
            </div>
        <footer className={styles.footer}>
          Powered by BKHIKHICH
        </footer>
      </div>
    </>
  );
}
