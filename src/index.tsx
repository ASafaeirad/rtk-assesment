import './index.css';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
