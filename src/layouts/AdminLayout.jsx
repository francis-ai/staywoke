import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/components/Sidebar';
import Topbar from '../admin/components/Topbar';
import { useState } from 'react';

const AdminLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default
    }}>
      {/* Sidebar - Persistent on desktop, temporary on mobile */}
      <Sidebar 
        open={!isMobile || mobileOpen}
        onClose={() => setMobileOpen(false)}
        isMobile={isMobile}
      />
      
      {/* Main Content Area */}
      <Box sx={{ 
        flexGrow: 1,
        width: '100%',
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        // marginLeft: { md: '280px' }
      }}>
        {/* Topbar with mobile toggle button */}
        <Topbar 
          onMenuClick={handleDrawerToggle}
          drawerWidth={280}
        />
        
        {/* Page Content */}
        <Box component="main" sx={{ 
          // p: { xs: 2, sm: 3 },
          pt: { xs: '74px', sm: '74px' }, // Account for topbar height
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: theme.palette.background.paper,
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;