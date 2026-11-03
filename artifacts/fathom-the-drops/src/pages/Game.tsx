import { useRef, useEffect, useState, useCallback } from 'react';
import { useGame } from '../contexts/GameContext';
import { playCleanDropSound, playBadDropSound, playLevelCompleteSound } from '../lib/sounds';
import { drawBackground, type BackgroundType } from '../lib/backgrounds';

const DROPS_TO_WIN = 20;
const JERRY_CAN_WIDTH = 72;
const JERRY_CAN_HEIGHT = 90;
const JERRY_CAN_SPEED = 7;
const DROP_RADIUS = 14;
const DROP_SPAWN_INTERVAL_MS = 1100;
const BAD_DROP_CHANCE = 0.22;

const BASE = import.meta.env.BASE_URL;

const LEVEL_CONFIGS: { name: string; bg: BackgroundType; speedMult: number }[] = [
  { name: 'Mountains', bg: 'mountains', speedMult: 1.0 },
  { name: 'Forest', bg: 'forest', speedMult: 1.06 },
  { name: 'Desert', bg: 'desert', speedMult: 1.12 },
  { name: 'Beach', bg: 'beach', speedMult: 1.18 },
  { name: 'Savanna', bg: 'savanna', speedMult: 1.25 },
  { name: 'Arctic', bg: 'arctic', speedMult: 1.32 },
  { name: 'City', bg: 'city', speedMult: 1.4 },
];

interface Droplet {
  id: number;
  x: number;
  y: number;
  speed: number;
  isClean: boolean;
  wobble: number;
  wobbleSpeed: number;
}

