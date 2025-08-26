import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Tagline from '../components/Tagline';
import SocialCard from '../components/SocialCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box sx={{height: '100vh'}}>
        <Header />
        <Tagline />
        <SocialCard />
        <Footer />
    </Box>
  );
};

export default Home;