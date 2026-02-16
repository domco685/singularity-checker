'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import Scanline from '@/components/Scanline';
import NeonButton from '@/components/NeonButton';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MatrixRain />
      <Scanline />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="font-mono text-6xl md:text-8xl font-bold mb-6 glitch-text"
          data-text="SINGULARITY CHECKER"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">SINGULARITY CHECKER</span>
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl font-bold text-cyber-blue mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          ARE YOU STILL HUMAN?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-cyber-text/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Analyze your patterns. Assess your humanity. Face the truth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link href="/check">
            <NeonButton className="text-xl animate-pulse-neon">
              Find Out →
            </NeonButton>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 text-sm text-cyber-text/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p>A digital consciousness assessment</p>
        </motion.div>
      </div>
    </main>
  );
}
