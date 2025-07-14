import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import Image from 'next/image';

// const images = [
//   '/portfolio1.png',
//   '/portfolio1.png',
//   '/portfolio1.png',
//   '/portfolio1.png',
//   '/portfolio1.png',
//   '/portfolio1.png',
// ];

const images = [
  { src: '/portfolio1.png', rows: 2, cols: 1 },
  { src: '/portfolio1.png', rows: 1, cols: 1 },
  { src: '/portfolio1.png', rows: 1, cols: 1 },
  { src: '/portfolio1.png', rows: 1, cols: 1 },
  { src: '/portfolio1.png', rows: 1, cols: 1 },
  {
    src: '/portfolio1.png',
    rows: 1,
    cols: 2,
    hasButton: true,
  },
];
export default function PortfolioSection() {
  return (
    <Box sx={{ bgcolor: '#FEF7EA', py: 10, px: { xs: 2, md: 10 }, textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{ fontFamily: `'Playfair Display', serif`, fontWeight: 'bold', color: '#0D1A46' }}
      >
      {`  Our Portfolio`}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
      {`  Real Weddings. Real Emotions.`}
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {images.map((img, index) => (
          <Grid
            item
            key={index}
            xs={img.cols === 2 ? 12 : 6}
            sm={img.cols}
            md={img.cols}
            sx={{
              gridRow: `span ${img.rows}`,
              position: 'relative',
              height: img.rows === 2 ? 400 : 190,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Image
              src={img.src}
              alt={`portfolio-${index}`}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: '12px' }}
            />
            {img.hasButton && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                }}
              >
                <Button  data-testid="notify-button"
                  variant="contained"
                  sx={{
                    backgroundColor: '#0D1A46',
                    color: '#fff',
                    textTransform: 'none',
                    borderRadius: '999px',
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: '#1B2A60',
                    },
                  }}
                >
                  View Full Wedding Stories
                </Button>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}