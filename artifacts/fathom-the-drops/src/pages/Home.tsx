import { useGame } from '../contexts/GameContext';

const BASE = import.meta.env.BASE_URL;

export function Home() {
  const { goToLevelMap } = useGame();

  return (
    <div
      className="home-screen"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a2a5a 0%, #1a5a9a 40%, #2a8aca 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
            className="bg-drop-anim"
          >
            <DropletSVG color={i % 4 === 0 ? '#aaa' : '#4ab8f0'} size={18 + Math.random() * 16} />
          </div>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: 520 }}>
        <img
          src={`${BASE}charity_water_logo.png`}
          alt="charity: water"
          style={{
            height: 72,
            objectFit: 'contain',
            filter: 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
          }}
        />

        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 900,
            color: '#fff',
            textAlign: 'center',
            lineHeight: 1.15,
            textShadow: '0 2px 16px rgba(0,0,0,0.5)',
            margin: 0,
            letterSpacing: -1,
          }}
        >
          Fathom the Drops
        </h1>

        <button
          onClick={goToLevelMap}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: 'linear-gradient(135deg, #ffd700, #ffb300)',
            color: '#1a2a1a',
            border: 'none',
            borderRadius: 50,
            padding: '16px 36px',
            fontSize: 20,
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255,180,0,0.5)',
            transition: 'transform 0.15s, box-shadow 0.15s',
            letterSpacing: 0.5,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,180,0,0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,180,0,0.5)';
          }}
        >
          <DropletSVG color="#1a6aaa" size={24} />
          Start the game
        </button>

        <div
          style={{
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(8px)',
            borderRadius: 16,
            padding: '20px 28px',
            color: '#e0f0ff',
            fontSize: 15,
            lineHeight: 1.7,
            textAlign: 'left',
            border: '1px solid rgba(255,255,255,0.15)',
            width: '100%',
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: '#fff' }}>How to play?</div>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Use the <strong>left</strong> and <strong>right arrow keys</strong> to move the jerry can — or <strong>drag your finger</strong> on mobile</li>
            <li>Avoid the <span style={{ color: '#ccc', fontWeight: 700 }}>bad droplets</span> or else you'll have to start over</li>
            <li>Fill up the jerry can with <span style={{ color: '#4ab8f0', fontWeight: 700 }}>clean water</span> to complete each level</li>
          </ul>
        </div>
      </div>

      <button
        style={{
          position: 'absolute',
          bottom: 24,
          left: 24,
          background: 'rgba(255,255,255,0.15)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 8,
          padding: '8px 18px',
          fontSize: 14,
          cursor: 'pointer',
          fontWeight: 600,
          backdropFilter: 'blur(4px)',
          zIndex: 20,
        }}
        onClick={() => window.close()}
      >
        Exit
      </button>

      <style>{`
        @keyframes drop-fall {
          0% { top: -40px; opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { top: 110%; opacity: 0; }
        }
        .bg-drop-anim {
          position: absolute;
          top: -40px;
          animation: drop-fall linear infinite;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}

function DropletSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 30 40" fill="none">
      <path
        d="M15 3 C15 3 3 18 3 26 A12 12 0 0 0 27 26 C27 18 15 3 15 3Z"
        fill={color}
      />
      <ellipse cx="10" cy="22" rx="3" ry="5" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}
