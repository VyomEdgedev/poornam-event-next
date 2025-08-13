import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
} from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import Image from "next/image";

const weddingThemesData = [
  {
    id: 1,
    tag: "Rajasthan",
    image: "/wedding1.png",
    alt: "Royal Rajasthani Theme",
    title: "Royal Rajasthani",
    description: "A regal affair in royal palaces.",
  },
  {
    id: 2,
    tag: "Beach",
    image: "/wedding2.png",
    alt: "Beach Theme",
    title: "Boho Beach",
    description: "An elegant beach ceremony.",
  },
  {
    id: 3,
    tag: "Modern",
    image: "/wedding3.png",
    alt: "Modern Chic Theme",
    title: "Minimal Chic",
    description: "Simplicity meets elegance.",
  },
];

const WeddingThemes = () => {
  const handleThemes = () => {
    console.log("Themes clicked");
  };
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography
        component="h2"
        align="center"
        sx={{
          fontWeight: "400",
          mb: 1,
          fontFamily: "Gloock,serif",
        }}
      >
        {` Explore Our Wedding Themes`}
      </Typography>
      <Typography
       
        component="p"
        align="center"
        sx={{
          mb: 2,
          fontFamily: "Akatab,Sans-serif",
          fontWeight: "400",
          mb: 4,
        }}
      >
        {`Choose from a variety of stunning wedding themes. `}
      </Typography>
      {/* <Box textAlign="center" mb={4}>
        <CustomButton  data-testid="notify-button" onClick={handleThemes}>{`View All Themes`}</CustomButton>
      </Box> */}
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 4, lg: 6, xl: 6 }}
        justifyContent="center"
      >
        {weddingThemesData.map(
          ({ id, tag, image, alt, title, description }) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  cursor: "pointer",
                }}
                elevation={1}
              >
                <Chip
                component={"p"}
                  label={tag}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "#ddd",
                  
                    zIndex: 2,
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    width: "350px",
                    height: 300,

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 14,
                    textAlign: "center",
                    minHeight: { xs: 250, sm: 280, md: 300 },
                  }}
                >
                  <Image
                    src={image}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    cursor="pointer"
                  />
                </Box>
                <CardContent>
                  <Typography
                   
                    component="p"
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: "400",
                      cursor: "pointer",
                     
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                  
                    component="h6"
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: "500",
                      color: "#000000",
                     
                    }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default WeddingThemes;
