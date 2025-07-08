import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CustomButton from '@/common-component/button/CustomButton';

const PortfolioSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Define all images in one place
  const portfolioImages = [
    {
      src: "/portfolio2.png",
      alt: "Main Portfolio",
      id: "main"
    },
    {
      src: "/portfolio3.png", 
      alt: "Portfolio Image 1",
      id: "img1"
    },
    {
      src: "/portfolio4.png",
      alt: "Portfolio Image 2", 
      id: "img2"
    },
    {
      src: "/portfolio5.png",
      alt: "Portfolio Image 3",
      id: "img3"
    },
    {
      src: "/portfolio6.png",
      alt: "Portfolio Image 4",
      id: "img4"
    },
    {
      src: "/portfolio7.png",
      alt: "Portfolio Image 5", 
      id: "img5"
    }
  ];

  // Common image component with hover effects
  const PortfolioImage = ({ src, alt }) => (
    <Box
      sx={{
        position: 'relative',
        borderRadius: { xs: 1, md: 2 },
        overflow: 'hidden',
        height: '100%',
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
        },
        '&:hover img': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <img src={src} alt={alt} />
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#FFFAED', py: { xs: 6, md: 7 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Gloock, serif',
              fontWeight: 400,
              color: '#000D1F',
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 1,
            }}
          >
            Our Portfolio
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              frontFamily: "Akatab,Sans-serif",
              fontWeight: 400,
              color: '#000000',
              fontSize: { xs: '0.9rem', md: '1.125rem' },
            }}
          >
            Real Weddings. Real Emotions.
          </Typography>
        </Box>

        {/* Desktop Grid */}
        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 2,
            mb: 2,
            height: '425px', // Fixed height for the entire grid
            padding: 2,
            borderRadius: 2,
            overflow: 'hidden',
            objectFit: 'cover',
          }}
        >
          {/* Left Column - Main Image */}
          <PortfolioImage 
            src={portfolioImages[0].src} 
            alt={portfolioImages[0].alt} 
          />

          
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gap: 2,
              height: '55%', 
            }}
          >
            {/* Top section */}
            <PortfolioImage 
              src={portfolioImages[1].src} 
              alt={portfolioImages[1].alt} 
            />
            
            {/* Bottom section - Two small boxes */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                height: '100%',
              }}
            >
              <PortfolioImage 
                src={portfolioImages[2].src} 
                alt={portfolioImages[2].alt} 
              />
              <PortfolioImage 
                src={portfolioImages[3].src} 
                alt={portfolioImages[3].alt} 
              />
            </Box>
          </Box>

          {/* Right Column - Two sections */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gap: 2,
              height: '55%', // Take full height of grid
            }}
          >
            <PortfolioImage 
              src={portfolioImages[4].src} 
              alt={portfolioImages[4].alt} 
            />
            <PortfolioImage 
              src={portfolioImages[5].src} 
              alt={portfolioImages[5].alt} 
            />
            
          </Box>
        </Box>

        {/* Tablet Grid */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'grid', md: 'none' },
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
            mb: 2,
            height: '350px',
            padding: 2,
            borderRadius: 2,
          }}
        >
          {/* Left side - Main image */}
          <PortfolioImage 
            src={portfolioImages[0].src} 
            alt={portfolioImages[0].alt} 
          />

          {/* Right side - Grid of smaller images */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: 1,
              height: '100%',
            }}
          >
            <PortfolioImage 
              src={portfolioImages[1].src} 
              alt={portfolioImages[1].alt} 
            />
            <PortfolioImage 
              src={portfolioImages[2].src} 
              alt={portfolioImages[2].alt} 
            />
            <PortfolioImage 
              src={portfolioImages[3].src} 
              alt={portfolioImages[3].alt} 
            />
            <PortfolioImage 
              src={portfolioImages[4].src} 
              alt={portfolioImages[4].alt} 
            />
          </Box>
        </Box>

        {/* Mobile Layout */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            padding: 2,
            borderRadius: 2,
          }}
        >
          {/* Main image */}
          <Box sx={{ mb: 2 }}>
            <PortfolioImage 
              src={portfolioImages[0].src} 
              alt={portfolioImages[0].alt} 
            />
          </Box>

          {/* Grid of smaller images */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1,
              height: '200px',
            }}
          >
            <PortfolioImage 
              src={portfolioImages[1].src} 
              alt={portfolioImages[1].alt} 
            />
            <PortfolioImage 
              src={portfolioImages[2].src} 
              alt={portfolioImages[2].alt} 
            />
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1,
              height: '150px',
              mt: 1,
            }}
          >
            <PortfolioImage 
              src={portfolioImages[3].src} 
              alt={portfolioImages[3].alt} 
            />
            <PortfolioImage 
              src={portfolioImages[4].src} 
              alt={portfolioImages[4].alt} 
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioSection;