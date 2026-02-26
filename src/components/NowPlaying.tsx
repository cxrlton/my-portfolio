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
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 group"
    >
      {track.albumArt && (
        <img src={track.albumArt} alt={track.title} className="w-8 h-8 rounded-sm opacity-90" />
      )}
      <div>
        <p className="text-xs font-light tracking-widest uppercase" style={{ color: '#a3a380' }}>Now Playing</p>
        <p className="text-neutral-400 text-xs font-light group-hover:text-neutral-300 transition-colors">
          {track.artist} — {track.title}
        </p>
      </div>
    </a>
  );
}
