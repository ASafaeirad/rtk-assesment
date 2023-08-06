import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/overview',
    element: <div>Overview</div>,
  },
  {
    path: '/campaign',
    element: <div>Campaign</div>,
  },
  {
    path: '/*',
    element: <Navigate to="/overview" />,
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
