import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const socials = [
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon fontSize='large' />,
    url: 'https://wa.me/2348143582166',
    bg: '#25D366',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon fontSize="large" />,
    url: 'https://www.instagram.com/staywoke.szn?igsh=MWZ6NXppY2NlZ25xOA%3D%3D&utm_source=qr',
    bg: 'linear-gradient(135deg, #ACBDE8, #FC5344, #E1447A)',
  },
  {
    name: 'TikTok',
    icon: <MusicNoteIcon fontSize="large" />,
    url: 'https://www.tiktok.com/@staywoke.szn?_t=ZS-8yWorO1kTBM&_r=1',
    bg: '#000000',
  },
  {
    name: 'Website',
    icon: <LanguageIcon fontSize="large" />,
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
    <Typography>Got enquiries? You can connect with us via:</Typography>
      {socials.map((item) => (
        <Box
          key={item.name}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background:
              item.name === 'Instagram'
                ? 'linear-gradient(135deg, #ACBDE8, #FC5344, #E1447A)'
                : item.bg,
            color: '#fff',
            p: 2,
            mb: 1,
            borderRadius: 3,
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.025)',
            }

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
                bgcolor: 'rgba(255, 255, 255, 0.34)',
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
