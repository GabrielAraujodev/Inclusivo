import { useSchedule } from "../hooks/useSchedule";
import { ScheduleHeader } from "./ScheduleHeader";
import { VisualSchedule } from "./VisualSchedule";
import { useToast } from "@/hooks/use-toast";

export function SchedulePage() {
  const { toast } = useToast();
  const { activities, addActivity, updateActivity, deleteActivity } = useSchedule([]);

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