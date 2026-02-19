'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Scanline from '@/components/Scanline';
import NeonButton from '@/components/NeonButton';
import { questions, calculateScore } from '@/lib/quiz-data';

export default function CheckPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    setTimeout(() => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answerIndex;
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Quiz complete, redirect to landing page
        window.location.href = 'https://preview--become-now-map.lovable.app/identity-shift/quit-drinking';
      }
    }, 300);
  };

  const currentQ = questions[currentQuestion];

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4">
      <Scanline />
      
      <div className="relative z-10 w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-mono text-cyber-blue mb-2">
            <span>QUESTION {currentQuestion + 1}/{questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-cyber-text/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Question */}
            <motion.h2
              className="text-3xl md:text-4xl font-mono font-bold text-cyber-blue mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {currentQ.question}
            </motion.h2>

            {/* Answers */}
            <div className="space-y-4">
              {currentQ.answers.map((answer, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`
                    w-full p-6 text-left font-mono text-lg
                    border-2 transition-all duration-300
                    ${
                      selectedAnswer === index
                        ? 'border-cyber-green bg-cyber-green/20 text-cyber-green'
                        : 'border-cyber-blue/30 hover:border-cyber-blue hover:bg-cyber-blue/10 text-cyber-text'
                    }
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-cyber-purple mr-4">[{String.fromCharCode(65 + index)}]</span>
                  {answer.text}
                </motion.button>
              ))}
            </div>

            {/* Category indicator */}
            <motion.div
              className="text-sm font-mono text-cyber-text/50 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Category: {currentQ.category.toUpperCase()}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
