import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';

import { Nav } from './components/Nav';

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Nav />
      <Box sx={{ width: '100%' }} component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
