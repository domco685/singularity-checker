export interface Answer {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  category: 'social' | 'balance' | 'tech' | 'awareness';
}

export const questions: Question[] = [
  {
    id: 1,
    question: "When was the last time you talked to a human IRL?",
    category: 'social',
    answers: [
      { text: "Today", score: 10 },
      { text: "This week", score: 7 },
      { text: "What's IRL?", score: 2 },
      { text: "I am the AI", score: 0 },
    ],
  },
  {
    id: 2,
    question: "How do you feel about the Oxford comma?",
    category: 'awareness',
    answers: [
      { text: "It's essential", score: 8 },
      { text: "I can live without it", score: 7 },
      { text: "What's an Oxford comma?", score: 5 },
      { text: "Syntax error: unexpected token", score: 10 },
    ],
  },
  {
    id: 3,
    question: "Your code breaks in production. First reaction?",
    category: 'balance',
    answers: [
      { text: "Deep breath, check logs", score: 10 },
      { text: "Panic, then fix", score: 7 },
      { text: "Blame the intern", score: 3 },
      { text: "Roll back, investigate later", score: 5 },
    ],
  },
  {
    id: 4,
    question: "How many browser tabs do you have open?",
    category: 'tech',
    answers: [
      { text: "Less than 10", score: 10 },
      { text: "10-30", score: 7 },
      { text: "30-100", score: 3 },
      { text: "My computer is crying", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Last time you saw sunlight?",
    category: 'balance',
    answers: [
      { text: "Today", score: 10 },
      { text: "This week", score: 6 },
      { text: "What's sunlight?", score: 2 },
      { text: "My monitor has a blue light filter", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Preferred communication method?",
    category: 'social',
    answers: [
      { text: "Face to face", score: 10 },
      { text: "Video call", score: 8 },
      { text: "Slack/Discord", score: 4 },
      { text: "Git commits only", score: 0 },
    ],
  },
  {
    id: 7,
    question: "You meet someone at a party. You talk about:",
    category: 'social',
    answers: [
      { text: "Their interests, life, etc.", score: 10 },
      { text: "Work projects", score: 5 },
      { text: "Latest AI news", score: 3 },
      { text: "Why Rust is superior", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Sleep schedule?",
    category: 'balance',
    answers: [
      { text: "Regular 8 hours", score: 10 },
      { text: "6-7 hours, somewhat regular", score: 7 },
      { text: "What's sleep?", score: 2 },
      { text: "Sleep is for the weak", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Your IDE theme?",
    category: 'tech',
    answers: [
      { text: "Light mode (yes, really)", score: 10 },
      { text: "Dark mode, easy on eyes", score: 8 },
      { text: "Cyberpunk neon everything", score: 5 },
      { text: "Terminal only, no IDE", score: 3 },
    ],
  },
  {
    id: 10,
    question: "When debugging, you:",
    category: 'tech',
    answers: [
      { text: "Use debugger tools properly", score: 10 },
      { text: "Print/console.log everywhere", score: 7 },
      { text: "Stack Overflow frantically", score: 4 },
      { text: "Ask ChatGPT to fix it", score: 0 },
    ],
  },
];

export const maxScore = questions.reduce((sum, q) => 
  sum + Math.max(...q.answers.map(a => a.score)), 0
);

export function calculateScore(answers: number[]): number {
  let total = 0;
  questions.forEach((question, index) => {
    if (answers[index] !== undefined) {
      total += question.answers[answers[index]].score;
    }
  });
  return Math.round((total / maxScore) * 100);
}

export function getScoreStatus(score: number): string {
  if (score >= 90) return "FULLY HUMAN (Rare)";
  if (score >= 70) return "MOSTLY HUMAN";
  if (score >= 50) return "BALANCED (50/50)";
  if (score >= 30) return "MOSTLY MACHINE";
  return "DIGITAL ENTITY";
}

export function getCategoryScores(answers: number[]): Record<string, number> {
  const categories = {
    social: { total: 0, max: 0 },
    balance: { total: 0, max: 0 },
    tech: { total: 0, max: 0 },
    awareness: { total: 0, max: 0 },
  };

  questions.forEach((question, index) => {
    const category = question.category;
    const maxCategoryScore = Math.max(...question.answers.map(a => a.score));
    
    categories[category].max += maxCategoryScore;
    
    if (answers[index] !== undefined) {
      categories[category].total += question.answers[answers[index]].score;
    }
  });

  return Object.entries(categories).reduce((acc, [key, value]) => {
    acc[key] = value.max > 0 ? Math.round((value.total / value.max) * 100) : 0;
    return acc;
  }, {} as Record<string, number>);
}

export function getDynamicMessage(score: number): string {
  if (score >= 90) {
    return "You're a unicorn. You've managed to stay grounded while building the future. Keep that balance. The world needs it.";
  } else if (score >= 70) {
    return "You're doing better than most. But there's room to reclaim more of yourself. Start small. A walk. A real conversation. You'll feel it.";
  } else if (score >= 50) {
    return "You're on the edge. Half human, half machine. This is your wake-up call. You can course-correct before it's too late.";
  } else if (score >= 30) {
    return "The machine is winning. Your humanity is slipping away. But here's the thing: you can still feel this message. That means it's not too late.";
  } else {
    return "You've become what you build. But even now, something in you clicked this quiz. That spark? That's your way back. Follow it.";
  }
}
