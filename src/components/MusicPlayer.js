// src/components/MusicPlayer.js
import React, { useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    { title: 'Fatboy Slim - Rockafeller Skank', src: 'https://www.youtube.com/embed/FMrIy9zm7QY?si=mQbls9P2hA3w33mp' },
    { title: 'Canción 2', src: 'https://www.youtube.com/embed/e74VMNgARvY' },
    { title: 'Canción 3', src: 'https://www.youtube.com/embed/lONZoqEQ5m0' },
  ];

  const handleTrackChange = (event) => {
    const selectedTrack = tracks[event.target.value];
    setCurrentTrack(selectedTrack.src);
    setIsPlaying(true);
  };

  const stopTrack = () => {
    setCurrentTrack(null);
    setIsPlaying(false);
  };

  return (
    <aside className="music-player">
      <h2>Reproductor de Música</h2>
      {currentTrack ? (
        <div>
          <iframe
            width="100%"
            height="200"
            src={`${currentTrack}?autoplay=${isPlaying ? 1 : 0}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Music Player"
          ></iframe>
          <button onClick={stopTrack}>Stop</button>
        </div>
      ) : (
        <p>Selecciona una canción para reproducir</p>
      )}
      <select onChange={handleTrackChange} defaultValue="">
        <option value="" disabled>Elige una canción</option>
        {tracks.map((track, index) => (
          <option key={index} value={index}>
            {track.title}
          </option>
        ))}
      </select>
    </aside>
  );
};

export default MusicPlayer;
