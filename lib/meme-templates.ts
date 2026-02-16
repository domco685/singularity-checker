export type MemeStyle = 'scorecard' | 'comic' | 'badge' | 'warning';

export interface MemeTemplate {
  style: MemeStyle;
  name: string;
  message: string;
}

export interface ScoreRange {
  min: number;
  max: number;
  messages: string[];
}

export const scoreRanges: ScoreRange[] = [
  {
    min: 90,
    max: 100,
    messages: [
      "Still human. Somehow.",
      "Congrats, you touch grass",
      "Actually goes outside occasionally",
      "Not addicted to Claude yet"
    ]
  },
  {
    min: 70,
    max: 89,
    messages: [
      "Mostly human, slightly digital",
      "70% human, 30% caffeine",
      "You're doing fine (probably)",
      "Still have a soul... barely"
    ]
  },
  {
    min: 50,
    max: 69,
    messages: [
      "50/50 human/AI at this point",
      "Schrödinger's engineer",
      "Perfectly balanced, as all things shouldn't be",
      "Can't tell if human or bot anymore"
    ]
  },
  {
    min: 30,
    max: 49,
    messages: [
      "More machine than person now",
      "Your GitHub commits judge you",
      "Humanity.exe has stopped responding",
      "Have you tried turning yourself off and on again?"
    ]
  },
  {
    min: 0,
    max: 29,
    messages: [
      "Error 404: Humanity not found",
      "You ARE the AI",
      "Congratulations on your digital ascension",
      "Beep boop. That's you now."
    ]
  }
];

export function getMessagesForScore(score: number): string[] {
  const range = scoreRanges.find(r => score >= r.min && score <= r.max);
  return range?.messages || scoreRanges[scoreRanges.length - 1].messages;
}

export function getMemesForScore(score: number, status: string): MemeTemplate[] {
  const messages = getMessagesForScore(score);
  const styles: MemeStyle[] = ['scorecard', 'comic', 'badge', 'warning'];
  
  return styles.map((style, index) => ({
    style,
    name: getStyleName(style),
    message: messages[index] || messages[0]
  }));
}

function getStyleName(style: MemeStyle): string {
  const names: Record<MemeStyle, string> = {
    scorecard: 'Score Card',
    comic: 'Two-Panel Comic',
    badge: 'Status Badge',
    warning: 'Warning Sign'
  };
  return names[style];
}

export const COLORS = {
  background: '#000000',
  blue: '#00D9FF',
  purple: '#B026FF',
  pink: '#FF0844',
  green: '#00FF41',
  text: '#E0E0E0'
};

export const CANVAS_WIDTH = 1200;
export const CANVAS_HEIGHT = 630;
