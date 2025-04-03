import { MessageSquare, BookOpen, Lightbulb, PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PracticalPhrase {
  situation: string;
  phrases: string[];
  tips: string[];
}

const practicalPhrases: PracticalPhrase[] = [
  {
    situation: "Pedindo Ajuda",
    phrases: [
      "Você pode me ajudar, por favor?",
      "Preciso de ajuda com...",
      "Não entendi, pode explicar?"
    ],
    tips: [
      "Use um tom de voz claro",
      "Mantenha contato visual se possível",
      "Seja específico sobre o que precisa"
    ]
  },
  {
    situation: "Expressando Necessidades",
    phrases: [
      "Estou com fome",
      "Preciso de uma pausa",
      "Não estou me sentindo bem"
    ],
    tips: [
      "Comunique assim que sentir a necessidade",
      "Use gestos para reforçar a mensagem",
      "Seja direto e claro"
    ]
  },
  {
    situation: "Em Sala de Aula",
    phrases: [
      "Posso fazer uma pergunta?",
      "Não entendi essa parte",
      "Preciso de mais tempo"
    ],
    tips: [
      "Levante a mão antes de falar",
      "Aguarde sua vez",
      "Anote suas dúvidas"
    ]
  }
];

interface Exercise {
  id: string;
  title: string;
  description: string;
  steps: string[];
}

const exercises: Exercise[] = [
  {
    id: "1",
    title: "Prática de Pedidos",
    description: "Exercício para treinar como fazer pedidos de forma clara e educada",
    steps: [
      "Pense no que você precisa",
      "Escolha as palavras adequadas",
      "Use 'por favor' e 'obrigado(a)'",
      "Pratique com alguém de confiança"
    ]
  },
  {
    id: "2",
    title: "Expressando Emoções",
    description: "Aprenda a comunicar como está se sentindo",
    steps: [
      "Identifique a emoção",
      "Use palavras simples e diretas",
      "Explique o motivo se possível",
      "Peça ajuda se necessário"
    ]
  },
  {
    id: "3",
    title: "Conversação Básica",
    description: "Pratique diálogos simples do dia a dia",
    steps: [
      "Comece com cumprimentos",
      "Faça perguntas simples",
      "Responda de forma clara",
      "Agradeça ao final"
    ]
  }
];

export function CommunicationSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-6 w-6" />
        <h2 className="text-2xl font-semibold">Comunicação</h2>
      </div>

      {/* Frases Práticas */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <h3 className="text-xl font-medium">Frases Práticas</h3>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {practicalPhrases.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg">{item.situation}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-4">
                  <div>
                    <h4 className="font-medium mb-2">Frases Úteis:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {item.phrases.map((phrase, i) => (
                        <li key={i}>{phrase}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Dicas:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {item.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Exercícios Práticos */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <PlayCircle className="h-5 w-5" />
          <h3 className="text-xl font-medium">Exercícios Práticos</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <Dialog key={exercise.id}>
              <DialogTrigger asChild>
                <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
                  <h4 className="font-medium mb-2">{exercise.title}</h4>
                  <p className="text-sm text-muted-foreground">{exercise.description}</p>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{exercise.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{exercise.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Passos:</h4>
                    <ol className="list-decimal list-inside space-y-2">
                      {exercise.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {/* Dicas de Aplicação */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-xl font-medium">Dicas de Aplicação</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h4 className="font-medium mb-2">Prática Diária</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Estabeleça uma rotina de prática</li>
              <li>Comece com situações familiares</li>
              <li>Aumente gradualmente a complexidade</li>
              <li>Celebre pequenos progressos</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="font-medium mb-2">Ambiente Favorável</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Escolha momentos calmos para praticar</li>
              <li>Use apoios visuais quando necessário</li>
              <li>Mantenha um ambiente acolhedor</li>
              <li>Peça feedback de pessoas próximas</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}