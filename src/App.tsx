import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from './Layout';
import { CampaignPage } from './routes/Campaign';
import { CreateCampaignPage } from './routes/CreateCampaign';
import { overLoader, OverviewPage } from './routes/Overview';
import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/overview', element: <OverviewPage />, loader: overLoader },
      { path: '/campaigns', element: <CampaignPage /> },
      { path: '/campaigns/new', element: <CreateCampaignPage /> },
    ],
    errorElement: <Navigate to="/overview" />,
  },
]);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
