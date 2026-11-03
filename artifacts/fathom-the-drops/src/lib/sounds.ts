let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

function playTone(
  frequency: number,
  type: OscillatorType,
  duration: number,
  gainStart: number,
  gainEnd: number,
  delay = 0
) {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
    gain.gain.setValueAtTime(gainStart, ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(gainEnd, ctx.currentTime + delay + duration);
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + duration);
  } catch {}
}

export function playCleanDropSound() {
  playTone(523, 'sine', 0.15, 0.3, 0.01);
  playTone(659, 'sine', 0.15, 0.2, 0.01, 0.08);
}

export function playBadDropSound() {
  playTone(220, 'sawtooth', 0.25, 0.4, 0.01);
  playTone(180, 'sawtooth', 0.25, 0.3, 0.01, 0.1);
}

export function playLevelCompleteSound() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((freq, i) => {
    playTone(freq, 'sine', 0.3, 0.3, 0.01, i * 0.12);
  });
}

export function playWinSound() {
  const notes = [523, 659, 784, 1047, 1319];
  notes.forEach((freq, i) => {
    playTone(freq, 'sine', 0.4, 0.35, 0.01, i * 0.1);
  });
}
