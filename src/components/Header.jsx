import React from 'react';
import { Box } from '@mui/material';
import Logo from '../assets/images/logo.svg';
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
      }}
    >
      {/* Semi-circle */}
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1 / 1',
          bgcolor: '#0B1D51',
          borderRadius: '50%',
          position: 'absolute',
          top: '-95%', 
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
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
            height: 180,
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
        width: 200,
        height: 200,
        objectFit: 'contain',
        position: 'absolute',
        justifyContent: 'center',
        top: '13%', 
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
      }}
    />
    </>
  );
};

export default Header;
