import React from 'react';
import { Box } from '@mui/material';
import Logo from '../assets/images/logo.svg';
import LogoText from '../assets/images/logo3.svg';

const Header = () => {
  return (
    <>
    <Box
      component="header"
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        pt:5
      }}
    >
      {/* Logo inside */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          mt: '0px', 
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="StayWoke Logo"
          sx={{
            width: 150,
            height: 150,
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
    <Box
      sx={{
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        position: 'absolute',
        top: '17%',
        left: 0
      }}
    >
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          p: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 7,
          mx: 'auto',
          height: 60,
          width: 200,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1    
        }}
      >
        <Box 
          component="img"
          src={LogoText}
          alt="StayWoke Logo"
          sx={{
            p: 0,
            width: 195,
            height: 'auto',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        />
      </Box>
      </Box>
    </>
  );
};

export default Header;
