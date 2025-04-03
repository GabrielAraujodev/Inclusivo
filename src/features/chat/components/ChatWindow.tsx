import { useRef, useEffect } from 'react';
import { Eraser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useChat } from '../hooks/useChat';

export function ChatWindow() {
  const { messages, isLoading, addMessage, clearChat } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px] border rounded-lg bg-background">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Assistente Virtual</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={clearChat}
          disabled={messages.length === 0}
        >
          <Eraser className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        {messages.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Olá! Como posso ajudar você hoje?
          </p>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
        <div ref={bottomRef} />
      </ScrollArea>

      <div className="p-4 border-t">
        <ChatInput onSend={addMessage} disabled={isLoading} />
      </div>
    </div>
  );
}