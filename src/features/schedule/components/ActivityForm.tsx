import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Activity, NewActivity } from '../types';

interface ActivityFormProps {
  activity?: Activity;
  onSubmit: (activity: NewActivity) => void;
  onCancel?: () => void;
}

export function ActivityForm({ activity, onSubmit, onCancel }: ActivityFormProps) {
  const [formData, setFormData] = useState<NewActivity>({
    time: activity?.time || '',
    title: activity?.title || '',
    icon: activity?.icon || '',
    description: activity?.description || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="time">Horário</Label>
        <Input
          id="time"
          type="time"
          value={formData.time}
          onChange={e => setFormData(prev => ({ ...prev, time: e.target.value }))}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="icon">Emoji</Label>
        <Input
          id="icon"
          value={formData.icon}
          onChange={e => setFormData(prev => ({ ...prev, icon: e.target.value }))}
          required
          placeholder="Ex: 📚"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
          required
        />
      </div>

      <div className="flex gap-2 justify-end">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        )}
        <Button type="submit">
          {activity ? 'Atualizar' : 'Adicionar'} Atividade
        </Button>
      </div>
    </form>
  );
}