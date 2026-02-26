import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pradham Mummaleti',
    short_name: 'PM',
    description: 'Associate Data Scientist | ML & NLP Researcher',
    start_url: '/',
    display: 'standalone',
    background_color: '#1c1c1a',
    theme_color: '#1c1c1a',
    orientation: 'portrait',
    icons: [
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
