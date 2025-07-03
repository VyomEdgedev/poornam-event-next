
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

const services = [
  {
    icon: <LocationOn sx={{ fontSize: 50, color: '#B89562' }} />,
    title: 'Destination Weddings',
    image: '/portfolio1.png',
    description: 'We plan unforgettable weddings in Udaipur, Goa, Jaipur, and more.',
  },
  {
    icon: <Favorite sx={{ fontSize: 50, color: '#B89562' }} />,
    title: 'Intimate Weddings',
    desc: 'Smaller weddings, bigger heart. We specialize in private, cozy affairs...',
  },
  {
    icon: <Store sx={{ fontSize: 50, color: '#B89562' }} />,
    title: 'Themed & Designer Weddings',
    image: '/portfolio1.png',
    description: 'Enjoy your big day while we handle the details.',
  },
  {
    icon: <EventNote sx={{ fontSize: 50, color: '#B89562' }} />,
    title: 'Full Wedding Planning',
    desc: "Don’t lift a finger. We’ll plan the entire shaadi.",
  },
  {
    icon: <MusicNote sx={{ fontSize: 50, color: '#B89562' }} />,
    title: 'Wedding Day Coordination',
    desc: 'Because you don’t want to be managing the DJ during your own varmala.',
  },
  {
    icon: <LocalFlorist sx={{ fontSize: 50, color: '#B89562' }} />,
    title: 'Wedding Decor & Styling',
    desc: 'More than just pretty flowers. We design Instagram-worthy wedding sets, mandaps...',
  },
];

export default function OurServices() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        bgcolor: '#FEF7EA',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: `'Playfair Display', serif`,
          color: '#0D1A46',
          mb: 1,
          fontSize:'40px',
          padding:'1px'
          
        }}
      >
        Our Services
      </Typography>
      <Typography align="center" variant="subtitle1" color="text.secondary" mb={6}>
        Everything You Need, Delivered Beautifully
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                width:"450px",
                height: '100%',
                backgroundColor: '#ffffff',
                borderRadius: 4,
                // px: 3,
                py: 1,
                boxShadow: '0 10px 24px rgba(0, 0, 0, 0.08)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                },
              }}
            >
              <Box>{service.icon}</Box>
              <CardContent sx={{padding:"1px", paddingBottom:"0px !important"}}>
                <Typography variant="h6" fontWeight="600" color="#0D1A46" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
