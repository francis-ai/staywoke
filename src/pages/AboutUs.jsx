import React from "react";
import { Box, Typography, Container } from "@mui/material";
import AboutImg from "../assets/images/logo.png";

const AboutUs = () => {
  return (
    <Box sx={{ py: 8, mt: 6 }}>
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 10 }}>
        <Typography
          variant="h3"
          fontWeight="800"
          sx={{
            mb: 2,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
            stAywOKe isn’t just clothing — it’s a mindset. Born from the streets and fueled by culture, we stand for those who move with purpose, who know style is more than just fabric — it’s expression, it’s energy, it’s awareness.
            We design pieces that speak to the Woke Fam — the dreamers, the hustlers, the ones chasing impact while staying true to themselves. Every hoodie, cap, or tee we drop carries that reminder: stay original, stay aware, stAywOKe.
            For the originals, the ones rewriting the script — this is your movement. 🔌
        </Typography>
      </Container>

      {/* Image + Text Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // column on mobile, row on desktop
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={AboutImg}
            alt="Our Team"
            sx={{
              width: { xs: "100%", md: 350 },
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              mx: "auto",
            }}
          />

          {/* Text */}
          {/* <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight="700"
              sx={{ mb: 2, fontFamily: "'Poppins', sans-serif" }}
            >
              Who We Are
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
              We started with a simple idea: to build something meaningful and
              impactful. Over the years, our team has grown into a family of
              creative thinkers, problem solvers, and innovators dedicated to
              excellence.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Our culture is built on collaboration, respect, and a shared
              passion for what we do. Together, we aim to make a difference.
            </Typography>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
