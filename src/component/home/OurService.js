'use client';
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  LocationOn,
  Favorite,
  Store,
  EventNote,
  MusicNote,
  LocalFlorist,
} from '@mui/icons-material';

const services = [
  {
    icon: <LocationOn sx={{ fontSize: 50, color: '#0D2650' }} />,
    title: 'Destination Weddings',
    desc: 'We plan unforgettable weddings in Udaipur, Goa, Jaipur, and even your ancestral haveli...',
  },
  {
    icon: <Favorite sx={{ fontSize: 50, color: '#0D2650' }} />,
    title: 'Intimate Weddings',
    desc: 'Smaller weddings, bigger heart. We specialize in private, cozy affairs...',
  },
  {
    icon: <Store sx={{ fontSize: 50, color: '#0D2650' }} />,
    title: 'Themed & Designer Weddings',
    desc: 'Enjoy your day while we handle the details.',
  },
  {
    icon: <EventNote sx={{ fontSize: 50, color: '#0D2650' }} />,
    title: 'Full Wedding Planning',
    desc: "Don’t lift a finger. We’ll plan the entire shaadi.",
  },
  {
    icon: <MusicNote sx={{ fontSize: 50, color: '#0D2650' }} />,
    title: 'Wedding Day Coordination',
    desc: 'Because you don’t want to be managing the DJ during your own varmala.',
  },
  {
    icon: <LocalFlorist sx={{ fontSize: 50, color: '#0D2650' }} />,
    title: 'Wedding Decor & Styling',
    desc: 'More than just pretty flowers. We design Instagram-worthy wedding sets, mandaps...',
  },
];

export default function OurServices() {
  return (
    <Box
      sx={{
        bgcolor: '#FDF8EF',
        py: { xs: 6, md: 2 },
        px: { xs: 2, md: 2 },
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{
          fontFamily: `'Playfair Display', serif`,
          color: '#000D1F',
          mb: 1,
          fontSize:'40px',
          fontFamily: 'Elsie Swash Caps',
          padding:'1px'
          
        }}
      >
        Our Services
      </Typography>
      <Typography align="center" variant="subtitle1" color="text.secondary" mb={2} fontSize={"14px"} >
        Everything You Need, Delivered Beautifully
      </Typography>

      <Grid container spacing={4} justifyContent={'center'}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                width:"350px",
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
                <Typography variant="h6" fontSize="18px" fontWeight="600" color="#0D1A46" gutterBottom  >
                  {service.title}
                </Typography>
                <Typography variant="body2" fontSize="13px" color="text.secondary">
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
