import { Video } from "lucide-react";
import { Card } from "@/components/ui/card";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
}

const videos: VideoItem[] = [
  {
    id: "1",
    title: "Comunicação Básica",
    description: "Aprenda técnicas básicas de comunicação",
    thumbnailUrl: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=500&q=80",
    videoUrl: "",
    category: "Comunicação"
  },
  {
    id: "2",
    title: "Interações Sociais",
    description: "Como interagir em diferentes situações",
    thumbnailUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
    videoUrl: "",
    category: "Social"
  },
  {
    id: "3",
    title: "Gerenciando Emoções",
    description: "Estratégias para lidar com emoções",
    thumbnailUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
    videoUrl: "",
    category: "Emoções"
  }
];

export function VideoSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <Video className="h-6 w-6" />
        <h2 className="text-2xl font-semibold">Vídeos Educativos</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={() => window.open(video.videoUrl, '_blank')}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-full"
                >
                  Assistir
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.description}</p>
              <span className="inline-block mt-2 text-xs bg-secondary px-2 py-1 rounded">
                {video.category}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}