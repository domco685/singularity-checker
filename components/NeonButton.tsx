'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

export default function NeonButton({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary' 
}: NeonButtonProps) {
  const colorMap = {
    primary: 'border-cyber-blue text-cyber-blue hover:bg-cyber-blue',
    secondary: 'border-cyber-purple text-cyber-purple hover:bg-cyber-purple',
    danger: 'border-cyber-red text-cyber-red hover:bg-cyber-red',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`
        px-8 py-3 border-2 ${colorMap[variant]}
        font-mono font-semibold uppercase tracking-wider
        transition-all duration-300
        hover:text-cyber-black hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
