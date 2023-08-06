import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from './Layout';
import { CampaignPage } from './routes/Campaign';
import { OverviewPage } from './routes/Overview';
import { store } from './services';
import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'overview', element: <OverviewPage /> },
      { path: 'campaigns', element: <CampaignPage /> },
      { path: '*', element: <Navigate to="/overview" /> },
    ],
    errorElement: <Navigate to="/overview" />,
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};
