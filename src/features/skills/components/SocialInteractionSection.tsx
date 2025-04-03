import { Users, UserPlus, MessagesSquare, Footprints } from "lucide-react";
import { Card } from "@/components/ui/card";
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

interface SocialScenario {
  title: string;
  steps: string[];
  tips: string[];
  examples: string[];
}

const socialScenarios: SocialScenario[] = [
  {
    title: "Iniciando uma Conversa",
    steps: [
      "Observe se a pessoa parece disponível",
      "Faça contato visual breve",
      "Use um cumprimento adequado",
      "Faça uma pergunta simples"
    ],
    tips: [
      "Mantenha uma distância confortável",
      "Use um tom de voz amigável",
      "Sorria naturalmente"
    ],
    examples: [
      "Oi! Como foi seu fim de semana?",
      "Você gosta desse jogo também?",
      "Legal sua camiseta! Você gosta de super-heróis?"
    ]
  },
  {
    title: "Em Grupo",
    steps: [
      "Observe a dinâmica do grupo",
      "Aguarde uma pausa na conversa",
      "Faça um comentário relevante",
      "Participe quando se sentir confortável"
    ],
    tips: [
      "Não interrompa quem está falando",
      "Demonstre interesse ouvindo atentamente",
      "Contribua com a conversa quando possível"
    ],
    examples: [
      "Isso me lembra quando...",
      "Posso compartilhar uma experiência parecida?",
      "O que vocês acham sobre...?"
    ]
  },
  {
    title: "Mantendo o Diálogo",
    steps: [
      "Faça perguntas abertas",
      "Compartilhe experiências relacionadas",
      "Demonstre interesse",
      "Respeite pausas naturais"
    ],
    tips: [
      "Evite mudar de assunto bruscamente",
      "Use expressões de compreensão",
      "Mantenha um equilíbrio entre falar e ouvir"
    ],
    examples: [
      "Me conte mais sobre isso...",
      "Que interessante! E depois, o que aconteceu?",
      "Eu também gosto muito de..."
    ]
  }
];

interface SocialActivity {
  id: string;
  title: string;
  description: string;
  participants: string[];
  instructions: string[];
}

const activities: SocialActivity[] = [
  {
    id: "1",
    title: "Jogo de Papéis",
    description: "Pratique diferentes situações sociais através de interpretação",
    participants: ["2-4 pessoas", "Supervisor ou terapeuta"],
    instructions: [
      "Escolha uma situação do dia a dia",
      "Defina os papéis de cada participante",
      "Pratique a interação",
      "Receba feedback construtivo",
      "Tente diferentes abordagens"
    ]
  },
  {
    id: "2",
    title: "Clube de Interesses",
    description: "Encontre pessoas com interesses em comum",
    participants: ["Grupo pequeno", "Mediador"],
    instructions: [
      "Identifique um interesse em comum",
      "Prepare alguns tópicos para discussão",
      "Compartilhe experiências",
      "Faça perguntas aos outros",
      "Proponha atividades relacionadas"
    ]
  },
  {
    id: "3",
    title: "Prática de Conversação",
    description: "Exercícios estruturados para melhorar habilidades de diálogo",
    participants: ["2 pessoas", "Supervisor opcional"],
    instructions: [
      "Escolha um tema de interesse mútuo",
      "Pratique fazer perguntas abertas",
      "Mantenha contato visual apropriado",
      "Use linguagem corporal adequada",
      "Pratique respostas empáticas"
    ]
  }
];

export function SocialInteractionSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-2">
        <Users className="h-6 w-6" />
        <h2 className="text-2xl font-semibold">Interação Social</h2>
      </div>

      {/* Guia Passo a Passo */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Footprints className="h-5 w-5" />
          <h3 className="text-xl font-medium">Guia de Interações</h3>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {socialScenarios.map((scenario, index) => (
            <AccordionItem key={index} value={`scenario-${index}`}>
              <AccordionTrigger className="text-lg">{scenario.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-4">
                  <div>
                    <h4 className="font-medium mb-2">Passos:</h4>
                    <ol className="list-decimal list-inside space-y-2">
                      {scenario.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Dicas:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {scenario.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Exemplos:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {scenario.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Atividades Práticas */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          <h3 className="text-xl font-medium">Atividades Práticas</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {activities.map((activity) => (
            <Dialog key={activity.id}>
              <DialogTrigger asChild>
                <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
                  <h4 className="font-medium mb-2">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{activity.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{activity.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Participantes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {activity.participants.map((participant, index) => (
                        <li key={index}>{participant}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Instruções:</h4>
                    <ol className="list-decimal list-inside space-y-2">
                      {activity.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {/* Cenários do Dia a Dia */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MessagesSquare className="h-5 w-5" />
          <h3 className="text-xl font-medium">Cenários do Dia a Dia</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h4 className="font-medium mb-2">Na Escola/Trabalho</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Cumprimentar colegas ao chegar</li>
              <li>Participar de trabalhos em grupo</li>
              <li>Fazer perguntas quando necessário</li>
              <li>Interagir durante os intervalos</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="font-medium mb-2">Em Eventos Sociais</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Encontrar pessoas com interesses comuns</li>
              <li>Participar de atividades em grupo</li>
              <li>Respeitar limites pessoais</li>
              <li>Saber quando fazer pausas</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}