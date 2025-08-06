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
    bg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    sx: {
      backgroundSize: '200% 200%',
      animation: 'instagramGradient 5s ease infinite',
      '@keyframes instagramGradient': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    }
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
    bg: '#004187ff',
  },
];

const SocialCard = () => {
  return (
    <Box
      sx={{
        mt: 2,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
    <Typography sx={{color: '#fff'}}>Got enquiries? You can connect with us via:</Typography>
      {socials.map((item) => (
        <Box
          key={item.name}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background:
              item.name === 'Instagram'
                ? 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
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
