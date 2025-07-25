import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Container
} from '@mui/material';
import Image from 'next/image';


const SignatureAddOns = () => {
  const addOns = [
    {
      title: "Venue Support",
      description: "We provide venue assistance",
      image: "/Group1.svg"
    },
    {
      title: "Eco-Friendly Setup",
      description: "Zero-waste decor, paperless invites",
      image: "/Group2.svg"
    },
    {
      title: "Customized Wedding Favors",
      description: "Personalized gifts for guests",
      image: "/Group3.svg"
    },
    {
      title: "Drone + Cinematic Video Services",
      description: "Professional aerial coverage",
      image: "/Group4.svg"
    },
    {
      title: "On-ground Crisis Manager",
      description: "Expert event coordination",
      image: "/Group5.svg"
    }
  ];

  return (
    <Box
      sx={{
        // backgroundColor: '#DAA412',
        py: { xs: 4, sm: 4, md: 8, lg: 2 },
        px: { xs: 4, sm: 0, md: 1, lg: 2, xl: 20 }
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: 'Gloock, serif',
              // fontSize: { xs: '32px', md: '40px', lg: '48px' },
              fontWeight: '400',
              color: 'black',
              mb: 1
            }}
          >
            {` Signature Add-Ons`}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontFamily: 'Akatab, sans-serif',
              fontSize: { xs: '16px', md: '18px', lg: '18px' },
              fontWeight: '400',
              color: '#000000'
            }}
          >
            {`Because Details Matter`}
          </Typography>
        </Box>

        <Grid container  spacing={{ xs: 2, sm: 2, md: 2, lg: 6, xl: 8 }} justifyContent={{ xs: "center", sm: "center", md: "center", lg: "center" , xl: "center"}}>
          {addOns.map((addon, index) => (
            <Grid item size={{ xs: 12, sm: 4, lg: "auto" }}  key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: { xs: 1, sm: 0, md: 0, lg: 0 },

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
                  <Image
                    src={addon.image}
                    alt={addon.title}
                    width={32}
                    height={36}
                    style={{ objectFit: 'contain' }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontFamily: 'Akatab, sans-serif',
                    fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
                    fontWeight: 500,
                    width: '150px',
                    color: '#000D1F',
                    mt: 1,
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
                    width: '200px'
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