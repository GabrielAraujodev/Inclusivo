import { Card } from "@/components/ui/card";
import { ActivityActions } from "./ActivityActions";
import type { Activity, NewActivity } from "../types";

interface ActivityCardProps {
  activity: Activity;
  onUpdate?: (id: string, activity: NewActivity) => void;
  onDelete?: (id: string) => void;
}

export function ActivityCard({ activity, onUpdate, onDelete }: ActivityCardProps) {
  const hasActions = onUpdate || onDelete;

  return (
    <Card className="p-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-16 text-center">
          <div className="text-lg font-semibold">{activity.time}</div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{activity.title}</h3>
          <p className="text-muted-foreground">{activity.description}</p>
        </div>
        <div className="flex-shrink-0 text-4xl" role="img" aria-label={activity.title}>
          {activity.icon}
        </div>
        {hasActions && (
          <ActivityActions
            activity={activity}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        )}
      </div>
    </Card>
  );
}