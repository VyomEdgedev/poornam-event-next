'use client';
import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Grid,
} from '@mui/material';

const categories = ['All', 'Wedding', 'Corporate', 'Private Events', 'Decoration', 'Catering'];

const images = [
  '/images/wedding1.jpg',
  '/images/wedding2.jpg',
  '/images/wedding3.jpg',
  // Add more URLs as needed
];

export default function ExploreWork() {
  return (
    <Box sx={{ bgcolor: '#FDF8EF', py: 10, px: { xs: 3, md: 12 } }}>
      <Grid container spacing={6} alignItems="flex-start">
        {/* LEFT SIDE */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: `'Playfair Display', serif`,
              color: '#0D1A46',
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Explore Our Work
          </Typography>

          <Stack spacing={1}>
            {categories.map((cat, index) => (
              <Button
                key={index}
                variant={cat === 'Wedding' ? 'contained' : 'outlined'}
                size="small"
                sx={{
                  textTransform: 'none',
                  borderRadius: '20px',
                  color: cat === 'Wedding' ? '#fff' : '#B89562',
                  bgcolor: cat === 'Wedding' ? '#B89562' : 'transparent',
                  borderColor: '#B89562',
                  '&:hover': {
                    bgcolor: '#B89562',
                    color: '#fff',
                  },
                }}
              >
                {cat}
              </Button>
            ))}
          </Stack>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              pb: 1,
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {images.map((src, index) => (
              <Box
                key={index}
                component="img"
                src={src}
                alt={`Work ${index}`}
                sx={{
                  width: { xs: 220, sm: 280 },
                  height: 'auto',
                  borderRadius: 3,
                  flexShrink: 0,
                  objectFit: 'cover',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
