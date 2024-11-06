export type Question = {
  question: string;
  answer: boolean;
};

export type Phase = {
  phaseNumber: number;
  phaseTitle: string;
  questions: Question[];
};

export type Player = {
  currentQuestionIndex: any;
  name: string;
  score: number;
  totalScore: number;
  currentPhase: number;
  answeredQuestions: string[];
  finished: boolean;
};
