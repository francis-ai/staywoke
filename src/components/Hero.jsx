// src/components/HeroSection.js
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import Hero1 from "../assets/images/Hero1.jpeg";
import Hero2 from "../assets/images/Hero2.jpeg";
import Hero3 from "../assets/images/Hero3.jpeg";
import Hero4 from "../assets/images/Hero4.jpeg";

const slides = [Hero1, Hero2, Hero3, Hero4];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ width: "100%", mt: { xs: 7, md: 8 } }}>
      <Slider {...settings}>
        {slides.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: "50vh", md: "90vh" },
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0px",
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
