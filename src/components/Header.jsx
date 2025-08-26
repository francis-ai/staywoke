import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../assets/images/logo3.svg';

// Styled components
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  background:  '#FFFF',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    opacity: 0.9,
  }
}));

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {/* Logo */}
        <Box
          component="img"
          src={Logo}
          alt="StayWoke Logo"
          sx={{
            width: { xs: '360px', sm: '360px', md: '360px' },
            height: { xs: '100px', sm: '100px', md: '100px' },
            objectFit: 'contain',
          }}
        />
        
        {/* Brand Name */}
        {/* <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: 'sans-serif',
            color: '#000',
            fontWeight: 700,
            letterSpacing: '1px',
            fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem' },
          }}
        >
          stAywOKe
        </Typography> */}
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;