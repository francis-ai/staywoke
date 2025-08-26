import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Logo from '../assets/images/newLogo.svg';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{
        p: 0,
        m: 0,
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
        }
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' }
          }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          animation: 'float 4s ease-in-out infinite 1s',
        }}
      />
      
      <Box
        component="img"
        src={Logo}
        alt="StayWoke Logo"
        sx={{
          width: '100%',
          maxWidth: { xs: '280px', sm: '320px', md: '350px' },
          height: { xs: '140px', sm: '160px', md: '170px' },
          objectFit: 'contain',
          display: 'block',
          mx: 'auto',
          p: { xs: 1, sm: 2 },
          transition: 'transform 0.3s ease, filter 0.3s ease',
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
          '&:hover': {
            transform: 'scale(1.02)',
            filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))',
          },
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      
      {/* Subtle tagline */}
      {!isMobile && (
        <Box
          sx={{
            textAlign: 'center',
            mb: 2,
            mt: -2,
            opacity: 0.8,
          }}
        >
          <Box
            component="span"
            sx={{
              color: 'white',
              fontSize: '0.9rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 300,
              fontFamily: '"Segoe UI", sans-serif',
            }}
          >
            Elevating Streetwear
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;