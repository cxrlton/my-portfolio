'use client';

import { useState, useEffect } from 'react';

interface Track {
  isPlaying: boolean;
  title?:    string;
  artist?:   string;
  albumArt?: string;
  songUrl?:  string;
}

export function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    async function fetch_() {
      try {
        const res  = await fetch('/api/spotify');
        const data = await res.json();
        setTrack(data);
      } catch {
        setTrack(null);
      }
    }

    fetch_();
    const id = setInterval(fetch_, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!track?.isPlaying) return null;

  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 mt-4 group"
    >
      {track.albumArt && (
        <img src={track.albumArt} alt={track.title} className="w-4 h-4 rounded-sm opacity-80" />
      )}
      <p className="text-neutral-500 text-sm font-light">
        <span style={{ color: '#a3a380' }}>♫</span>{' '}
        <span className="group-hover:text-neutral-400 transition-colors">
          {track.artist} — {track.title}
        </span>
      </p>
    </a>
  );
}
