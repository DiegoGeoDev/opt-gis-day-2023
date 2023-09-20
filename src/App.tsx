import { Toaster } from "./components/ui/toaster";

import { ThemeProvider } from "./components/theme-provider";

import { Header } from "./components/header";
import { QuizForm } from "./components/quiz-fom";
import { QuizMap } from "./components/quiz-map";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6 flex gap-6">
          <QuizMap />
          <QuizForm />
        </main>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
