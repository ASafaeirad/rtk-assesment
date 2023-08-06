import { not } from '@fullstacksjs/toolbox';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { label: 'Overview', to: 'overview' },
  { label: 'Campaigns', to: 'campaigns' },
  { label: 'Create', to: 'campaigns/new' },
];

const Header = ({ onMenuButtonClick }: { onMenuButtonClick: VoidFunction }) => {
  return (
    <AppBar component="nav" color="default">
      <Toolbar>
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuButtonClick}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Adjoe Frontend Test
          </Typography>
          <Stack direction="row" spacing={2}>
            {navItems.map(item => (
              <Link component={RouterLink} to={item.to} key={item.label}>
                {item.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export const NavigationDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: VoidFunction;
}) => {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          'display': { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Box onClick={onClose} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Adjoe Frontend Test
          </Typography>
          <Divider />
          <List>
            {navItems.map(item => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(not);
  };

  return (
    <>
      <Header onMenuButtonClick={handleDrawerToggle} />
      <NavigationDrawer onClose={handleDrawerToggle} open={mobileOpen} />
    </>
  );
};
