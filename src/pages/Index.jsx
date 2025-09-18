import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/Hero';
import Catalog from '../components/Catalog'
import CTA from '../components/CTA';


const Home = () => {
  return (
    <Box sx={{height: 'auto'}}>
        <HeroSection />
        <Catalog limit={4} />
        <CTA />
    </Box>
  );
};

export default Home;