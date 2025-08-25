import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Tagline from '../components/Tagline';
import SocialCard from '../components/SocialCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box sx={{
      backgroundColor: '#1762a8',
      m: 0,
      p: 0,
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden'
    }}>
      <Header />
      <Tagline />
      <SocialCard />
      <Footer />
    </Box>
  );
};

export default Home;