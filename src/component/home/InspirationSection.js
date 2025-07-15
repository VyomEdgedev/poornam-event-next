import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const data = [
  {
    label: 'Latest Trends',
    image: '/blog1.jpg',
  },
  {
    label: 'Celebrity',
    image: '/blog2.jpg',
  },
  {
    label: 'Fashion',
    image: '/blog3.jpg',
  },
  {
    label: 'Decoration',
    image: '/blog1.jpg',
  },
];

export default function InspirationSection() {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{ fontFamily: 'Gloock, serif', fontWeight: 400, mb: 6 }}
      >
      {`  Inspirations & Blogs`}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {data.map((item, index) => (
          <Grid item key={index} xs={6} sm={3}>
            <Box
              sx={{
                width: 180,
                height: 180,
                mx: 'auto',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.8s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '&:hover .overlay': {
                  backdropFilter: 'blur(3px)',
                },
                '&:hover .label-text': {
                  transform: 'translateY(-50px)',
                //   top:"100px",
                  
                },
              }}
            >
              {/* Background image */}
              <Box
                component="img"
                src={item.image}
                alt={item.label}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(0px)',
                  transition: 'all 0.4s ease',
                  zIndex: 1,
                }}
              />

              {/* Label with slight upward animation on hover */}
              <Typography
                className="label-text"
                sx={{
                  position: 'absolute',
                  bottom: 18,
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  zIndex: 2,
                  transform: 'translateY(0)',  // base position
    transition: 'transform 0.6s ease-in-out', // ⬅️ slower and smooth
                  
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
