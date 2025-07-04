import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Avatar, 
  Container 
} from '@mui/material';


const SignatureAddOns = () => {
  const addOns = [
    {
      title: "Venue Support",
      description: "We provide venue assistance",
      image: "./Group1.jpg"
    },
    {
      title: "Eco-Friendly Setup",
      description: "Zero-waste decor, paperless invites",
      image: "./Group2.jpg"
    },
    {
      title: "Customized Wedding Favors",
      description: "Personalized gifts for guests",
      image: "./Group3.jpg"
    },
    {
      title: "Drone + Cinematic Video Services",
      description: "Professional aerial coverage",
      image: "../Group4.jpg"
    },
    {
      title: "On-ground Crisis Manager",
      description: "Expert event coordination",
      image: "./Group4.jpg"
    }
  ];

  return (
    <Box
      sx={{
        // backgroundColor: '#DAA412',
        py: { xs: 6, md: 8, lg: 2 },
        px: { xs: 4, md: 3, lg:2}
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: 'Gloock, serif',
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 'bold',
              color: 'black',
              mb: 1
            }}
          >
            Signature Add-Ons
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontFamily: 'Akatab, sans-serif',
              fontSize: { xs: '1rem', md: '1.125rem' , lg:'1.125rem'},
              fontWeight: '400',
              color: '#000000'
            }}
          >
            Because Details Matter
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4, lg: 2 }}>
          {addOns.map((addon, index) => (
            <Grid item xs={6} md={4} lg={2} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent:'center',
                  padding: { xs: 2, md: 0 , lg: 0 },
                  
                }}

              >
                <Box
                  sx={{
                    width: { xs: 60, md: 70, lg: 80 },
                    height: { xs: 60, md: 70, lg: 80 },
                    borderRadius: '50%',
                    border: '2px solid #DAA412',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    mb: 2,
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '&:hover': {
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                   
                  }}
               >
                  <img 
                    src={addon.image}
                    alt={addon.title}
                    style={{
                      width: '32px',
                      height: '36px',
                      objectFit: 'contain',
                     display: 'block',
                      margin: 'auto'
                      
                    }}
                  />
                 </Box>

                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontFamily: 'Akatab, sans-serif',
                    fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
                    fontWeight: 500,
                    width:'150px',
                    color: '#000D1F',
                    mt:1,
                    mb: 1,
                    lineHeight: 1.2
                  }}
                >
                  {addon.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontFamily: 'Akatab, sans-serif',
                    fontSize: { xs: '0.75rem', md: '0.875rem', lg: '1rem' },
                    color: 'rgba(0, 0, 0, 0.7)',
                    lineHeight: 1.2,
                    width:'200px'
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