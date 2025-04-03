import { Navigation } from "@/components/Navigation";
import { VisualSchedule } from "@/components/VisualSchedule";
import { Hero } from "@/features/home/components/Hero";
import { Features } from "@/features/home/components/Features";

export default function App() {
  const activities = [
    {
      time: "09:00",
      title: "Café da Manhã",
      icon: "🍳",
      description: "Hora de tomar café da manhã"
    },
    {
      time: "10:00",
      title: "Estudos",
      icon: "📚",
      description: "Momento de aprendizagem"
    },
    {
      time: "12:00",
      title: "Almoço",
      icon: "🍽️",
      description: "Hora de almoçar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Hero 
          title="Bem-vindo ao Inclusivo"
          subtitle="Uma plataforma dedicada ao suporte e desenvolvimento de pessoas com TEA"
        />
        <Features />
        <section>
          <h2 className="text-2xl font-semibold mb-6">Agenda Visual</h2>
          <VisualSchedule activities={activities} />
        </section>
      </main>
    </div>
  );
}