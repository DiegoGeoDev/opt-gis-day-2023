import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import { useQuizStore } from "@/stores/quizStore";

export function Header() {
  const [quizzes, resetProgress] = useQuizStore((state) => [
    state.quizzes,
    state.resetProgress,
  ]);

  const progress = quizzes.filter((quiz) => quiz.isMapComplete).length * 20;

  function handleResetProgress() {
    resetProgress();
    window.location.reload();
  }

  return (
    <header className="px-6 py-3 flex items-center justify-between border-b">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold">OPT GIS DAY 2023</h1>
      </div>

      <div className="flex items-center gap-3">
        {progress === 100 ? (
          <Button variant={"destructive"} onClick={handleResetProgress}>
            Resetar Progresso
          </Button>
        ) : null}

        <a href="https://opt.com.br/" className="text-sm text-muted-foreground">
          Desenvolvido com ❤️ por OPT
        </a>

        <Separator orientation="vertical" className="h-6" />

        <ModeToggle />
      </div>
    </header>
  );
}
