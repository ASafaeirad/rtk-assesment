import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { Campaign } from './routes/Campaign';
import { Overview } from './routes/Overview';
import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/overview" />,
    errorElement: <Navigate to="/overview" />,
  },
  { path: '/overview', element: <Overview /> },
  { path: '/campaign', element: <Campaign /> },
]);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
