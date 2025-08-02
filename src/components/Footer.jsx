import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../assets/images/logo.svg';
import Street from '../assets/images/street.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        px: 1,
        py: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
        borderRadius: 0,
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={Logo}
        alt="StayWoke Logo"
        sx={{
          width: { xs: 120, sm: 120 },
          height: 'auto',
        }}
      />

      {/* Street Image */}
      <Box
        component="img"
        src={Street}
        alt="Street View"
        sx={{
          width: { xs: 100, sm: 120 },
          height: 'auto',
        }}
      />
      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          color: '#000',
          opacity: 0.8,
          mt: 2,
        }}
      >
        &copy; StayWoke 2025. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
