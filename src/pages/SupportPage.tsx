import { HeartHandshake } from "lucide-react";
import { ChatWindow } from "@/features/chat/components/ChatWindow";

export function SupportPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <HeartHandshake className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Suporte</h1>
      </div>
      <p className="text-muted-foreground">
        Converse com nosso assistente virtual para obter ajuda
      </p>
      <ChatWindow />
    </div>
  );
}