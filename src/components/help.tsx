import { HelpCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Help() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <HelpCircle className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Help</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto ">
        <SheetHeader>
          <SheetTitle className="mt-4">Como Jogar?</SheetTitle>
          <SheetDescription className="leading-relaxed">
            Neste jogo você precisa completar 5 desafios, os desafios são
            concluídos conforme as etapas que são explicadas abaixo 👇
          </SheetDescription>
        </SheetHeader>

        <Tabs
          defaultValue="1"
          className="leading-relaxed text-muted-foreground"
        >
          <TabsList className="grid w-full grid-cols-4 my-4">
            <TabsTrigger value="1">1</TabsTrigger>
            <TabsTrigger value="2">2</TabsTrigger>
            <TabsTrigger value="3">3</TabsTrigger>
            <TabsTrigger value="4">4</TabsTrigger>
          </TabsList>

          <TabsContent value="1">
            Nesta etapa você precisa responder corretamente uma pergunta, são
            quatro alternativas e somente uma é a correta, ao encontrar a
            correta será liberarado uma dica de um local no mapa.
          </TabsContent>
          <TabsContent value="2">
            Agora você deve interpretar a dica que liberou e localizar o local
            no mapa, quando encontrar você deve clicar no local para liberar uma
            curiosidade e também o próximo desafio.
          </TabsContent>
          <TabsContent value="3">
            Esta etapa é opcional mas garanto que irá gostar de ler a
            curiosidade para aprender um pouco mais sobre a pergunta que
            respondeu bem como sobre o local que encontrou no mapa.
          </TabsContent>
          <TabsContent value="4">
            Agora que você aprendeu como um desafio funciona você pode ir para o
            próximo desafio e repetir as etapas anteriores até terminar os 5
            desafios.
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
