import { NextResponse } from 'next/server';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../../convex/_generated/api';

const TOKEN_URL       = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';
const convex          = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

async function getAccessToken() {
  const id     = process.env.SPOTIFY_CLIENT_ID!;
  const secret = process.env.SPOTIFY_CLIENT_SECRET!;

  // Prefer token stored in Convex, fall back to env var
  const storedToken = await convex.query(api.config.get, { key: 'spotify_refresh_token' });
  const refresh     = storedToken ?? process.env.SPOTIFY_REFRESH_TOKEN!;

  const res  = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString('base64')}`,
    },
    body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refresh }),
  });

  const data = await res.json();

  // If Spotify rotated the refresh token, save the new one to Convex
  if (data.refresh_token) {
    await convex.mutation(api.config.set, {
      key: 'spotify_refresh_token',
      value: data.refresh_token,
    });
  }

  return data.access_token as string;
}

export async function GET() {
  try {
    const token = await getAccessToken();

    const res = await fetch(NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 0 },
    });

    if (res.status === 204 || res.status >= 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await res.json();

    if (!song?.item) {
      return NextResponse.json({ isPlaying: false });
    }

    return NextResponse.json({
      isPlaying: song.is_playing,
      title:     song.item.name,
      artist:    song.item.artists.map((a: { name: string }) => a.name).join(', '),
      albumArt:  song.item.album.images[2]?.url ?? song.item.album.images[0]?.url,
      songUrl:   song.item.external_urls.spotify,
    });
  } catch {
    return NextResponse.json({ isPlaying: false });
  }
}
