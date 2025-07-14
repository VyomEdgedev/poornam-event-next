import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box, Chip } from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import Image from "next/image";

const weddingThemesData = [
  {
    id: 1,
    tag: "Rajasthan",
    image: "/portfolio2.png",
      alt: "Royal Rajasthani Theme",
    title: "Royal Rajasthani",
    description: "A regal affair in royal palaces."
  },
  {
    id: 2,
    tag: "Beach",
   image: "/portfolio2.png",
      alt: "Royal Rajasthani Theme",
    title: "Boho Beach",
    description: "An elegant beach ceremony."
  },
  {
    id: 3,
    tag: "Modern",
    image: "/portfolio2.png",
      alt: "Royal Rajasthani Theme",
    title: "Minimal Chic",
    description: "Simplicity meets elegance."
  }
];

const WeddingThemes = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h3" 
        component="h2" 
        align="center" 
        sx={{ fontWeight: "400", mb: 2, fontFamily: 'Gloock,serif' , fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}
      >
       {` Explore Our Wedding Themes`}
      </Typography>
      <Typography 
        variant="body1" 
        align="center" 
        
        sx={{ mb: 4 , fontFamily: "Akatab,Sans-serif", fontWeight:'400' }}
      >
        {`Choose from a variety of stunning wedding themes. `}
      </Typography>
      <Box textAlign="center" mb={6}>
       <CustomButton  data-testid="notify-button">{`View All Themes`}</CustomButton>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {weddingThemesData.map(({ id, tag, image,alt, title, description }) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <Card 
              sx={{ 
                width: "100%",
                height: "100%", 
                display: "flex", 
                flexDirection: "column", 
                position: "relative",
                
              }}
              elevation={1}
            >
              <Chip 
                label={tag} 
                size="small"
                sx={{ position: "absolute", top: 8, left: 8, backgroundColor: "#ddd", fontSize: 11, zIndex:2 }} 
              />
              <Box 
                sx={{ 
                  position: "relative",
                  width: "340px",
                  height: 300, 
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 14,
                  textAlign: "center",
                  minHeight: { xs: 250, sm: 280, md: 300 }
                }}
                >
                <Image
                  src={image}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                />         
                
                  
              </Box>
              <CardContent>
                <Typography variant="subtitle1" component="div" sx={{fontFamily: "Akatab,Sans-serif", fontWeight:'400' ,fontSize:{ xs: '0.9rem', sm: '0.9rem', md: '1rem' }}}>
                  {title}
                </Typography>
                <Typography variant="body1" component="p" sx={{ fontFamily: "Akatab,Sans-serif", fontWeight:'500', color:"#000000" , fontSize:{ xs: '0.9rem', sm: '0.9rem', md: '1.125rem' } }}>
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WeddingThemes;

