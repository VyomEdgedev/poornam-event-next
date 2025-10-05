import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Image from "next/image";

const SignatureAddOns = () => {
  const addOns = [
    {
      title: "Venue Support",
      description: "We provide venue assistance",
      image: "/Group1.svg",
    },
    {
      title: "Eco-Friendly Setup",
      description: "Zero-waste decor, paperless invites",
      image: "/Group2.svg",
    },
    {
      title: "Customized Wedding Favors",
      description: "Personalized gifts for guests",
      image: "/Group3.svg",
    },
    {
      title: "Drone + Cinematic Video Services",
      description: "Professional aerial coverage",
      image: "/Group4.svg",
    },
    {
      title: "On-ground Crisis Manager",
      description: "Expert event coordination",
      image: "/Group5.svg",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFF7E4",
        py: { xs: 4, sm: 2, md: 8, lg: 4 },
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Gloock, serif",
              fontWeight: "400",
              color: "black",
              mb: 1,
            }}
          >
            {` Signature Add-Ons`}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "Akatab, sans-serif",
              fontWeight: "400",
              color: "#000000",
            }}
          >
            {`Because Details Matter`}
          </Typography>
        </Box>

        <Grid
          container
          
          justifyContent={{
            xs: "center",
            lg: "space-between",
          
          }}
        >
          {addOns.map((addon, index) => (
            <Grid
              item
              size={{ xs: 12, sm: 4, md: "4", lg: "auto" }}
              key={index}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  padding: { xs: 1, sm: 0, md: 0, lg: 0 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 60, md: 70, lg: 80 },
                    height: { xs: 60, md: 70, lg: 80 },
                    borderRadius: "50%",
                    border: "2px solid #DAA412",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    mb: 2,
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    src={addon.image}
                    alt={addon.title}
                    width={32}
                    height={36}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Typography
                  component="h5"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    fontWeight: 500,
                    width: "150px",
                    color: "#000D1F",
                    mt: 1,
                    mb: 1,
                   
                  }}
                >
                  {addon.title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    color: "rgba(0, 0, 0, 0.7)",
                    width: "200px",
                  }}
                >
                  {addon.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SignatureAddOns;
