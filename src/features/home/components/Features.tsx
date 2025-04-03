import { Brain, Users, HeartHandshake } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  const features = [
    {
      Icon: Brain,
      title: "Recursos Adaptados",
      description: "Interface adaptável com modo de cores suaves e pictogramas para melhor compreensão"
    },
    {
      Icon: Users,
      title: "Habilidades Sociais",
      description: "Guias e exercícios para desenvolvimento de habilidades sociais"
    },
    {
      Icon: HeartHandshake,
      title: "Suporte Familiar",
      description: "Central de apoio com recursos e orientações para famílias"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}