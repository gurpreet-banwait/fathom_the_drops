export type BackgroundType =
  | 'mountains'
  | 'forest'
  | 'desert'
  | 'beach'
  | 'savanna'
  | 'arctic'
  | 'city';

export function drawBackground(
  ctx: CanvasRenderingContext2D,
  type: BackgroundType,
  width: number,
  height: number
) {
  switch (type) {
    case 'mountains': drawMountains(ctx, width, height); break;
    case 'forest': drawForest(ctx, width, height); break;
    case 'desert': drawDesert(ctx, width, height); break;
    case 'beach': drawBeach(ctx, width, height); break;
    case 'savanna': drawSavanna(ctx, width, height); break;
    case 'arctic': drawArctic(ctx, width, height); break;
    case 'city': drawCity(ctx, width, height); break;
  }
}

function drawMountains(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#1a3a6b');
  skyGrad.addColorStop(1, '#5b8fcc');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  const groundGrad = ctx.createLinearGradient(0, h * 0.65, 0, h);
  groundGrad.addColorStop(0, '#3a5a2a');
  groundGrad.addColorStop(1, '#2a4a1a');
  ctx.fillStyle = groundGrad;
  ctx.fillRect(0, h * 0.65, w, h * 0.35);

  const mountains = [
    { x: -0.05, peak: 0.15, base: 0.65, color: '#5a7090' },
    { x: 0.15, peak: 0.05, base: 0.65, color: '#4a6080' },
    { x: 0.35, peak: 0.1, base: 0.65, color: '#6a8098' },
    { x: 0.55, peak: 0.08, base: 0.65, color: '#3a5070' },
    { x: 0.75, peak: 0.12, base: 0.65, color: '#5a7090' },
    { x: 0.9, peak: 0.18, base: 0.65, color: '#4a6080' },
  ];

  mountains.forEach(({ x, peak, base, color }) => {
    ctx.beginPath();
    ctx.moveTo(w * (x - 0.15), h * base);
    ctx.lineTo(w * x, h * peak);
    ctx.lineTo(w * (x + 0.2), h * base);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(w * x - 18, h * (peak + 0.05));
    ctx.lineTo(w * x, h * peak);
    ctx.lineTo(w * x + 18, h * (peak + 0.05));
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fill();
  });
}

