import { Calendar, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityForm } from "./ActivityForm";
import type { NewActivity } from "../types";

interface ScheduleHeaderProps {
  onAddActivity: (activity: NewActivity) => void;
}

export function ScheduleHeader({ onAddActivity }: ScheduleHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Agenda Visual</h1>
        </div>
        <ActivityForm
          onSubmit={onAddActivity}
          trigger={
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nova Atividade
            </Button>
          }
        />
      </div>
      <p className="text-muted-foreground">
        Organize sua rotina diária de forma visual e intuitiva
      </p>
    </div>
  );
}