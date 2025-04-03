import { useState } from 'react';
import { Heart, ThumbsUp, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Emotion {
  id: string;
  name: string;
  icon: string;
  description: string;
  physicalSigns: string[];
  behaviors: string[];
  managementTips: string[];
  triggers: string[];
}

const emotions: Emotion[] = [
  {
    id: "1",
    name: "Alegria",
    icon: "😊",
    description: "Sentimento de felicidade e contentamento",
    physicalSigns: [
      "Sorriso",
      "Olhos brilhantes",
      "Postura relaxada",
      "Movimentos mais animados"
    ],
    behaviors: [
      "Risadas",
      "Vontade de compartilhar",
      "Mais energia",
      "Disposição para atividades"
    ],
    managementTips: [
      "Aproveite o momento",
      "Compartilhe com outros",
      "Registre para lembrar depois",
      "Use como motivação"
    ],
    triggers: [
      "Conquistas pessoais",
      "Momentos com amigos/família",
      "Atividades favoritas",
      "Elogios recebidos"
    ]
  },
  {
    id: "2",
    name: "Ansiedade",
    icon: "😰",
    description: "Sensação de preocupação ou nervosismo",
    physicalSigns: [
      "Coração acelerado",
      "Suor nas mãos",
      "Respiração rápida",
      "Tensão muscular"
    ],
    behaviors: [
      "Agitação",
      "Dificuldade de concentração",
      "Fala acelerada",
      "Necessidade de movimento"
    ],
    managementTips: [
      "Respire profundamente",
      "Use técnicas de relaxamento",
      "Peça ajuda se necessário",
      "Identifique o que está causando"
    ],
    triggers: [
      "Situações novas",
      "Mudanças na rotina",
      "Eventos sociais",
      "Prazos e cobranças"
    ]
  },
  {
    id: "3",
    name: "Frustração",
    icon: "😤",
    description: "Sentimento quando algo não sai como esperado",
    physicalSigns: [
      "Tensão no corpo",
      "Rosto fechado",
      "Punhos cerrados",
      "Respiração pesada"
    ],
    behaviors: [
      "Irritabilidade",
      "Vontade de desistir",
      "Reclamações",
      "Afastamento"
    ],
    managementTips: [
      "Faça uma pausa",
      "Converse sobre o problema",
      "Busque alternativas",
      "Aceite que erros acontecem"
    ],
    triggers: [
      "Dificuldades em tarefas",
      "Expectativas não atendidas",
      "Mal-entendidos",
      "Limitações pessoais"
    ]
  }
];

export function EmotionsSection() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-2">
        <Heart className="h-6 w-6" />
        <h2 className="text-2xl font-semibold">Emoções</h2>
      </div>

      {/* Cartões de Emoções */}
      <div className="grid md:grid-cols-3 gap-4">
        {emotions.map((emotion) => (
          <Dialog key={emotion.id}>
            <DialogTrigger asChild>
              <Card className="p-6 hover:bg-accent cursor-pointer transition-colors text-center">
                <div className="text-4xl mb-4">{emotion.icon}</div>
                <h3 className="text-xl font-medium mb-2">{emotion.name}</h3>
                <p className="text-sm text-muted-foreground">{emotion.description}</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className="text-2xl">{emotion.icon}</span>
                  {emotion.name}
                </DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      Sinais Físicos
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {emotion.physicalSigns.map((sign, index) => (
                        <li key={index}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Comportamentos</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {emotion.behaviors.map((behavior, index) => (
                        <li key={index}>{behavior}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      Dicas de Gerenciamento
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {emotion.managementTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Gatilhos Comuns</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {emotion.triggers.map((trigger, index) => (
                        <li key={index}>{trigger}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Dicas de Gerenciamento Emocional */}
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Dicas Gerais de Gerenciamento Emocional</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h4 className="font-medium mb-2">Reconhecimento</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Observe seus sentimentos</li>
              <li>Identifique mudanças no corpo</li>
              <li>Perceba seus pensamentos</li>
              <li>Aceite que todas as emoções são normais</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="font-medium mb-2">Estratégias de Regulação</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Pratique respiração profunda</li>
              <li>Use seu espaço seguro quando necessário</li>
              <li>Converse com pessoas de confiança</li>
              <li>Faça atividades que te acalmam</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}