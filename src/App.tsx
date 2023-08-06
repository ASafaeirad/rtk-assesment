import { CssBaseline } from '@mui/material';
import { Fragment } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

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
    <Fragment>
      <CssBaseline />
      <RouterProvider router={router} />
    </Fragment>
  );
};
