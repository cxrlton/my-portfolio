import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1c1c1a',
      }}
    >
      <span style={{ color: '#a3a380', fontSize: 13, fontWeight: 400, letterSpacing: -0.5 }}>
        PM
      </span>
    </div>,
    { ...size }
  );
}
