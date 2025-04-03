import { Users } from "lucide-react";
import { SkillsModule } from "@/features/skills/components/SkillsModule";

export function SkillsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Habilidades Sociais</h1>
      </div>
      <p className="text-muted-foreground">
        Desenvolva habilidades importantes para o dia a dia
      </p>
      <SkillsModule />
    </div>
  );
}