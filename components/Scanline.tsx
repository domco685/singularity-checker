'use client';

export default function Scanline() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div className="absolute w-full h-px bg-cyber-blue opacity-20 animate-scanline" />
    </div>
  );
}
