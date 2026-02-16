'use client';

import { MemeStyle, COLORS, CANVAS_WIDTH, CANVAS_HEIGHT } from '@/lib/meme-templates';

export function generateMeme(
  style: MemeStyle,
  score: number,
  status: string,
  message: string
): string {
  const canvas = document.createElement('canvas');
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  // Common setup
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  switch (style) {
    case 'scorecard':
      drawScoreCard(ctx, score, status, message);
      break;
    case 'comic':
      drawComic(ctx, score, message);
      break;
    case 'badge':
      drawBadge(ctx, score, status, message);
      break;
    case 'warning':
      drawWarning(ctx, score, status);
      break;
  }
  
  return canvas.toDataURL('image/png');
}

function drawScoreCard(ctx: CanvasRenderingContext2D, score: number, status: string, message: string) {
  const padding = 80;
  const boxWidth = CANVAS_WIDTH - (padding * 2);
  const boxHeight = CANVAS_HEIGHT - (padding * 2);
  
  // Draw border with glow
  ctx.strokeStyle = COLORS.blue;
  ctx.lineWidth = 3;
  ctx.shadowColor = COLORS.blue;
  ctx.shadowBlur = 20;
  ctx.strokeRect(padding, padding, boxWidth, boxHeight);
  ctx.shadowBlur = 0;
  
  // Title
  ctx.fillStyle = COLORS.blue;
  ctx.font = 'bold 42px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('🤖 SINGULARITY CHECK RESULTS', CANVAS_WIDTH / 2, 150);
  
  // Score - large and glitchy
  ctx.fillStyle = COLORS.purple;
  ctx.font = 'bold 120px monospace';
  ctx.fillText(`${score}/100`, CANVAS_WIDTH / 2, 280);
  
  // Status
  ctx.fillStyle = COLORS.pink;
  ctx.font = 'bold 48px monospace';
  ctx.fillText(status.toUpperCase(), CANVAS_WIDTH / 2, 350);
  
  // Fun stats
  ctx.fillStyle = COLORS.text;
  ctx.font = '28px monospace';
  ctx.textAlign = 'left';
  const statsX = padding + 60;
  ctx.fillText('• Last 3 AM commit: 2 days ago', statsX, 420);
  ctx.fillText('• "fix" commits: 47 this month', statsX, 460);
  ctx.fillText('• Touch grass: Unknown', statsX, 500);
  
  // URL
  ctx.fillStyle = COLORS.green;
  ctx.font = 'bold 32px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('singularitychecker.com', CANVAS_WIDTH / 2, 570);
}

function drawComic(ctx: CanvasRenderingContext2D, score: number, message: string) {
  const midY = CANVAS_HEIGHT / 2;
  
  // Top panel background
  ctx.fillStyle = '#111111';
  ctx.fillRect(0, 0, CANVAS_WIDTH, midY - 2);
  
  // Bottom panel background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, midY + 2, CANVAS_WIDTH, midY - 2);
  
  // Divider
  ctx.strokeStyle = COLORS.purple;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, midY);
  ctx.lineTo(CANVAS_WIDTH, midY);
  ctx.stroke();
  
  // Top text
  ctx.fillStyle = COLORS.text;
  ctx.font = 'bold 38px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('Me thinking I\'m still human', CANVAS_WIDTH / 2, 100);
  
  ctx.font = '80px monospace';
  ctx.fillText('😊', CANVAS_WIDTH / 2, 210);
  
  // Bottom text
  ctx.fillStyle = COLORS.pink;
  ctx.font = 'bold 36px monospace';
  ctx.fillText(`My Singularity Score: ${score}/100`, CANVAS_WIDTH / 2, 380);
  
  ctx.font = '80px monospace';
  ctx.fillText('😱', CANVAS_WIDTH / 2, 490);
  
  // URL
  ctx.fillStyle = COLORS.blue;
  ctx.font = 'bold 28px monospace';
  ctx.fillText('singularitychecker.com', CANVAS_WIDTH / 2, 590);
}

