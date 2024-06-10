import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const drawerWidth = 240;

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <React.Fragment>
      <AppBar style={{ backgroundColor: "rgba(255, 71, 76, 0.7)", backdropFilter: 'blur(10px)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack direction="row" spacing={2}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                edge="start"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/Cards"
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                RESTO4U
              </Typography>&nbsp;
            </Stack>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="https://github.com/abhiraj6/img/blob/main/RESTO%20(1).jpg?raw=true" sx={{ width: 50, height: 45 }} />
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 0 }}>
              <Button color="inherit" component={Link} to="/add">logout</Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton color="inherit" component={Link} to="/cart">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/DataView">
              <ListItemText primary="Fooditems" />
            </ListItem>
            <ListItem button component={Link} to="/delivery">
              <ListItemText primary="Delivery Status" />
            </ListItem>
            <ListItem button component={Link} to="/TableBooking">
              <ListItemText primary="Table Reservation" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbar2;
