import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
      <span style={{ color: '#a3a380', fontSize: 70, fontWeight: 300, letterSpacing: -3 }}>
        PM
      </span>
    </div>,
    { ...size }
  );
}
