// src/pages/ContactUs.jsx
import React from 'react';
import { Box, Button, Typography, Stack, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
// import LanguageIcon from '@mui/icons-material/Language';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const socials = [
  {
    name: 'Instagram',
    icon: <InstagramIcon fontSize="large" />,
    url: 'https://www.instagram.com/staywoke.szn?igsh=MWZ6NXppY2NlZ25xOA%3D%3D&utm_source=qr',
    bg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    animate: true,
  },
  {
    name: 'TikTok',
    icon: <MusicNoteIcon fontSize="large" />,
    url: 'https://www.tiktok.com/@staywoke.szn?_t=ZS-8yWorO1kTBM&_r=1',
    bg: '#000000',
  },
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon fontSize="large" />,
    url: 'https://wa.me/2348143582166',
    bg: '#25D366',
  },
//   {
//     name: 'Website',
//     icon: <LanguageIcon fontSize="large" />,
//     url: '#',
//     bg: '#004187',
//   },
];

const ContactUs = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mt: 6
        }}
      >
        <Typography
          variant="h4"
          fontWeight="700"
          textAlign="center"
          sx={{ mb: 2, fontFamily: "'Poppins', sans-serif" }}
        >
          Contact Us
        </Typography>

        <Typography
          sx={{
            color: '#555',
            textAlign: 'center',
            mb: 4,
            fontStyle: 'italic',
          }}
        >
          Got enquiries? You can connect with us via:
        </Typography>

        {socials.map((item) => (
          <Box
            key={item.name}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: item.bg,
              color: '#fff',
              p: 2.5,
              borderRadius: 3,
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.25)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 18px rgba(0, 0, 0, 0.35)',
              },
              ...(item.animate && {
                backgroundSize: '200% 200%',
                animation: 'instagramGradient 6s ease infinite',
              }),
              '@keyframes instagramGradient': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' },
              },
            }}
          >
            {/* Icon + Name */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              {item.icon}
              <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
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
                fontWeight: 600,
                borderRadius: '12px',
                px: 2.5,
                py: 0.5,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.25)',
                },
              }}
            >
              Connect
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ContactUs;
