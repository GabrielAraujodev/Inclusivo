import { cn } from "@/lib/utils";
import { ActivityCard } from "./ActivityCard";
import type { Activity, NewActivity } from "../types";

interface VisualScheduleProps {
  activities: Activity[];
  onUpdateActivity?: (id: string, activity: NewActivity) => void;
  onDeleteActivity?: (id: string) => void;
  className?: string;
}

export function VisualSchedule({
  activities,
  onUpdateActivity,
  onDeleteActivity,
  className,
}: VisualScheduleProps) {
  if (activities.length === 0) {
    return (
      <div className="text-center p-8 border rounded-lg bg-muted/50">
        <p className="text-muted-foreground">
          Nenhuma atividade cadastrada. Clique em "Nova Atividade" para começar.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-4", className)}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onUpdate={onUpdateActivity}
          onDelete={onDeleteActivity}
        />
      ))}
    </div>
  );
}