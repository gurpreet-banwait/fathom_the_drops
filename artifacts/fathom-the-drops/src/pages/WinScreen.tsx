import { useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { playWinSound } from '../lib/sounds';

const BASE = import.meta.env.BASE_URL;

export function WinScreen() {
  const { goToLevelMap } = useGame();

  useEffect(() => {
    playWinSound();
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a2a5a 0%, #0a5a9a 50%, #1a8aca 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${(i * 5.2) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
            className="win-drop"
          >
            💧
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          maxWidth: 560,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 72 }}>🎉</div>

        <h1
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 900,
            color: '#ffd700',
            textShadow: '0 2px 16px rgba(255,215,0,0.5)',
            margin: 0,
          }}
        >
          You did it!
        </h1>

        <div
          style={{
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: 20,
            padding: '28px 32px',
            color: '#e0f0ff',
            fontSize: 16,
            lineHeight: 1.75,
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <p style={{ margin: 0 }}>
            Thank you for playing this game. You are awesome! Learn how{' '}
            <strong style={{ color: '#ffd700' }}>charity: water</strong> is making a difference to millions of
            lives impacted by the global water crisis and see how <strong>YOU</strong> can help make an impact
            with us at{' '}
            <a
              href="https://www.charitywater.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4ab8f0', fontWeight: 700 }}
            >
              charitywater.org
            </a>{' '}
            because <strong>100% of public donations go directly to water projects!</strong> Don't forget to
            stay hydrated!
          </p>
        </div>

        <img
          src={`${BASE}charity_water_logo.png`}
          alt="charity: water"
          style={{ height: 60, objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />

        <button
          onClick={goToLevelMap}
          style={{
            background: 'linear-gradient(135deg, #ffd700, #ffb300)',
            color: '#1a2a1a',
            border: 'none',
            borderRadius: 50,
            padding: '14px 36px',
            fontSize: 18,
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255,180,0,0.5)',
          }}
        >
          🗺️ Replay a Level
        </button>
      </div>

      <style>{`
        @keyframes win-drop-fall {
          0% { top: -40px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .win-drop {
          position: absolute;
          top: -40px;
          font-size: 28px;
          animation: win-drop-fall linear infinite;
        }
      `}</style>
    </div>
  );
}
