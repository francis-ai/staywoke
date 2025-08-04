import React from 'react';
import { Box, Typography } from '@mui/material';

const words = ['No', 'sleep', 'in', 'this', 'Matrix'];

const Tagline = () => {
  return (
    <Box
      sx={{
        mt: 14,
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontFamily: 'Notedry, sans-serif',
          lineHeight: 1.2,
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
              color: '#fffffff0',
              animation: 'highlight 4s linear infinite',
              animationDelay: `${index * 0.7}s`,
              '@keyframes highlight': {
                '0%': { color: '#fffffff0' },
                '10%': { color: '#000000ff' },
                '20%': { color: '#fffffff0' },
                '100%': { color: '#fffffff0' },
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
