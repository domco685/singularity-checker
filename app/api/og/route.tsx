import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const score = searchParams.get('score') || '0';
    const status = searchParams.get('status') || 'UNKNOWN';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            position: 'relative',
          }}
        >
          {/* Holographic gradient border */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, #00D9FF, #B026FF, #FF0844, #00D9FF)',
              padding: '8px',
              display: 'flex',
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: '#000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
              }}
            >
              {/* Title */}
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  background: 'linear-gradient(to right, #00D9FF, #B026FF)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '20px',
                  fontFamily: 'monospace',
                }}
              >
                SINGULARITY CHECKER
              </div>

              {/* Score */}
              <div
                style={{
                  fontSize: 120,
                  fontWeight: 700,
                  color: '#00D9FF',
                  marginBottom: '10px',
                  fontFamily: 'monospace',
                }}
              >
                {score}
                <span style={{ fontSize: 60, color: '#E0E0E0', opacity: 0.5 }}>/100</span>
              </div>

              {/* Status */}
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 700,
                  color: '#B026FF',
                  marginBottom: '40px',
                  fontFamily: 'monospace',
                }}
              >
                {status}
              </div>

              {/* Tagline */}
              <div
                style={{
                  fontSize: 24,
                  color: '#E0E0E0',
                  opacity: 0.7,
                  fontFamily: 'monospace',
                }}
              >
                Are you still human?
              </div>

              {/* URL */}
              <div
                style={{
                  fontSize: 20,
                  color: '#00D9FF',
                  marginTop: '20px',
                  fontFamily: 'monospace',
                }}
              >
                singularitychecker.com
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
