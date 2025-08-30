import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Afrainity Technologies - AI Solutions for Africa'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ffffff 0%, #06b6d4 50%, #3b82f6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '0 0 20px 0',
              lineHeight: '1.1',
            }}
          >
            Afrainity Technologies
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#94a3b8',
              margin: '0 0 30px 0',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            Transforming Africa Through AI
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#64748b',
              margin: '0',
              maxWidth: '600px',
              lineHeight: '1.5',
            }}
          >
            Accessible AI solutions for productivity and seamless growth across the continent
          </p>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '50px',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            borderRadius: '50%',
            opacity: '0.3',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50px',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            borderRadius: '50%',
            opacity: '0.2',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
