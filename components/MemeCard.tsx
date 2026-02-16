'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MemeTemplate } from '@/lib/meme-templates';
import { generateMeme } from './MemeGenerator';

interface MemeCardProps {
  template: MemeTemplate;
  score: number;
  status: string;
  index: number;
  onDownload: (dataUrl: string, score: number) => void;
  onShare: (message: string, score: number, status: string) => void;
}

export default function MemeCard({
  template,
  score,
  status,
  index,
  onDownload,
  onShare
}: MemeCardProps) {
  const [preview, setPreview] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Generate meme preview
    const dataUrl = generateMeme(template.style, score, status, template.message);
    setPreview(dataUrl);
  }, [template, score, status]);
  
  const handleDownload = () => {
    if (preview) {
      onDownload(preview, score);
    }
  };
  
  const handleShare = () => {
    onShare(template.message, score, status);
  };
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className={`
        relative p-4 border-2 bg-cyber-black/50 
        transition-all duration-300
        ${isHovered 
          ? 'border-cyber-purple shadow-[0_0_30px_rgba(176,38,255,0.5)] scale-105' 
          : 'border-cyber-purple/30'
        }
      `}>
        {/* Meme Preview */}
        <div className="relative mb-4 overflow-hidden bg-black">
          {preview ? (
            <img 
              src={preview} 
              alt={template.name}
              className="w-full h-auto"
            />
          ) : (
            <div className="w-full aspect-[1200/630] flex items-center justify-center">
              <div className="text-cyber-text/50 font-mono">Generating...</div>
            </div>
          )}
          
          {/* Scanline effect overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,217,255,0.03)_2px,rgba(0,217,255,0.03)_4px)]" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-mono font-bold text-cyber-blue mb-2">
          {template.name}
        </h3>
        
        {/* Message Preview */}
        <p className="text-sm font-mono text-cyber-text/70 mb-4 italic">
          "{template.message}"
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="flex-1 px-4 py-2 border-2 border-cyber-blue bg-cyber-blue/10 
                     hover:bg-cyber-blue/20 text-cyber-blue font-mono text-sm
                     transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,217,255,0.5)]"
          >
            Download PNG
          </button>
          
          <button
            onClick={handleShare}
            className="flex-1 px-4 py-2 border-2 border-cyber-purple bg-cyber-purple/10 
                     hover:bg-cyber-purple/20 text-cyber-purple font-mono text-sm
                     transition-all duration-200 hover:shadow-[0_0_15px_rgba(176,38,255,0.5)]"
          >
            Share on X
          </button>
        </div>
      </div>
      
      {/* Glitch corner accent */}
      <div className={`
        absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 
        transition-all duration-300
        ${isHovered ? 'border-cyber-pink' : 'border-cyber-purple/50'}
      `} />
      <div className={`
        absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 
        transition-all duration-300
        ${isHovered ? 'border-cyber-pink' : 'border-cyber-purple/50'}
      `} />
    </motion.div>
  );
}
