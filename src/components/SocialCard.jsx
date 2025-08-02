import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const socials = [
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon fontSize="medium" />,
    url: 'https://wa.me/2349074840423',
    bg: '#128C7E',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon fontSize="medium" />,
    url: 'https://www.instagram.com/staywoke.szn?igsh=MWZ6NXppY2NlZ25xOA%3D%3D&utm_source=qr',
    bg: '#E1306C',
  },
  {
    name: 'TikTok',
    icon: <MusicNoteIcon fontSize="medium" />,
    url: 'https://www.tiktok.com/@staywoke.szn?_t=ZS-8yWorO1kTBM&_r=1',
    bg: '#000000',
  },
  {
    name: 'Website',
    icon: <LanguageIcon fontSize="medium" />,
    url: '#',
    bg: '#007BFF',
  },
];

const SocialCard = () => {
  return (
    <Box
      sx={{
        mt: 4,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
    <Typography>Got enqures? You can connect with us via:</Typography>
      {socials.map((item) => (
        <Box
          key={item.name}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: item.bg,
            color: '#fff',
            p: 2,
            borderRadius: 3,
            boxShadow: `
              0 4px 10px rgba(0, 0, 0, 0.2),
              0 6px 20px rgba(0, 0, 0, 0.15)
            `,
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.015)',
            },
          }}
        >
          {/* Icon + Name */}
          <Stack direction="row" spacing={1} alignItems="center">
            {item.icon}
            <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
              {item.name}
            </Typography>
          </Stack>

          {/* Connect Button */}
          <Button
            variant="outlined"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              border: '2px solid #fff',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              bgcolor: 'transparent',
              borderRadius: '12px',
              px: 2,
              py: 0.5,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.15)',
              },
            }}
          >
            Connect
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default SocialCard;