function drawForest(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#1a4a1a');
  skyGrad.addColorStop(1, '#4a9a4a');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#2a5a1a';
  ctx.fillRect(0, h * 0.7, w, h * 0.3);

  const trees = [0.05, 0.12, 0.2, 0.27, 0.35, 0.42, 0.5, 0.58, 0.65, 0.73, 0.8, 0.88, 0.95];
  trees.forEach((tx) => {
    const treeH = h * (0.25 + Math.random() * 0.15);
    const treeX = w * tx;
    const baseY = h * 0.7;
    ctx.fillStyle = '#5a3a1a';
    ctx.fillRect(treeX - 5, baseY - treeH * 0.3, 10, treeH * 0.3);
    const greens = ['#2a7a2a', '#1a6a1a', '#3a8a2a'];
    [[0, 0, 1], [-0.04, 0.5, 0.8], [0, 0.25, 0.6]].forEach(([offsetX, yFrac, sizeFrac], i) => {
      ctx.beginPath();
      ctx.moveTo(treeX + w * offsetX, baseY - treeH * (0.3 + yFrac * 0.5));
      ctx.lineTo(treeX - treeH * 0.35 * sizeFrac, baseY - treeH * 0.3 * (1 - yFrac));
      ctx.lineTo(treeX + treeH * 0.35 * sizeFrac, baseY - treeH * 0.3 * (1 - yFrac));
      ctx.fillStyle = greens[i % greens.length];
      ctx.fill();
    });
  });

  ctx.fillStyle = 'rgba(255,255,200,0.15)';
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h * 0.5, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawDesert(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#c07020');
  skyGrad.addColorStop(0.5, '#e09040');
  skyGrad.addColorStop(1, '#f0b060');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(w * 0.85, h * 0.15, 50, 0, Math.PI * 2);
  ctx.fillStyle = '#fff0a0';
  ctx.fill();

  const sandGrad = ctx.createLinearGradient(0, h * 0.6, 0, h);
  sandGrad.addColorStop(0, '#e8c060');
  sandGrad.addColorStop(1, '#c8a040');
  ctx.fillStyle = sandGrad;
  ctx.fillRect(0, h * 0.6, w, h * 0.4);

  [[0.15, 0.55, 0.3], [0.45, 0.5, 0.4], [0.75, 0.58, 0.25]].forEach(([dx, dy, dw]) => {
    ctx.beginPath();
    ctx.ellipse(w * dx, h * dy, w * dw, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#d4a844';
    ctx.fill();
  });

  [[0.3, 0.62], [0.6, 0.58], [0.85, 0.65]].forEach(([cx, cy]) => {
    ctx.fillStyle = '#3a6a20';
    ctx.fillRect(w * cx - 4, h * cy - 30, 8, 30);
    [[0, -30, 18, 8, -0.3], [-10, -15, 22, 8, 0.2], [8, -20, 20, 8, 0.1]].forEach(([ex, ey, rx, ry, rot]) => {
      ctx.save();
      ctx.translate(w * cx + ex, h * cy + ey);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#4a8a30';
      ctx.fill();
      ctx.restore();
    });
  });
}

function drawBeach(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#1a88cc');
  skyGrad.addColorStop(0.6, '#5ab8f0');
  skyGrad.addColorStop(1, '#8ad0f8');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(w * 0.15, h * 0.12, 45, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffc0';
  ctx.fill();

  const oceanGrad = ctx.createLinearGradient(0, h * 0.55, 0, h * 0.72);
  oceanGrad.addColorStop(0, '#1a70b8');
  oceanGrad.addColorStop(1, '#0a5090');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, h * 0.55, w, h * 0.17);

  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(0, h * (0.57 + i * 0.025));
    for (let x = 0; x <= w; x += 30) {
      ctx.lineTo(x, h * (0.57 + i * 0.025) + Math.sin(x * 0.04 + i) * 6);
    }
    ctx.lineTo(w, h * 0.72);
    ctx.lineTo(0, h * 0.72);
    ctx.fillStyle = `rgba(255,255,255,${0.1 - i * 0.02})`;
    ctx.fill();
  }

  const sandGrad = ctx.createLinearGradient(0, h * 0.72, 0, h);
  sandGrad.addColorStop(0, '#e8d888');
  sandGrad.addColorStop(1, '#d8c870');
  ctx.fillStyle = sandGrad;
  ctx.fillRect(0, h * 0.72, w, h * 0.28);

  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.ellipse(w * (0.1 + i * 0.15), h * 0.76, 20, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(200,180,80,0.5)';
    ctx.fill();
  }
}

function drawSavanna(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#e05020');
  skyGrad.addColorStop(0.4, '#f08030');
  skyGrad.addColorStop(1, '#f8b860');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(w * 0.8, h * 0.18, 55, 0, Math.PI * 2);
  ctx.fillStyle = '#ffcc40';
  ctx.fill();

  ctx.fillStyle = '#a87830';
  ctx.fillRect(0, h * 0.68, w, h * 0.32);
  ctx.fillStyle = '#c89840';
  for (let i = 0; i < 12; i++) {
    ctx.fillRect(w * (i / 12), h * 0.65, w / 12, h * 0.05);
  }

  const acacias = [0.1, 0.35, 0.6, 0.82];
  acacias.forEach((ax) => {
    const baseY = h * 0.68;
    const trunkH = 60 + Math.random() * 30;
    ctx.fillStyle = '#5a3810';
    ctx.fillRect(w * ax - 5, baseY - trunkH, 10, trunkH);
    ctx.beginPath();
    ctx.ellipse(w * ax, baseY - trunkH, 55, 22, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#3a6a20';
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * ax, baseY - trunkH, 40, 15, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#4a7a28';
    ctx.fill();
  });
}

function drawArctic(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#0a1a3a');
  skyGrad.addColorStop(0.5, '#1a3a6a');
  skyGrad.addColorStop(1, '#3a7aaa');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  const auroraColors = ['rgba(0,255,100,0.15)', 'rgba(0,200,255,0.1)', 'rgba(150,0,255,0.1)'];
  auroraColors.forEach((color, i) => {
    ctx.beginPath();
    ctx.moveTo(0, h * (0.1 + i * 0.08));
    for (let x = 0; x <= w; x += 20) {
      ctx.lineTo(x, h * (0.1 + i * 0.08) + Math.sin(x * 0.02 + i * 2) * 30);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 15;
    ctx.stroke();
  });

  for (let i = 0; i < 80; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h * 0.6, Math.random() * 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fill();
  }

  const iceGrad = ctx.createLinearGradient(0, h * 0.62, 0, h);
  iceGrad.addColorStop(0, '#d0e8f8');
  iceGrad.addColorStop(1, '#b0d0e8');
  ctx.fillStyle = iceGrad;
  ctx.fillRect(0, h * 0.62, w, h * 0.38);

  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    const ix = w * (i * 0.22 + 0.05);
    const iy = h * 0.62;
    const ih = 50 + i * 15;
    ctx.moveTo(ix - 40, iy);
    ctx.lineTo(ix, iy - ih);
    ctx.lineTo(ix + 40, iy);
    ctx.fillStyle = `rgba(180,220,240,0.9)`;
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.beginPath();
    ctx.moveTo(ix - 10, iy - ih + 5);
    ctx.lineTo(ix, iy - ih);
    ctx.lineTo(ix + 10, iy - ih + 5);
    ctx.fill();
  }
}

function drawCity(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#050a20');
  skyGrad.addColorStop(0.5, '#0a1535');
  skyGrad.addColorStop(1, '#1a3055');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h * 0.55, Math.random() * 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${0.4 + Math.random() * 0.6})`;
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(w * 0.7, h * 0.12, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,240,180,0.8)';
  ctx.fill();
  for (let a = 0; a < Math.PI * 2; a += 0.2) {
    ctx.beginPath();
    ctx.moveTo(w * 0.7 + Math.cos(a) * 32, h * 0.12 + Math.sin(a) * 32);
    ctx.lineTo(w * 0.7 + Math.cos(a) * 45, h * 0.12 + Math.sin(a) * 45);
    ctx.strokeStyle = 'rgba(255,240,180,0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  const buildings = [
    { x: 0, w: 0.12, h: 0.5, color: '#1a2540' },
    { x: 0.1, w: 0.08, h: 0.65, color: '#202a45' },
    { x: 0.17, w: 0.1, h: 0.45, color: '#151f38' },
    { x: 0.26, w: 0.09, h: 0.7, color: '#1e2840' },
    { x: 0.34, w: 0.07, h: 0.55, color: '#1a2438' },
    { x: 0.4, w: 0.11, h: 0.4, color: '#202c48' },
    { x: 0.5, w: 0.08, h: 0.6, color: '#1a2438' },
    { x: 0.57, w: 0.1, h: 0.75, color: '#1e2840' },
    { x: 0.66, w: 0.08, h: 0.5, color: '#151f35' },
    { x: 0.73, w: 0.12, h: 0.45, color: '#202a42' },
    { x: 0.84, w: 0.09, h: 0.65, color: '#1a2438' },
    { x: 0.92, w: 0.1, h: 0.55, color: '#1e2845' },
  ];

  buildings.forEach((b) => {
    const bh = h * b.h;
    const by = h - bh;
    ctx.fillStyle = b.color;
    ctx.fillRect(w * b.x, by, w * b.w, bh);
    ctx.fillStyle = 'rgba(255,220,100,0.6)';
    const rows = Math.floor(bh / 18);
    const cols = Math.floor(w * b.w / 14);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > 0.45) {
          ctx.fillRect(w * b.x + c * 14 + 3, by + r * 18 + 3, 7, 10);
        }
      }
    }
  });

  ctx.fillStyle = '#111b30';
  ctx.fillRect(0, h * 0.85, w, h * 0.15);
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(w * (i / 7), h * 0.85, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffcc40';
    ctx.fill();
  }
}
