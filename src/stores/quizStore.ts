import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { createQuizSlice } from "./slices/quizSlice";

import { QuizType } from "@/@types/quizTypes";

export type QuizStoreType = {
  quizzes: QuizType[];
  updateIsDisabled: (id: string) => void;
  updateIsQuestionComplete: (id: string) => void;
  updateIsMapComplete: (id: string) => void;
  resetProgress: () => void;
};

export const useQuizStore = create<QuizStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        ...createQuizSlice(set, get),
      }),
      {
        name: "gis-day-2023-storage",
      }
    )
  )
);
