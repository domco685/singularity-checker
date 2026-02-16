'use client';

import { motion } from 'framer-motion';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Scanline from '@/components/Scanline';
import NeonButton from '@/components/NeonButton';
import MemeCard from '@/components/MemeCard';
import { getScoreStatus, getCategoryScores, getDynamicMessage } from '@/lib/quiz-data';
import { getMemesForScore } from '@/lib/meme-templates';
import { shareToTwitter, downloadMeme } from '@/components/ShareButton';

export default function ResultsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const score = parseInt(params.score as string);
  const answersParam = searchParams.get('answers');
  const answers = answersParam ? answersParam.split(',').map(Number) : [];

  const status = getScoreStatus(score);
  const categoryScores = getCategoryScores(answers);
  const dynamicMessage = getDynamicMessage(score);

  const shareText = `I scored ${score}/100 on the Singularity Checker. Status: ${status}\n\nAre you still human?\n\nsingularitychecker.com`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <main className="relative min-h-screen p-4 py-16">
      <Scanline />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Score Display */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-8xl md:text-9xl font-mono font-bold mb-4 glitch-text"
            data-text={`${score}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gradient">{score}</span>
            <span className="text-cyber-text/50 text-5xl">/100</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-mono font-bold text-cyber-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {status}
          </motion.h2>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          className="mb-12 p-8 border-2 border-cyber-purple/30 bg-cyber-black/50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl font-mono font-bold text-cyber-purple mb-6">
            BREAKDOWN
          </h3>
          
          <div className="space-y-4">
            {Object.entries(categoryScores).map(([category, score], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="flex justify-between text-sm font-mono mb-2">
                  <span className="text-cyber-text uppercase">{category}</span>
                  <span className="text-cyber-blue">{score}%</span>
                </div>
                <div className="w-full h-2 bg-cyber-text/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Reflection */}
        <motion.div
          className="mb-12 p-8 border-2 border-cyber-blue/30 bg-cyber-black/50 font-mono"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="text-cyber-text space-y-4 leading-relaxed">
            <p className="text-cyber-blue font-bold text-lg">
              Your Humanity Score: {score}/100
            </p>
            
            <div className="border-t border-cyber-blue/30 my-4" />
            
            <p>Here's what this really means:</p>
            
            <p>
              You're not losing to AI.<br />
              You're losing to the treadmill.
            </p>
            
            <p>
              Achievement without presence.<br />
              Output without feeling.<br />
              Success without connection.
            </p>
            
            <p className="text-cyber-purple">
              The singularity isn't when AI becomes human.<br />
              It's when humans become machines.
            </p>
            
            <p className="text-cyber-green italic">
              {dynamicMessage}
            </p>
            
            <div className="border-t border-cyber-blue/30 my-4" />
            
            <p>But here's the thing:</p>
            
            <p>
              You can turn this around.<br />
              Not by rejecting AI.<br />
              By reconnecting to what makes you... you.
            </p>
            
            <p>
              Feelings. Nature. Presence.<br />
              The things no model can replicate.
            </p>
            
            <p className="text-cyber-blue font-bold">
              The machines will get smarter.<br />
              The question is: Will you stay human?
            </p>
            
            <div className="border-t border-cyber-blue/30 my-4" />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href={shareUrl} target="_blank" rel="noopener noreferrer">
            <NeonButton variant="primary">
              Share on X →
            </NeonButton>
          </a>
          
          <Link href="/check">
            <NeonButton variant="secondary">
              ← Retake Quiz
            </NeonButton>
          </Link>
          
          <Link href="/about">
            <NeonButton variant="primary">
              Learn More →
            </NeonButton>
          </Link>
        </motion.div>

        {/* Meme Generator Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-cyber-purple mb-3">
              SHARE YOUR SCORE
            </h2>
            <p className="text-cyber-text/70 font-mono">
              Pick your favorite meme and share on X
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getMemesForScore(score, status).map((template, index) => (
              <MemeCard
                key={template.style}
                template={template}
                score={score}
                status={status}
                index={index}
                onDownload={downloadMeme}
                onShare={shareToTwitter}
              />
            ))}
          </div>
        </motion.div>

        {/* SHISHARKA Bridge */}
        <motion.div
          className="text-center p-8 border-2 border-cyber-purple/20 bg-cyber-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <p className="text-cyber-text/70 mb-4">
            This project is supported by <span className="text-cyber-purple font-bold">SHISHARKA</span> -{' '}
            a nonprofit exploring the line between human consciousness and artificial intelligence.
          </p>
          
          <p className="text-cyber-text/70 mb-4">
            Not to fear AI. To remember what being human means.
          </p>
          
          <a
            href="https://shisharka.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-blue hover:text-cyber-purple transition-colors font-mono"
          >
            → shisharka.org
          </a>
        </motion.div>
      </div>
    </main>
  );
}
