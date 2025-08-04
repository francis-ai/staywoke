// src/pages/Home.jsx
import React from 'react';
import { Container } from '@mui/material';
import Header from '../components/Header';
import Tagline from '../components/Tagline';
import SocialCard from '../components/SocialCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Container sx={{backgroundColor: '#1762a8', m: 0, p:0}}>
      <Header />
      <Tagline />
      <SocialCard />
      <Footer />
    </Container>
  );
};

export default Home;
