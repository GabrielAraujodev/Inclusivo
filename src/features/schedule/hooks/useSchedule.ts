import { useState, useEffect } from 'react';
import type { Activity, NewActivity } from '../types';

const STORAGE_KEY = 'schedule-activities';

export function useSchedule(initialActivities: Activity[] = []) {
  const [activities, setActivities] = useState<Activity[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialActivities;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
  }, [activities]);

  const addActivity = (newActivity: NewActivity) => {
    const activity: Activity = {
      ...newActivity,
      id: crypto.randomUUID(),
    };
    setActivities(prev => 
      [...prev, activity].sort((a, b) => a.time.localeCompare(b.time))
    );
  };

  const updateActivity = (id: string, updatedActivity: NewActivity) => {
    setActivities(prev =>
      prev.map(activity =>
        activity.id === id
          ? { ...updatedActivity, id }
          : activity
      ).sort((a, b) => a.time.localeCompare(b.time))
    );
  };

  const deleteActivity = (id: string) => {
    setActivities(prev => prev.filter(activity => activity.id !== id));
  };

  return {
    activities,
    addActivity,
    updateActivity,
    deleteActivity,
  };
}