'use client';

export function shareToTwitter(message: string, score: number, status: string) {
  const text = encodeURIComponent(
    `I just took the Singularity Check 🤖\n\n` +
    `Humanity Score: ${score}/100\n` +
    `Status: ${status}\n\n` +
    `${message}\n\n` +
    `Are you still human? Find out: singularitychecker.com`
  );
  
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
}

export function downloadMeme(dataUrl: string, score: number) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `singularity-check-${score}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
