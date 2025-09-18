import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Toolbar,
  Box,
  styled
} from '@mui/material';
import {
  Dashboard,
  School,
  People,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 280,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    borderRight: 'none',
    boxShadow: theme.shadows[16]
  }
}));

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/admin' },
  { text: 'Catalog', icon: <School />, path: '/admin/catalog' },
  { text: 'Settings', icon: <People />, path: '/admin/settings' },
];

const AdminSidebar = ({ open, onClose, isMobile }) => {

  return (
    <SidebarDrawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
    >
      <Toolbar 
        sx={{ 
          px: 3, 
          py: 4, 
          backgroundColor: '#000', 
          display: { xs: 'none', md: 'flex' }, // Hide on mobile, show on desktop
          alignItems: 'center'
        }}
      >
        {/* Logo Section */}
        <Box 
          component={Link} 
          to="/tutor/" 
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            gap: 1,
            zIndex: 10,
            mx: "auto"
          }}
        >
          <img 
            src={Logo} 
            alt="Logo" 
            style={{ height: '90px', objectFit: 'contain', mx: 'auto' }} 
          />
        </Box>
      </Toolbar>

      <Divider />

      <List sx={{ px: 2, pt: {xs: 9, md: 0} }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
            component={ Link }
            to={item.path}
            sx={{ borderRadius: 1, mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SidebarDrawer>
  );
};

export default AdminSidebar;