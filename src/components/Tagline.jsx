import React from 'react';
import { Box, Typography } from '@mui/material';

const words = ['No', 'sleep', 'in', 'this', 'Matrix'];

const Tagline = () => {
  return (
    <Box
      sx={{
        mt: 10,
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontFamily: 'Notedry, sans-serif',
          lineHeight: 1.3,
          fontSize: { xs: '2.7rem', sm: '2.7rem', md: '3rem' },
          display: 'inline-block',
        }}
      >
        {words.map((word, index) => (
          <Box
            key={index}
            component="span"
            sx={{
              mx: 0.5,
              display: 'inline-block',
              color: '#90802df0',
              animation: 'highlight 5s linear infinite',
              animationDelay: `${index * 1}s`,
              '@keyframes highlight': {
                '0%': { color: '#90802df0' },
                '10%': { color: '#0f22a1ff' },
                '20%': { color: '#90802df0' },
                '100%': { color: '#90802df0' },
              },
            }}
          >
            {word}
          </Box>
        ))}
      </Typography>
    </Box>
  );
};

export default Tagline;
