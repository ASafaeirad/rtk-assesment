import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from './Layout';
import { Campaign } from './routes/Campaign';
import { Overview } from './routes/Overview';
import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/overview', element: <Overview /> },
      { path: '/campaign', element: <Campaign /> },
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