function drawBadge(ctx: CanvasRenderingContext2D, score: number, status: string, message: string) {
  // Hexagon badge
  const centerX = CANVAS_WIDTH / 2;
  const centerY = 220;
  const radius = 140;
  
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  
  // Gradient fill
  const gradient = ctx.createLinearGradient(centerX - radius, centerY, centerX + radius, centerY);
  gradient.addColorStop(0, COLORS.blue);
  gradient.addColorStop(0.5, COLORS.purple);
  gradient.addColorStop(1, COLORS.pink);
  
  ctx.fillStyle = gradient;
  ctx.fill();
  
  ctx.strokeStyle = COLORS.text;
  ctx.lineWidth = 4;
  ctx.stroke();
  
  // Score in badge
  ctx.fillStyle = COLORS.background;
  ctx.font = 'bold 80px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(`${score}`, centerX, centerY + 25);
  
  // Title
  ctx.fillStyle = COLORS.blue;
  ctx.font = 'bold 44px monospace';
  ctx.fillText('HUMANITY LEVEL', centerX, 400);
  
  // Status
  ctx.fillStyle = COLORS.purple;
  ctx.font = 'bold 52px monospace';
  ctx.fillText(status.toUpperCase(), centerX, 460);
  
  // Message
  ctx.fillStyle = COLORS.text;
  ctx.font = 'italic 32px monospace';
  const words = message.split(' ');
  const maxWidth = CANVAS_WIDTH - 160;
  let line = '';
  let y = 520;
  
  for (let word of words) {
    const testLine = line + word + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && line !== '') {
      ctx.fillText(line, centerX, y);
      line = word + ' ';
      y += 40;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, centerX, y);
  
  // URL
  ctx.fillStyle = COLORS.green;
  ctx.font = 'bold 28px monospace';
  ctx.fillText('singularitychecker.com', centerX, 600);
}

function drawWarning(ctx: CanvasRenderingContext2D, score: number, status: string) {
  // Warning stripes background
  const stripeWidth = 60;
  ctx.fillStyle = '#1a1a00';
  for (let x = -CANVAS_HEIGHT; x < CANVAS_WIDTH; x += stripeWidth * 2) {
    ctx.fillRect(x, 0, stripeWidth, CANVAS_HEIGHT);
  }
  
  // Black overlay
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  // Warning symbol
  ctx.fillStyle = COLORS.pink;
  ctx.font = 'bold 120px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('⚠️', CANVAS_WIDTH / 2, 140);
  
  // Title
  ctx.fillStyle = COLORS.pink;
  ctx.font = 'bold 56px monospace';
  ctx.fillText('WARNING', CANVAS_WIDTH / 2, 210);
  
  // Message
  ctx.fillStyle = COLORS.text;
  ctx.font = 'bold 38px monospace';
  ctx.fillText('HUMANITY LEVEL CRITICAL', CANVAS_WIDTH / 2, 280);
  
  // Score box
  const boxWidth = 400;
  const boxHeight = 120;
  const boxX = (CANVAS_WIDTH - boxWidth) / 2;
  const boxY = 310;
  
  ctx.strokeStyle = COLORS.pink;
  ctx.lineWidth = 4;
  ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
  
  ctx.fillStyle = COLORS.pink;
  ctx.font = 'bold 48px monospace';
  ctx.fillText(`SCORE: ${score}/100`, CANVAS_WIDTH / 2, boxY + 60);
  
  ctx.font = 'bold 36px monospace';
  ctx.fillStyle = COLORS.text;
  ctx.fillText(`STATUS: ${status.toUpperCase()}`, CANVAS_WIDTH / 2, boxY + 105);
  
  // Action required
  ctx.fillStyle = COLORS.green;
  ctx.font = 'bold 32px monospace';
  ctx.fillText('Immediate grass-touching required', CANVAS_WIDTH / 2, 500);
  
  // URL
  ctx.fillStyle = COLORS.blue;
  ctx.font = 'bold 32px monospace';
  ctx.fillText('singularitychecker.com', CANVAS_WIDTH / 2, 580);
}
