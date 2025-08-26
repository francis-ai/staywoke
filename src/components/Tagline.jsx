import React from 'react';
import { Box, Typography } from '@mui/material';

const words = ['No', 'sleep', 'in', 'this', 'Matrix'];

const Tagline = () => {
  return (
    <Box
      sx={{
        mt: 4,
        textAlign: 'center',
        px: 2,
      }}
    >
      {/* Main Tagline */}
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontFamily: 'Notedry, sans-serif',
          lineHeight: 1.2,
          fontSize: { xs: '2.7rem', sm: '2.7rem', md: '3rem' },
          display: 'inline-block',
          mb: 2,
        }}
      >
        {words.map((word, index) => (
          <Box
            key={index}
            component="span"
            sx={{
              mx: 0.5,
              display: 'inline-block',
              color: '#000',
              animation: 'highlight 4s linear infinite',
              animationDelay: `${index * 0.7}s`,
              '@keyframes highlight': {
                '0%': { color: '#000' },
                '10%': { color: '#ba0f0fff' },
                '20%': { color: '#000' },
                '100%': { color: '#000' },
              },
            }}
          >
            {word}
          </Box>
        ))}
      </Typography>

      {/* Brand Description */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', sm: '1rem' },
          color: '#000',
          maxWidth: '650px',
          mx: 'auto',
          lineHeight: 1.7,
          mt: 2,
          px: 1,
          textAlign: 'justify', // ✅ makes alignment equal on both ends
        }}
      >
        StayWoke is more than a brand, it’s a movement.  
        A community built for creators, thinkers, and doers who never stop pushing boundaries.  
        We’re crafting experiences that blend culture and lifestyle in ways you’ve never seen before.  
        Expect bold ideas, raw creativity, and a platform that never sleeps.  
        This is where passion meets purpose.  
        Welcome to the Matrix.
      </Typography>
      {/* <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          lineHeight: 1.7,
          fontWeight: 500,
          fontSize: '1rem'
        }}
      >
        Launching soon 🚀.
      </Typography> */}
    </Box>
  );
};

export default Tagline;
