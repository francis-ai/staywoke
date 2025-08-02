// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Tagline from '../components/Tagline';
import SocialCard from '../components/SocialCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Tagline />
      <SocialCard />
      <Footer />
    </div>
  );
};

export default Home;
