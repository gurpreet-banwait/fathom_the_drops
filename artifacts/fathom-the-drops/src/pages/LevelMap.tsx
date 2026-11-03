import { useGame } from '../contexts/GameContext';

const LEVEL_CONFIGS = [
  { name: 'Mountains', icon: '⛰️', color: '#5a8acc' },
  { name: 'Forest', icon: '🌲', color: '#4a9a4a' },
  { name: 'Desert', icon: '🌵', color: '#e09040' },
  { name: 'Beach', icon: '🌊', color: '#2a9adc' },
  { name: 'Savanna', icon: '🌅', color: '#e07820' },
  { name: 'Arctic', icon: '❄️', color: '#8acce8' },
  { name: 'City', icon: '🌃', color: '#4a5a8a' },
];

export function LevelMap() {
  const { currentLevel, highestUnlocked, startGame, goHome } = useGame();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a2a5a 0%, #1a5a9a 50%, #0a3a6a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${(i * 8.5) % 100}%`,
              top: `${(i * 13) % 100}%`,
              opacity: 0.08,
              fontSize: 40,
            }}
          >
            💧
          </div>
        ))}
      </div>

      <button
        onClick={goHome}
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          background: 'rgba(255,255,255,0.15)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 8,
          padding: '8px 16px',
          fontSize: 14,
          cursor: 'pointer',
          fontWeight: 600,
          zIndex: 10,
        }}
      >
        ← Home
      </button>

      <h2
        style={{
          color: '#fff',
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
          fontWeight: 900,
          marginBottom: 8,
          textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          zIndex: 10,
          position: 'relative',
        }}
      >
        Level Map
      </h2>
      <p style={{ color: 'rgba(200,230,255,0.8)', marginBottom: 32, fontSize: 15, zIndex: 10, position: 'relative' }}>
        Choose a level to play
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: 16,
          maxWidth: 600,
          width: '100%',
          zIndex: 10,
          position: 'relative',
        }}
      >
        {LEVEL_CONFIGS.map((lvl, i) => {
          const levelNum = i + 1;
          const isUnlocked = levelNum <= highestUnlocked;
          const isCurrent = levelNum === currentLevel;
          const isCompleted = levelNum < currentLevel;

          return (
            <button
              key={levelNum}
              onClick={() => isUnlocked && startGame(levelNum)}
              disabled={!isUnlocked}
              style={{
                background: isUnlocked
                  ? `linear-gradient(135deg, ${lvl.color}dd, ${lvl.color}88)`
                  : 'rgba(255,255,255,0.07)',
                border: isCurrent
                  ? '3px solid #ffd700'
                  : isCompleted
                  ? '2px solid rgba(255,255,255,0.4)'
                  : '2px solid rgba(255,255,255,0.15)',
                borderRadius: 16,
                padding: '20px 12px',
                cursor: isUnlocked ? 'pointer' : 'not-allowed',
                color: isUnlocked ? '#fff' : 'rgba(255,255,255,0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                transition: 'transform 0.15s, box-shadow 0.15s',
                boxShadow: isCurrent
                  ? '0 0 24px rgba(255,215,0,0.6), 0 4px 12px rgba(0,0,0,0.3)'
                  : isCompleted
                  ? '0 4px 12px rgba(0,0,0,0.2)'
                  : 'none',
                animation: isCurrent ? 'glow-pulse 1.5s ease-in-out infinite' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => isUnlocked && (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => isUnlocked && (e.currentTarget.style.transform = 'scale(1)')}
            >
              {isCompleted && (
                <div
                  style={{
                    position: 'absolute',
                    top: 6,
                    right: 8,
                    fontSize: 14,
                    color: '#4afa4a',
                    fontWeight: 700,
                  }}
                >
                  ✓
                </div>
              )}
              {!isUnlocked && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    color: 'rgba(255,255,255,0.2)',
                  }}
                >
                  🔒
                </div>
              )}
              <span style={{ fontSize: 32, filter: isUnlocked ? 'none' : 'grayscale(1) opacity(0.2)' }}>
                {lvl.icon}
              </span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>Level {levelNum}</span>
              <span style={{ fontSize: 12, opacity: 0.85 }}>{lvl.name}</span>
              {isCurrent && (
                <span
                  style={{
                    fontSize: 10,
                    background: '#ffd700',
                    color: '#1a1a1a',
                    borderRadius: 20,
                    padding: '2px 8px',
                    fontWeight: 700,
                  }}
                >
                  CURRENT
                </span>
              )}
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.5), 0 4px 12px rgba(0,0,0,0.3); }
          50% { box-shadow: 0 0 35px rgba(255,215,0,0.9), 0 4px 12px rgba(0,0,0,0.3); }
        }
      `}</style>
    </div>
  );
}