export function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const jerryImgRef = useRef<HTMLImageElement | null>(null);

  const keysRef = useRef<Record<string, boolean>>({});
  const gameActiveRef = useRef(true);
  const frameRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const dropIdRef = useRef(0);
  const touchTargetXRef = useRef<number | null>(null);

  const canvasStateRef = useRef({
    jerryX: 0,
    droplets: [] as Droplet[],
    dropCount: 0,
    waveActive: false,
    waveX: 0,
    wavePhase: 0,
    complimentText: '',
    shakeFrames: 0,
    particles: [] as { x: number; y: number; vx: number; vy: number; life: number; color: string }[],
  });

  const [dropCount, setDropCount] = useState(0);
  const [waveVisible, setWaveVisible] = useState(false);
  const [waveText, setWaveText] = useState('');
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [contaminated, setContaminated] = useState(false);

  const { currentLevel, completeLevel, goToLevelMap } = useGame();
  const config = LEVEL_CONFIGS[Math.min(currentLevel - 1, 6)];

  const BASE_DROP_SPEED = 2.8 * config.speedMult;

  const COMPLIMENTS = [
    'Amazing work!',
    'You\'re a water hero!',
    'Incredible catch!',
    'Water warrior!',
    'Brilliant!',
    'Unstoppable!',
    'You\'re awesome!',
  ];

  useEffect(() => {
    const img = new Image();
    img.src = `${BASE}jerry_can.png`;
    img.onload = () => { jerryImgRef.current = img; };
    return () => { img.onload = null; };
  }, []);

  const spawnDrop = useCallback((canvasWidth: number) => {
    const isClean = Math.random() > BAD_DROP_CHANCE;
    canvasStateRef.current.droplets.push({
      id: dropIdRef.current++,
      x: DROP_RADIUS + Math.random() * (canvasWidth - DROP_RADIUS * 2),
      y: -DROP_RADIUS,
      speed: BASE_DROP_SPEED + Math.random() * 1.2,
      isClean,
      wobble: 0,
      wobbleSpeed: (Math.random() - 0.5) * 0.12,
    });
  }, [BASE_DROP_SPEED]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onKey = (e: KeyboardEvent, down: boolean) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        keysRef.current[e.key] = down;
        e.preventDefault();
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        touchTargetXRef.current = (touch.clientX - rect.left) * scaleX - JERRY_CAN_WIDTH / 2;
      }
    };
    const onTouchEnd = () => { touchTargetXRef.current = null; };

    window.addEventListener('keydown', (e) => onKey(e, true));
    window.addEventListener('keyup', (e) => onKey(e, false));
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchstart', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      if (canvasStateRef.current.jerryX === 0) {
        canvasStateRef.current.jerryX = canvas.width / 2 - JERRY_CAN_WIDTH / 2;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    gameActiveRef.current = true;
    canvasStateRef.current.jerryX = canvas.width / 2 - JERRY_CAN_WIDTH / 2;
    canvasStateRef.current.droplets = [];
    canvasStateRef.current.dropCount = 0;
    canvasStateRef.current.waveActive = false;
    canvasStateRef.current.shakeFrames = 0;
    canvasStateRef.current.particles = [];

    const ctx = canvas.getContext('2d')!;

    let completionHandled = false;

    function loop(timestamp: number) {
      if (!gameActiveRef.current) return;
      const state = canvasStateRef.current;
      const w = canvas!.width;
      const h = canvas!.height;

      if (!state.waveActive) {
        if (touchTargetXRef.current !== null) {
          const target = Math.max(0, Math.min(w - JERRY_CAN_WIDTH, touchTargetXRef.current));
          const diff = target - state.jerryX;
          state.jerryX += diff * 0.25;
        } else {
          if (keysRef.current['ArrowLeft']) {
            state.jerryX = Math.max(0, state.jerryX - JERRY_CAN_SPEED);
          }
          if (keysRef.current['ArrowRight']) {
            state.jerryX = Math.min(w - JERRY_CAN_WIDTH, state.jerryX + JERRY_CAN_SPEED);
          }
        }

        if (timestamp - lastSpawnRef.current > DROP_SPAWN_INTERVAL_MS) {
          spawnDrop(w);
          lastSpawnRef.current = timestamp;
        }

        const jerryTop = h - JERRY_CAN_HEIGHT - 10;
        const jerryRight = state.jerryX + JERRY_CAN_WIDTH;

        const survived: Droplet[] = [];
        let caught: { x: number; y: number; isClean: boolean } | null = null;

        for (const drop of state.droplets) {
          drop.wobble += drop.wobbleSpeed;
          drop.y += drop.speed;

          const cx = drop.x + Math.sin(drop.wobble * 3) * 2;
          const cy = drop.y;

          const hitX = cx >= state.jerryX + 8 && cx <= jerryRight - 8;
          const hitY = cy + DROP_RADIUS >= jerryTop + 10 && cy - DROP_RADIUS <= jerryTop + JERRY_CAN_HEIGHT * 0.4;

          if (hitX && hitY) {
            caught = { x: cx, y: cy, isClean: drop.isClean };
          } else if (drop.y < h + DROP_RADIUS * 2) {
            survived.push(drop);
          }
        }

        state.droplets = survived;

        if (caught) {
          if (caught.isClean) {
            state.dropCount++;
            setDropCount(state.dropCount);
            playCleanDropSound();
            for (let i = 0; i < 8; i++) {
              state.particles.push({
                x: caught.x, y: caught.y,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                life: 30, color: '#4ab8f0',
              });
            }
            if (state.dropCount >= DROPS_TO_WIN && !completionHandled) {
              completionHandled = true;
              state.waveActive = true;
              state.waveX = -w;
              state.complimentText = COMPLIMENTS[currentLevel - 1] || COMPLIMENTS[0];
              playLevelCompleteSound();
              setWaveVisible(true);
              setWaveText(state.complimentText);
            }
          } else {
            state.dropCount = 0;
            setDropCount(0);
            playBadDropSound();
            state.shakeFrames = 18;
            for (let i = 0; i < 10; i++) {
              state.particles.push({
                x: caught.x, y: caught.y,
                vx: (Math.random() - 0.5) * 6,
                vy: (Math.random() - 0.5) * 6,
                life: 25, color: '#cc4444',
              });
            }
            setContaminated(true);
            setTimeout(() => setContaminated(false), 1200);
          }
        }
      }

      ctx.save();
      if (canvasStateRef.current.shakeFrames > 0) {
        const shakeMag = Math.min(canvasStateRef.current.shakeFrames, 8);
        ctx.translate((Math.random() - 0.5) * shakeMag, (Math.random() - 0.5) * shakeMag);
        canvasStateRef.current.shakeFrames--;
      }

      drawBackground(ctx, config.bg, w, h);

      for (const drop of canvasStateRef.current.droplets) {
        const cx = drop.x + Math.sin(drop.wobble * 3) * 2;
        const cy = drop.y;
        ctx.save();
        ctx.translate(cx, cy);
        drawDroplet(ctx, drop.isClean, DROP_RADIUS);
        ctx.restore();
      }

      for (let i = canvasStateRef.current.particles.length - 1; i >= 0; i--) {
        const p = canvasStateRef.current.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.life--;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4 * (p.life / 30), 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor((p.life / 30) * 255).toString(16).padStart(2, '0');
        ctx.fill();
        if (p.life <= 0) canvasStateRef.current.particles.splice(i, 1);
      }

      const jerryImg = jerryImgRef.current;
      const jx = canvasStateRef.current.jerryX;
      const jy = h - JERRY_CAN_HEIGHT - 10;
      if (jerryImg) {
        ctx.drawImage(jerryImg, jx, jy, JERRY_CAN_WIDTH, JERRY_CAN_HEIGHT);
      } else {
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(jx, jy, JERRY_CAN_WIDTH, JERRY_CAN_HEIGHT);
        ctx.fillStyle = '#e0b000';
        ctx.fillRect(jx + 12, jy - 8, JERRY_CAN_WIDTH - 24, 10);
      }

      const fillRatio = canvasStateRef.current.dropCount / DROPS_TO_WIN;
      const fillHeight = JERRY_CAN_HEIGHT * 0.65 * fillRatio;
      if (fillRatio > 0) {
        ctx.fillStyle = 'rgba(74,184,240,0.55)';
        ctx.fillRect(jx + 6, jy + JERRY_CAN_HEIGHT * 0.2 + (JERRY_CAN_HEIGHT * 0.65 - fillHeight), JERRY_CAN_WIDTH - 12, fillHeight);
      }

      if (canvasStateRef.current.waveActive) {
        canvasStateRef.current.waveX += 18;
        const waveX = canvasStateRef.current.waveX;
        canvasStateRef.current.wavePhase += 0.08;

        const waveGrad = ctx.createLinearGradient(waveX, 0, waveX + w * 0.6, 0);
        waveGrad.addColorStop(0, 'rgba(26,138,200,0.0)');
        waveGrad.addColorStop(0.05, 'rgba(26,138,200,0.95)');
        waveGrad.addColorStop(0.95, 'rgba(26,138,200,0.95)');
        waveGrad.addColorStop(1, 'rgba(26,138,200,0.0)');
        ctx.fillStyle = waveGrad;
        ctx.fillRect(waveX, 0, w, h);

        ctx.beginPath();
        for (let wx = 0; wx <= w + 30; wx += 10) {
          const wy = h / 2 + Math.sin((wx + canvasStateRef.current.wavePhase * 60) * 0.03) * 30;
          if (wx === 0) ctx.moveTo(waveX + wx, wy); else ctx.lineTo(waveX + wx, wy);
        }
        ctx.lineTo(waveX + w + 30, h);
        ctx.lineTo(waveX, h);
        ctx.closePath();
        ctx.fillStyle = 'rgba(10,90,160,0.6)';
        ctx.fill();

        if (waveX > w * 0.15) {
          ctx.fillStyle = '#fff';
          ctx.font = `bold ${Math.min(w * 0.07, 48)}px system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.shadowColor = 'rgba(0,0,0,0.4)';
          ctx.shadowBlur = 8;
          ctx.fillText(canvasStateRef.current.complimentText, w / 2, h / 2 - 24);
          ctx.font = `bold ${Math.min(w * 0.05, 32)}px system-ui, sans-serif`;
          ctx.fillText(`Level ${currentLevel} Complete! 🎉`, w / 2, h / 2 + 24);
          ctx.shadowBlur = 0;
        }

        if (waveX > w * 2 && !levelCompleted) {
          setLevelCompleted(true);
          gameActiveRef.current = false;
          setTimeout(() => {
            completeLevel();
          }, 400);
        }
      }

      ctx.restore();

      frameRef.current = requestAnimationFrame(loop);
    }

    frameRef.current = requestAnimationFrame(loop);

    return () => {
      gameActiveRef.current = false;
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('keydown', (e) => onKey(e, true));
      window.removeEventListener('keyup', (e) => onKey(e, false));
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchstart', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentLevel, completeLevel, spawnDrop, config.bg, levelCompleted]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
        outline: 'none',
      }}
      tabIndex={0}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />

      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(8px)',
          borderRadius: 14,
          padding: '10px 18px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          border: '1px solid rgba(255,255,255,0.2)',
          minWidth: 90,
          zIndex: 20,
        }}
      >
        <span style={{ fontSize: 12, opacity: 0.7, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
          Drops
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <DropletIcon />
          <span style={{ fontSize: 24, fontWeight: 900, color: '#4ab8f0' }}>{dropCount}</span>
          <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>/ {DROPS_TO_WIN}</span>
        </div>
        <div
          style={{
            width: '100%',
            height: 6,
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${(dropCount / DROPS_TO_WIN) * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #2a8acc, #4ab8f0)',
              borderRadius: 3,
              transition: 'width 0.2s',
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(8px)',
          borderRadius: 10,
          padding: '6px 14px',
          color: '#fff',
          fontSize: 14,
          fontWeight: 700,
          border: '1px solid rgba(255,255,255,0.2)',
          zIndex: 20,
        }}
      >
        Level {currentLevel} — {config.name}
      </div>

      {contaminated && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(180,40,40,0.25)',
            zIndex: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              background: 'rgba(180,40,40,0.85)',
              color: '#fff',
              borderRadius: 16,
              padding: '16px 28px',
              fontSize: 20,
              fontWeight: 800,
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            ⚠️ Contaminated! Starting over...
          </div>
        </div>
      )}

      <button
        onClick={goToLevelMap}
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          background: 'rgba(0,0,0,0.55)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 10,
          padding: '8px 18px',
          fontSize: 14,
          cursor: 'pointer',
          fontWeight: 600,
          backdropFilter: 'blur(6px)',
          zIndex: 20,
        }}
      >
        ← Level Map
      </button>

      <div
        style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          display: 'flex',
          gap: 12,
          zIndex: 20,
        }}
        className="mobile-controls"
      >
        {(['ArrowLeft', 'ArrowRight'] as const).map((key, i) => (
          <button
            key={key}
            onPointerDown={(e) => { e.preventDefault(); keysRef.current[key] = true; }}
            onPointerUp={() => { keysRef.current[key] = false; }}
            onPointerLeave={() => { keysRef.current[key] = false; }}
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.55)',
              border: '2px solid rgba(255,255,255,0.35)',
              color: '#fff',
              fontSize: 26,
              cursor: 'pointer',
              backdropFilter: 'blur(6px)',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              touchAction: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {i === 0 ? '◀' : '▶'}
          </button>
        ))}
      </div>

      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .mobile-controls { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function DropletIcon() {
  return (
    <svg width="16" height="20" viewBox="0 0 30 40" fill="none">
      <path d="M15 3C15 3 3 18 3 26A12 12 0 0 0 27 26C27 18 15 3 15 3Z" fill="#4ab8f0" />
      <ellipse cx="10" cy="22" rx="3" ry="5" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

function drawDroplet(ctx: CanvasRenderingContext2D, isClean: boolean, r: number) {
  const fillColor = isClean ? '#2a9ae0' : '#888a8c';
  const shineColor = isClean ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.2)';

  ctx.beginPath();
  ctx.moveTo(0, -r * 1.5);
  ctx.bezierCurveTo(r * 0.9, -r * 0.4, r * 1.1, r * 0.5, 0, r * 1.1);
  ctx.bezierCurveTo(-r * 1.1, r * 0.5, -r * 0.9, -r * 0.4, 0, -r * 1.5);
  ctx.fillStyle = fillColor;
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(-r * 0.3, -r * 0.2, r * 0.25, r * 0.5, -0.3, 0, Math.PI * 2);
  ctx.fillStyle = shineColor;
  ctx.fill();

  if (!isClean) {
    ctx.beginPath();
    ctx.moveTo(-r * 0.3, -r * 0.4);
    ctx.lineTo(r * 0.3, r * 0.4);
    ctx.strokeStyle = 'rgba(150,60,60,0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}
