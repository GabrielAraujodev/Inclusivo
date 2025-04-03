import { Hero } from '@/features/home/components/Hero';
import { Features } from '@/features/home/components/Features';
import { VisualSchedule } from '@/components/VisualSchedule';
import { useSchedule } from '@/features/schedule/hooks/useSchedule';
import type { Activity } from '@/features/schedule/types';

const initialActivities: Activity[] = [
  {
    id: "1",
    time: "08:00",
    title: "Acordar",
    icon: "⏰",
    description: "Início do dia"
  },
  {
    id: "2",
    time: "09:00",
    title: "Café da Manhã",
    icon: "🍳",
    description: "Hora de tomar café da manhã"
  },
  {
    id: "3",
    time: "10:00",
    title: "Terapia",
    icon: "🎯",
    description: "Sessão de terapia"
  },
  {
    id: "4",
    time: "12:00",
    title: "Almoço",
    icon: "🍽️",
    description: "Hora de almoçar"
  },
  {
    id: "5",
    time: "15:00",
    title: "Atividades",
    icon: "🎨",
    description: "Atividades recreativas"
  }
];

export function HomePage() {
  const { activities, updateActivity, deleteActivity } = useSchedule(initialActivities);

  return (
    <>
      <Hero 
        title="Bem-vindo ao Inclusivo"
        subtitle="Uma plataforma dedicada ao suporte e desenvolvimento de pessoas com TEA"
      />
      <Features />
      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Agenda Visual</h2>
          <a 
            href="/agenda" 
            className="text-primary hover:underline flex items-center gap-2"
          >
            Ver agenda completa
          </a>
        </div>
        <VisualSchedule 
          activities={activities}
          onUpdateActivity={updateActivity}
          onDeleteActivity={deleteActivity}
        />
      </section>
    </>
  );
}