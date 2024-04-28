import React, { useState, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const HLSAnimePlayer = ({ animeId }) => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchAnimeHLS = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v3/anime/${animeId}/videos`);
        const data = await response.json();
        const videos = data.promo;
        const hlsVideo = videos.find(video => video.includes('.m3u8'));
        if (hlsVideo) {
          setVideoUrl(hlsVideo);
        }
      } catch (error) {
        console.error('Error fetching anime videos:', error);
      }
    };

    fetchAnimeHLS();

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [animeId]);

  useEffect(() => {
    if (videoUrl) {
      const player = videojs('anime-player', {
        autoplay: 'muted',
        controls: true,
        sources: [{
          src: videoUrl,
          type: 'application/x-mpegURL'
        }]
      });

      return () => {
        if (player) {
          player.dispose();
        }
      };
    }
  }, [videoUrl]);

  return (
    <div>
      <h1>Anime Player</h1>
      <div data-vjs-player>
        <video id="anime-player" className="video-js vjs-default-skin" />
      </div>
    </div>
  );
};

export default HLSAnimePlayer;
