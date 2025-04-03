import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { SchedulePage } from '@/pages/SchedulePage';
import { SkillsPage } from '@/pages/SkillsPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/agenda', element: <SchedulePage /> },
      { path: '/habilidades', element: <SkillsPage /> }
    ],
  },
]);