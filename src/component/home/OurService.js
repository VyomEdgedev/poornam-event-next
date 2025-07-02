
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
    title: 'Destination Weddings',
    image: '/portfolio1.png',
    description: 'We plan unforgettable weddings in Udaipur, Goa, Jaipur, and more.',
  },
  {
    title: 'Intimate Weddings',
    image: '/portfolio1.png',
    description:
      'Smaller weddings, bigger hearts. We specialize in cozy affairs — personal, poetic, and beautiful.',
    guests: '50 guests, 500 memories, 0 stress',
    cta: 'Learn More',
  },
  {
    title: 'Themed & Designer Weddings',
    image: '/portfolio1.png',
    description: 'Enjoy your big day while we handle the details.',
  },
  {
    title: 'Artist Management',
    image: '/portfolio1.png',
    description: 'Don’t lift a finger. We’ll plan the entire show.',
  },
  {
    title: 'Prewedding & Photography',
    image: '/portfolio1.png',
    description:
      'Because one day, you’ll want to re-marry the DJ during your own sangeet.',
  },
  {
    title: 'Special Effects',
    image: '/portfolio1.png',
    description:
      'More than just cold fireworks. We design impactful entry moments, vibes, and memories.',
  },
];

const FlipCard = ({ service }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      sx={{
        width: '100%',
        height: 360,
        perspective: 1500,
        cursor: 'pointer',
        transition: 'transform 0.4s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.9s ease',
          transform: flipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
          transformOrigin: 'bottom',
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 4,
            overflow: 'hidden',
            backfaceVisibility: 'hidden',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            // position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            backgroundColor: '#fff',
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={300}
            unoptimized
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.45)',
              color: '#fff',
              py: 1,
              px: 2,
              backdropFilter: 'blur(4px)',
            }}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              {service.title}
            </Typography>
          </Box>
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: 'absolute',
            // top: 0,
            width: '100%',
            height: '100%',
            borderRadius: 4,
            backfaceVisibility: 'hidden',
            transform: 'rotateX(180deg)',
            background: 'black',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff',
            px: 3,
            py: 3,
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {service.guests && (
            <Typography
              sx={{
                bgcolor: 'rgba(255,255,255,0.8)',
                color: '#0D1A46',
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 0.5,
                fontSize: '0.75rem',
                mb: 1,
              }}
            >
              {service.guests}
            </Typography>
          )}
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
            {service.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#f5f5f5',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              mb: 2,
            }}
          >
            {service.description}
          </Typography>
          {service.cta && (
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: '#FFD700',
                color: '#0D1A46',
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: '999px',
                px: 3,
                py: 0.8,
                fontSize: '0.85rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: '#FFC300',
                },
              }}
            >
              {service.cta}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};





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
          fontWeight: 'bold',
          color: '#0D1A46',
          mb: 1,
        }}
      >
        Our Services
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={6}>
        Everything You Need, Delivered Beautifully
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlipCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
