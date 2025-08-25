import React from 'react';
import { Box } from '@mui/material';
import Logo from '../assets/images/newHeader.svg';

const Header = () => {
  return (
    <Box sx={{
      backgroundColor: '#000',
      p: 0,
      m:0
    }}>
      <Box
        component="img"
        src={Logo}
        alt="StayWoke Logo"
        sx={{
          width: '100%',
          height: { xs: 170, sm: 170, md: 170 },
          objectFit: 'contain',
          display: 'block',
          mx: 'auto',
          p: 0,
        }}
      />
    </Box>
    
  );
};

export default Header;