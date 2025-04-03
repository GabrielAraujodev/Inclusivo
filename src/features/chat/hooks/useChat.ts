import { useState } from 'react';
import type { Message, ChatState } from '../types';
import { useToast } from '@/hooks/use-toast';

const STORAGE_KEY = 'chat-messages';

export function useChat() {
  const { toast } = useToast();
  const [state, setState] = useState<ChatState>(() => ({
    messages: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    isLoading: false,
    error: null,
  }));

  const addMessage = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });

      if (!response.ok) throw new Error('Falha ao obter resposta');

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.response,
        timestamp: Date.now(),
      };

      setState(prev => {
        const newMessages = [...prev.messages, assistantMessage];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages));
        return {
          ...prev,
          messages: newMessages,
          isLoading: false,
        };
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Erro ao processar mensagem',
      }));
      toast({
        title: 'Erro',
        description: 'Não foi possível processar sua mensagem',
        variant: 'destructive',
      });
    }
  };

  const clearChat = () => {
    setState({ messages: [], isLoading: false, error: null });
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    ...state,
    addMessage,
    clearChat,
  };
}