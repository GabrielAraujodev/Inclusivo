export interface Activity {
  id: string;
  time: string;
  title: string;
  icon: string;
  description: string;
}

export type NewActivity = Omit<Activity, 'id'>;