import { Check } from "lucide-react";

import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { useQuizStore } from "../stores/quizStore";

import { QuizType } from "@/@types/quizTypes";

export function QuizForm() {
  const [quizzes, updateIsQuestionComplete] = useQuizStore((state) => [
    state.quizzes,
    state.updateIsQuestionComplete,
  ]);

  const { toast } = useToast();

  const progress = quizzes.filter((quiz) => quiz.isMapComplete).length * 20;

  const handleIsComplete = (value: string, quiz: QuizType) => {
    const { id, answer } = quiz;

    if (value !== answer) {
      toast({
        description:
          "Infelizmente esta não é a resposta correta, tente novamente 😜",
      });

      return;
    }

    toast({
      description: "Parabéns você acertou 🥳",
    });

    updateIsQuestionComplete(id);
  };

  return (
    <aside className="w-80 flex flex-col gap-4">
      <Progress
        value={progress}
        data-isComplete={progress === 100}
        className="[&>div]:data-[isComplete=true]:bg-emerald-500"
      />

      <Tabs defaultValue={quizzes[0].tab}>
        <TabsList className="w-full flex justify-between mb-4">
          {quizzes.map((quiz) => (
            <TabsTrigger
              key={quiz.id}
              value={quiz.tab}
              disabled={quiz.isDisabled}
            >
              {quiz.tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {quizzes.map((quiz) => (
          <TabsContent key={quiz.id} value={quiz.tab}>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label>Pergunta</Label>
                <span className="text-muted-foreground">{quiz.question}</span>
              </div>

              <div className="grid gap-4">
                <div className="flex justify-between">
                  <Label>Resposta</Label>
                  {quiz.isQuestionComplete ? (
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="text-emerald-500 h-5 w-5" /> Você
                      acertou
                    </span>
                  ) : null}
                </div>
                <div>
                  <Select
                    onValueChange={(value) => handleIsComplete(value, quiz)}
                    disabled={quiz.isQuestionComplete}
                    value={quiz.value ?? undefined}
                  >
                    <SelectTrigger className="h-auto">
                      <SelectValue placeholder="Selecione uma resposta" />
                    </SelectTrigger>
                    <SelectContent className="h-auto">
                      {quiz.answers.map((answer) => (
                        <SelectItem key={answer.id} value={answer.value}>
                          {answer.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="grid gap-3">
                <div className="flex justify-between">
                  <Label>Encontre no Mapa</Label>
                  {quiz.isMapComplete ? (
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="text-emerald-500 h-5 w-5" /> Você
                      encontrou
                    </span>
                  ) : null}
                </div>
                {quiz.isQuestionComplete ? (
                  <span className="text-muted-foreground">{quiz.tip}</span>
                ) : (
                  <Skeleton className="w-full h-6 rounded-full mt-1" />
                )}
              </div>

              {quiz.isMapComplete ? (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>Curiosidade</Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-auto">
                    <SheetHeader>
                      <SheetTitle className="mt-4">
                        {quiz.dialog.title}
                      </SheetTitle>
                      <SheetDescription className="grid gap-4 leading-relaxed">
                        {quiz.dialog.text.map((txt, index) => (
                          <span key={index}>{txt}</span>
                        ))}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              ) : (
                <Skeleton className="w-full h-9 rounded-full mt-1" />
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </aside>
  );
}
