export interface QuizType {
  id: string;
  tab: string;
  isDisabled: boolean;
  isQuestionComplete: boolean;
  isMapComplete: boolean;
  nextQuiz: string | null;
  question: string;
  value: string | null;
  answer: string;
  answers: Answer[];
  tip: string;
  poi: number[];
  dialog: Dialog;
}

export interface Answer {
  id: string;
  value: string;
  text: string;
}

export interface Dialog {
  title: string;
  text: string[];
}
