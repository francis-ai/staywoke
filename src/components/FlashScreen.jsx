// src/components/FlashScreen.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, LinearProgress, keyframes, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled components
const FlashScreenContainer = styled(Box)(({ theme, visible }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  background: `linear-gradient(-45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  backgroundSize: '400% 400%',
  animation: `${gradientBackground} 15s ease infinite, ${fadeIn} 0.5s ease-out`,
  opacity: visible ? 1 : 0,
  transition: 'opacity 0.5s ease-in-out',
  pointerEvents: visible ? 'auto' : 'none',
  padding: theme.spacing(2),
}));

const BrandLogo = styled(Box)(({ theme }) => ({
  animation: `${pulse} 2s infinite ease-in-out`,
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  width: '100%',
  maxWidth: '400px',
}));

const LoadingBar = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  maxWidth: '280px',
  height: '6px',
  borderRadius: '3px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  '& .MuiLinearProgress-bar': {
    borderRadius: '3px',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.8))',
  },
}));

const Tagline = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontWeight: 300,
  letterSpacing: '3px',
  textTransform: 'uppercase',
  fontSize: '0.9rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    letterSpacing: '2px',
  },
}));

export default function FlashScreen({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const diff = Math.random() * 20;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300);

    // Hide after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) setTimeout(onFinish, 500); // Wait for fade out to complete
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onFinish]);

  return (
    <FlashScreenContainer visible={visible}>
      <BrandLogo>
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{
            fontFamily: 'Notedry, sans-serif',
            color: 'white',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            letterSpacing: '1px',
            mb: 1,
            fontSize: {
              xs: '2.4rem',
              sm: '3rem',
              md: '3.75rem'
            },
            lineHeight: {
              xs: 1.2,
              sm: 1.3
            }
          }}
        >
          StayWoke
        </Typography>
        <Tagline variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
          No Sleepin', Just Drippin'
        </Tagline>
      </BrandLogo>
      
      <LoadingBar variant="determinate" value={progress} />
      
      <Typography 
        variant="caption" 
        sx={{ 
          color: 'rgba(255,255,255,0.7)', 
          mt: 2, 
          letterSpacing: '1px',
          fontSize: {
            xs: '0.65rem',
            sm: '0.75rem'
          }
        }}
      >
        Loading {progress}%
      </Typography>
    </FlashScreenContainer>
  );
}