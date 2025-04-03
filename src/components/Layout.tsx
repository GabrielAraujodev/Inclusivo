import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export function Layout() {
  const { toast } = useToast();

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      
      toast({
        title: "Instalar Aplicativo",
        description: "Adicione o Inclusivo à sua tela inicial para acesso rápido",
        action: {
          label: "Instalar",
          onClick: () => {
            // Show the install prompt
            (e as any).prompt();
            // Wait for the user to respond to the prompt
            (e as any).userChoice.then((choiceResult: { outcome: string }) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
              }
            });
          }
        }
      });
    });

    // Handle offline/online status
    const handleStatusChange = () => {
      toast({
        title: navigator.onLine ? "Online" : "Offline",
        description: navigator.onLine 
          ? "Conexão restaurada" 
          : "Você está offline. Algumas funcionalidades podem estar limitadas.",
        variant: navigator.onLine ? "default" : "destructive"
      });
    };

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Outlet />
      </main>
    </div>
  );
}