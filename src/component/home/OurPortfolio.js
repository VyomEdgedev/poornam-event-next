"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

const portfolioImages = [
  "/portfolio1.png",
  "/portfolio1.jpg",
  "/portfolio1.jpg",
  "/portfolio1.jpg",
  "/portfolio1.jpg",
  "/portfolio1.jpg",
];

export default function OurPortfolio() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        bgcolor: "#FEF7EA",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: `'Playfair Display', serif`,
          fontWeight: "bold",
          color: "#0D1A46",
          mb: 1,
        }}
      >
        Our Portfolio
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        mb={{ xs: 4, md: 6 }}
      >
        Real Weddings. Real Emotions.
      </Typography>

      {/* Portfolio Layout */}
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
      >
        {/* Left Image */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: isMobile ? 300 : 420,
              borderRadius: "0 0 100px 0",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="/protfolio1.png" // make sure image exists under public
              alt="Main Portrait"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>

        {/* Right Image Grid */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {portfolioImages.map((src, index) => (
              <Grid key={index} item xs={6} sm={4}>
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    height: 120,
                    width: "100%",
                    position: "relative",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Portfolio ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* CTA Button */}
      <Box mt={6}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "50px",
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "15px",
            "&:hover": { bgcolor: "#333" },
          }}
        >
          View Full Wedding Stories
        </Button>
      </Box>
    </Box>
  );
}
