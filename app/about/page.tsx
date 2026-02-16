'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Scanline from '@/components/Scanline';
import NeonButton from '@/components/NeonButton';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen p-4 py-16">
      <Scanline />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-mono font-bold mb-8 text-gradient">
            ABOUT THIS PROJECT
          </h1>
        </motion.div>

        <motion.div
          className="space-y-8 text-cyber-text/90 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <section>
            <h2 className="text-2xl font-mono font-bold text-cyber-blue mb-4">
              Why We Built This
            </h2>
            <p className="text-lg">
              It started as a joke. A meme quiz to make AI builders laugh at themselves.
              But somewhere between the punchlines, it became something else.
            </p>
            <p className="text-lg mt-4">
              A mirror. A moment of reflection. A gentle reminder that the people building
              the future of intelligence are, ironically, the ones most at risk of losing
              their own humanity in the process.
            </p>
          </section>

          <section className="border-l-4 border-cyber-purple pl-6">
            <h2 className="text-2xl font-mono font-bold text-cyber-purple mb-4">
              The Joke That Became Serious
            </h2>
            <p className="text-lg">
              You're building AGI. Training frontier models. Automating everything.
              And you haven't seen sunlight in a week.
            </p>
            <p className="text-lg mt-4">
              You're the most influential people shaping AI's future—but when was the
              last time you felt fully present? Fully human?
            </p>
            <p className="text-lg mt-4 text-cyber-green italic">
              This quiz isn't judging you. It's inviting you to pause. To notice. To reconnect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-bold text-cyber-blue mb-4">
              What SHISHARKA Believes
            </h2>
            <p className="text-lg">
              <span className="text-cyber-purple font-bold">SHISHARKA</span> is a nonprofit
              exploring consciousness, intelligence, and what it means to be human in the age of AI.
            </p>
            <p className="text-lg mt-4">
              We're not anti-AI. We're pro-human.
            </p>
            <p className="text-lg mt-4">
              AI can be a tool for elevation—helping us think clearer, create faster, solve bigger.
              Or it can be a tool for distraction—keeping us productive, busy, disconnected from
              what actually matters.
            </p>
            <p className="text-lg mt-4 text-cyber-blue font-bold">
              The difference is you.
            </p>
          </section>

          <section className="border-l-4 border-cyber-green pl-6">
            <h2 className="text-2xl font-mono font-bold text-cyber-green mb-4">
              Feelings Are Divine Technology
            </h2>
            <p className="text-lg">
              You know what no language model can replicate? The feeling of watching a sunset.
              The presence of a real conversation. The intuition that guides your best work.
            </p>
            <p className="text-lg mt-4">
              Those aren't bugs. They're features. They're what make you human. They're what
              make you brilliant.
            </p>
            <p className="text-lg mt-4">
              And they atrophy when ignored.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-bold text-cyber-blue mb-4">
              The Real Singularity
            </h2>
            <p className="text-lg">
              Everyone's worried about when AI becomes conscious. We're worried about when
              humans stop being conscious.
            </p>
            <p className="text-lg mt-4">
              When achievement replaces awareness. When output replaces experience. When
              optimization replaces humanity.
            </p>
            <p className="text-lg mt-4 text-cyber-purple font-bold">
              That's the real singularity. And it's already happening.
            </p>
          </section>

          <section className="p-8 border-2 border-cyber-blue/30 bg-cyber-black/50">
            <h2 className="text-2xl font-mono font-bold text-cyber-blue mb-4">
              What You Can Do
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-cyber-green mr-3">→</span>
                <span>Go outside. Feel the air. Notice three things.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-green mr-3">→</span>
                <span>Have a real conversation. No agenda. Just presence.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-green mr-3">→</span>
                <span>Close some tabs. Your browser and your mind.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-green mr-3">→</span>
                <span>Build AI that elevates humanity instead of replacing it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-green mr-3">→</span>
                <span>Remember: you're not competing with AI. You're collaborating with it.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-bold text-cyber-purple mb-4">
              Credits
            </h2>
            <p className="text-lg">
              Built with love by <span className="text-cyber-blue">Dom</span> and{' '}
              <span className="text-cyber-blue">Hydi</span> for SHISHARKA.
            </p>
            <p className="text-lg mt-4">
              This is our Trojan horse into the AI world. They come for the memes.
              We plant seeds of reconnection.
            </p>
          </section>

          <section className="text-center py-8">
            <p className="text-lg text-cyber-text/70 mb-6">
              Learn more about our mission:
            </p>
            <a
              href="https://shisharka.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-blue hover:text-cyber-purple transition-colors font-mono text-xl"
            >
              → shisharka.org
            </a>
          </section>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/">
              <NeonButton>
                ← Back to Home
              </NeonButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
