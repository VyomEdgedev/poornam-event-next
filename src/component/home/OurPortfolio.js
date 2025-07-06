import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const images = [
  { src: '/portfolio1.png', alt: 'Fireworks Ceremony', },
  { src: '/portfolio1.png', alt: 'Stage Decor' },
  { src: '/portfolio1.png', alt: 'Mandap Setup' },
  { src: '/portfolio1.png', alt: 'Sangeet Night' },
  { src: '/portfolio1.png', alt: 'Palace Venue' },
  { src: '/portfolio1.png', alt: 'Entry Moment', hasButton: true, cols:1 },
];

const PortfolioSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: '#FEF7EA', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: `'Playfair Display', serif`,
              fontWeight: 700,
              color: '#0D1A46',
            }}
          >
            Our Portfolio
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Real Weddings. Real Emotions.
          </Typography>
        </Box>

        {/* 🖼️ Image Grid */}
        <Box
          sx={{
            display: 'grid',
            gap: 0.5,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gridAutoRows: '190px',
            gridAutoFlow: 'dense',
          }}
        >
          {images.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                gridColumn: {
                  xs: 'auto',
                  md: item.cols ? `span ${item.cols}` : 'auto',
                },
                gridRow: {
                  xs: 'auto',
                  md: item.rows ? `span ${item.rows}` : 'auto',
                },
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                },
                '&:hover img': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <img src={item.src} alt={item.alt} />

              {item.hasButton && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(2px)',
                    zIndex: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#0D1A46',
                      color: '#fff',
                      textTransform: 'none',
                      borderRadius: '999px',
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      '&:hover': {
                        bgcolor: '#1B2A60',
                      },
                    }}
                  >
                    View Full Wedding Stories
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
