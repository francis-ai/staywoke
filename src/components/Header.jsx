import React from 'react';
import { Box } from '@mui/material';
import Logo from '../assets/images/logo2.svg';
import Street from '../assets/images/street.png';

const Header = () => {
  return (
    <>
    <Box
      component="header"
      sx={{
        position: 'relative',
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        overflow: 'hidden',
        p: 0
      }}
    >
      {/* Semi-circle */}
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1 / 1',
          bgcolor: '#f2f4f9ff',
          borderRadius: '50%',
          position: 'absolute',
          top: '-90%', 
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
          m:0
        }}
      />

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
            width: 260,
            height: 160,
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
    <Box
      component="img"
      src={Street}
      alt="StayWoke street"
      sx={{
        width: 210,
        height: 210,
        objectFit: 'contain',
        position: 'absolute',
        justifyContent: 'center',
        top: '10%', 
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
      }}
    />
    </>
  );
};

export default Header;
