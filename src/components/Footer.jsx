import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../assets/images/staywoke.svg';
import Street from '../assets/images/street.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        px: 1,
        py: 2,
        borderTop: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        backdropFilter: 'blur(30px)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
        borderRadius: '0',
        boxShadow: '0 -6px 10px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Images in a row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        {/* Logo in glass box */}
        <Box>
          <Box
            component="img"
            src={Logo}
            alt="StayWoke Logo"
            sx={{
              width: 160,
              height: 'auto',
            }}
          />
        </Box>

        {/* Street Image in glass box */}
        <Box>
          <Box
            component="img"
            src={Street}
            alt="Street View"
            sx={{
              width: 120,
              height: 'auto',
            }}
          />
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          color: '#000',
          opacity: 0.85,
          fontSize: '0.85rem',
        }}
      >
        &copy; stAywOKe.szn 2025. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
