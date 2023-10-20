import { Check, HelpCircle } from "lucide-react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

import andyMap from "../assets/andy-map.png";
import { Skeleton } from "./ui/skeleton";

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

        <Tabs defaultValue="1">
          <TabsList className="grid w-full grid-cols-4 my-4">
            <TabsTrigger value="1">1</TabsTrigger>
            <TabsTrigger value="2">2</TabsTrigger>
            <TabsTrigger value="3">3</TabsTrigger>
            <TabsTrigger value="4">4</TabsTrigger>
          </TabsList>

          <TabsContent value="1">
            <div className="leading-relaxed text-muted-foreground text-sm mb-4">
              Nesta etapa você precisa responder corretamente uma pergunta, são
              quatro alternativas e somente uma é a correta, ao encontrar a
              correta será liberarado uma dica de um local no mapa.
            </div>
            <div className="grid gap-4 border border-emerald-500 p-2 rounded-md">
              <div className="grid gap-3  ">
                <Label>Pergunta</Label>
                <span className="text-muted-foreground">
                  Que dia será comemorado o dia do GIS (2023)?
                </span>
              </div>
              <div className="grid gap-4">
                <div className="flex justify-between">
                  <Label>Resposta</Label>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="text-emerald-500 h-5 w-5" /> Você acertou
                  </span>
                </div>
                <div>
                  <Select disabled={true} value="15">
                    <SelectTrigger className="h-auto">
                      <SelectValue placeholder="Selecione uma resposta" />
                    </SelectTrigger>
                    <SelectContent className="h-auto">
                      <SelectItem value="15">15 de Novembro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="grid gap-3">
                <div className="flex justify-between">
                  <Label>Encontre no Mapa</Label>
                </div>
                <span className="text-muted-foreground">
                  Sou uma empresa que oferece os melhores serviços de tecnologia
                  especializados em GIS. Quem sou eu?
                </span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="2">
            <div className="leading-relaxed text-muted-foreground text-sm mb-4">
              Agora você deve interpretar a dica que liberou e localizar o Andy
              no mapa, quando encontrá-lo você deve clicar nele para liberar uma
              curiosidade e o próximo desafio.
            </div>
            <div className="grid gap-4 border border-emerald-500 p-2 rounded-md">
              <img
                src={andyMap}
                alt="exemplo de localização no mapa"
                className="rounded-sm"
              />

              <div className="grid gap-3">
                <div className="flex justify-between">
                  <Label>Encontre no Mapa</Label>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="text-emerald-500 h-5 w-5" /> Você
                    encontrou
                  </span>
                </div>
                <span className="text-muted-foreground">
                  Sou uma empresa que oferece os melhores serviços de tecnologia
                  especializados em GIS. Quem sou eu?
                </span>
              </div>

              <Button className="cursor-not-allowed">Curiosidade</Button>
            </div>
          </TabsContent>
          <TabsContent value="3">
            <div className="leading-relaxed text-muted-foreground text-sm mb-4">
              A etapa de ler a curiosidade é opcional mas garanto que irá gostar
              de ler para aprender um pouco mais sobre a pergunta que respondeu
              bem como sobre o local que encontrou no mapa.
            </div>
            <div className="grid gap-4 border border-emerald-500 p-2 rounded-md">
              <Button className="cursor-not-allowed">Curiosidade</Button>
            </div>
          </TabsContent>
          <TabsContent value="4">
            <div className="leading-relaxed text-muted-foreground text-sm mb-4">
              Agora que você aprendeu como um desafio funciona você pode ir para
              o próximo desafio e repetir as etapas anteriores até completar os
              5 desafios.
            </div>
            <div className="grid gap-4 border border-emerald-500 p-2 rounded-md">
              <Tabs defaultValue="01">
                <TabsList className="grid w-full grid-cols-5 mb-4 ">
                  <TabsTrigger value="01">1</TabsTrigger>
                  <TabsTrigger value="02">2</TabsTrigger>
                  <TabsTrigger value="03" disabled>
                    3
                  </TabsTrigger>
                  <TabsTrigger value="04" disabled>
                    4
                  </TabsTrigger>
                  <TabsTrigger value="05" disabled>
                    5
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="01">
                  <Skeleton className="w-full h-72 rounded-md mt-1" />
                </TabsContent>
                <TabsContent value="02">
                  <Skeleton className="w-full h-72 rounded-md mt-1" />
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

{
}
