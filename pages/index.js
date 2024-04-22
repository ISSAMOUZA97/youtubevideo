import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head'; // Import Head for SEO
import styles from './Home.module.css'; // Make sure to adjust your CSS accordingly

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
        <title>SSYouTube - Download Videos Effortlessly</title>
        <meta name="description" content="Effortlessly download any YouTube video with SSYouTube. Free, fast, and without ads." />
        <meta property="og:title" content="SSYouTube - Your Ultimate YouTube Video Downloader" />
        <meta property="og:description" content="Discover how SSYouTube allows you to download any YouTube video directly to your device. A tool designed for convenience and efficiency." />
        <meta property="og:type" content="website" />
        {/* Ensure you have an actual image for og:image */}
        <meta property="og:image" content="/path/to/image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
      {/* HIDE HEADER
        <header className={styles.header}>
          YouTube Video Downloader
        </header>
        */}
        <br></br>
        <main className={styles.mainContent}>
          <div className={styles.formContainer}>
            <h1>Youtube Video Downloader</h1>
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
          {/* Here you can include the detailed description as provided, ensuring it's properly formatted and structured */}
           {/* Added paragraphs below */}
          
        <div className={styles.bannerImage}>
          <Image
            src="/images/youtube-downloader-banner1.PNG"
            alt="YouTube Video Downloader Banner"
            width={800}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="mt-8" style={{ width: "100%" }}>
          <h2 className="text-xl font-semibold mb-2">
            How to Use Our YouTube Thumbnail Downloader:
          </h2>
          <p>
          Download YouTube videos effortlessly with our free online tool. Simply paste the video URL and get your download link instantly. No registration or software needed. Try it now!          </p>
          <ol className="list-decimal ml-4">
            <li><strong>Copy the YouTube Video URL:</strong> Go to the YouTube video you want to download, copy the URL from the address bar.</li>
            <li><strong>Paste the URL:</strong> Visit our website and paste the copied YouTube video URL into the designated box.</li>
            <li><strong>Click 'Download':</strong> Click on the 'Download' button next to the URL box.</li>
            <li><strong>Choose Format and Quality:</strong> Select the desired video format and quality from the options provided.</li>
            <li><strong>Download the Video:</strong> Click on the 'Download' button next to the format and quality you chose. The video will start downloading to your device.</li>
          </ol>
          <h2 className="text-xl font-semibold mb-2">Effortlessly Download Any Video from YouTube:</h2>
          <p>
          Our website offers a simple and convenient way to download videos from YouTube using just the video URL. Whether you need to save a tutorial, music video, or documentary, our tool makes it easy. Simply paste the YouTube video URL into the provided box, select your preferred format and quality, and download the video with a click. No software installation or registration required. Start downloading your favorite videos now!"         </p>
          {/* Added SEO description */}
          <h2 className="text-xl font-semibold mb-2, text-align: center;">Discover the Simplest Way to Download YouTube Videos:</h2>
          <p>
          <div className={styles.bannerImage}>
          <Image
            src="/images/download.gif"
            alt="YouTube Video Downloader Banner"
            width={600}
            height={400}
            objectFit="cover"
          />
        </div>
        With our platform, downloading YouTube videos is a breeze. Just visit our website and find the URL input field at the top of the page. Copy the YouTube video's URL and paste it into the field. Next, click the 'Download' button to see a list of available download links. Choose your desired video format and start the download. For Android users, we offer a dedicated YouTube video downloader app for added convenience. Start downloading your favorite videos today!"
          </p>
          <h2 className="text-xl font-semibold mb-2">Fast and Free YouTube Video Downloader Online:</h2>
          <p>
           <li><strong>Effortlessly Download YouTube Videos with Ease:</strong> Looking to download YouTube videos hassle-free? Our platform offers a simple solution. Just paste the video URL, select your preferred format, and download with a click. No complex steps or software needed.</li>
           <li><strong>Download YouTube Videos Quickly and Easily:</strong> With our user-friendly website, downloading YouTube videos is quick and easy. Simply copy the video URL, paste it into our tool, choose your desired format, and start the download. It's that simple!</li>
           <li><strong>Get Access to High-Quality YouTube Video Downloads:</strong> Want to download YouTube videos in high quality? Our platform provides access to high-definition and 4K video downloads. Just paste the video URL, select your desired quality, and download with ease. Start downloading your favorite videos today! </li>         </p>
          <h2 className="text-xl font-semibold mb-2">Exciting News: Our Website is Developing a YouTube Video Downloader App!</h2>
          <p>
          We're thrilled to announce that we're working on an app that will allow you to download any YouTube video directly to your mobile device. Soon, you'll have the convenience of saving your favorite videos for offline viewing. Stay tuned to our website for updates and the official launch of our YouTube video downloader app!          </p>
          <h2 className="text-xl font-semibold mb-2">Download Thumbnails of Public Videos:</h2>
          <p>
            Please note that our tool primarily supports public YouTube videos. You can easily download the thumbnails of any public YouTube video with just a single click. Unlock the potential of your video content with compelling thumbnails!
          </p>
          <h2 className="text-xl font-semibold mb-2">Download Video Thumbnails from Multiple Video Sharing Platforms:</h2>
          <p>
            Thumbnail Downloader makes it super easy to download thumbnail images of your favorite videos from your favorite video sharing platforms. High-quality thumbnail downloads are available across all platforms, including Full HD, HD, SD, and smaller sizes. Thumbnail download service is totally free, and you can easily download thumbnail images to your mobile, PC, or Mac.
          </p>
          <p>
            <h2 className="text-xl font-semibold mb-2" >Why Do We Need a Thumbnail?</h2>
            <p>
              For application developers and webmasters, the greatest advantageous part of a thumbnail image is their reduced file size set alongside the original image. A website or an application could have significantly faster loading times if its array of image and video content is initially displayed in the shape of thumbnails. Also, anyone may need to download and use thumbnails in certain assignments like students who are working on a school project or IT developers looking to enhance their user interface, etc. It doesn't matter why we need thumbnails, what really matters is you can download video thumbnails with the help of our online tool when you need them.
            </p>
          </p>
        </div>
        <div className={styles.bannerImage}>
          <Image
            src="/images/youtube-downloader-banner.PNG"
            alt="YouTube Video Downloader Banner"
            width={700}
            height={200}
            objectFit="cover"
          />
        </div>
        <div className={styles.bannerImage}>
          <Image
            src="/images/youtube-downloader-banner1.PNG"
            alt="YouTube Video Downloader Banner"
            width={700}
            height={200}
            objectFit="cover"
          />
        </div>
        </main>
{/* HIDE FOOTER 
        <footer className={styles.footer}>
          Powered by ISSAM OUZANOU
        </footer>
      */}
      </div>
    </>
  );
}
