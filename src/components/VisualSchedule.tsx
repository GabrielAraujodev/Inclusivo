import { cn } from "@/lib/utils";
import { ActivityCard } from "@/features/schedule/components/ActivityCard";
import type { Activity, NewActivity } from "@/features/schedule/types";

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