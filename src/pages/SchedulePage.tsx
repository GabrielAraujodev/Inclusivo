import { useSchedule } from "@/features/schedule/hooks/useSchedule";
import { ScheduleHeader } from "@/features/schedule/components/ScheduleHeader";
import { VisualSchedule } from "@/components/VisualSchedule";
import { useToast } from "@/hooks/use-toast";
import type { Activity, NewActivity } from "@/features/schedule/types";

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

export function SchedulePage() {
  const { toast } = useToast();
  const { activities, addActivity, updateActivity, deleteActivity } = useSchedule(initialActivities);

  const handleAddActivity = (activity: NewActivity) => {
    addActivity(activity);
    toast({
      title: "Atividade adicionada",
      description: "Nova atividade foi adicionada à agenda"
    });
  };

  const handleUpdateActivity = (id: string, activity: NewActivity) => {
    updateActivity(id, activity);
    toast({
      title: "Atividade atualizada",
      description: "As alterações foram salvas com sucesso"
    });
  };

  const handleDeleteActivity = (id: string) => {
    deleteActivity(id);
    toast({
      title: "Atividade removida",
      description: "A atividade foi removida da agenda"
    });
  };

  return (
    <div className="space-y-6">
      <ScheduleHeader onAddActivity={handleAddActivity} />
      <VisualSchedule
        activities={activities}
        onUpdateActivity={handleUpdateActivity}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  );
}