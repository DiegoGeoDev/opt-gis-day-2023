import { StoreApi } from "zustand";

import { QuizStoreType } from "../quizStore";

import data from "../../configs/data.json";

export const createQuizSlice = (
  set: StoreApi<QuizStoreType>["setState"],
  _get: StoreApi<QuizStoreType>["getState"]
): QuizStoreType => ({
  quizzes: data.quizzes,

  updateIsDisabled: (id: string) =>
    set((state) => ({
      quizzes: state.quizzes.map((quiz) =>
        id === quiz.id ? { ...quiz, isDisabled: false } : quiz
      ),
    })),

  updateIsQuestionComplete: (id: string) =>
    set((state) => ({
      quizzes: state.quizzes.map((quiz) =>
        id === quiz.id
          ? { ...quiz, isQuestionComplete: true, value: quiz.answer }
          : quiz
      ),
    })),

  updateIsMapComplete: (id: string) =>
    set((state) => ({
      quizzes: state.quizzes.map((quiz) =>
        id === quiz.id ? { ...quiz, isMapComplete: true } : quiz
      ),
    })),

  resetProgress: () => set((_state) => ({ quizzes: data.quizzes })),
});
