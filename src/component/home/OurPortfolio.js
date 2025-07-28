import React from 'react';
import Image from 'next/image';
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
      alt: "portfolio Image 3",
      id: "img1"
    },
    {
      src: "/portfolio7.jpg",
      alt: "portfolio Image 7", 
      id: "img2"
    },
    {
      src: "/portfolio6.jpg",
      alt: "portfolio Image 6",
      id: "img3"
    },
    {
      src: "/portfolio5.jpg",
      alt: "portfolio Image 5",
      id: "img5"
    },
    {
      src: "/portfolio4.jpg",
      alt: "portfolio Image 4", 
      id: "img4"


    }
  ];

  // Common image component with hover effects
  const PortfolioImage = ({ src, alt, children }) => (
    <Box
      sx={{
        position: 'relative', 
        borderRadius: { xs: 1, md: 2 },
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        '&:hover': {
          '& .portfolio-image': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
       {children && (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
    >
      {children}
    </Box>
  )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw,"
        style={{
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
        }}
        className="portfolio-image"
      />
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#FFFAED', py: { xs: 6, md: 7 }, px:{ xs: 2, sm: 0, md: 12, lg: 7.5, xl: 20} }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            
            sx={{
              fontFamily: 'Gloock, serif',
              fontWeight: 400,
              color: '#000D1F',
              mb: 0.85,
            }}
          >
            Our Portfolio
          </Typography>
          <Typography 
            variant="body1"
            component="p" 
            sx={{ 
              fontFamily: "Akatab,Sans-serif",
              fontWeight: 400,
              color: '#000000',
              
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
            gap: 1.5,
            mb: 2,
            height: '425px',
            padding: 0,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {/* Left Column - Main Image */}
          <PortfolioImage 
            src={portfolioImages[0].src} 
            alt={portfolioImages[0].alt} 
          />

          {/* Middle Column */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gap: 1.5,
              height: '100%',
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
                gap: 1.5,
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
              gap: 1.5,
              height: '100%',
            }}
          >
            <PortfolioImage 
              src={portfolioImages[4].src} 
              alt={portfolioImages[4].alt} 
            />
            
            <PortfolioImage 
              src={portfolioImages[5].src} 
              alt={portfolioImages[5].alt} 
              >
                <Button   data-testid="notify-button" 
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                backgroundColor: "#000000", color:"#FFFFFF" , 
                width:{ xs: '100%', sm: '290px' , md: '210px', lg: '290px', xl: '290px'}, borderRadius: 50, height: '55px', fontSize: { xs: '12px', sm: '16px'}, fontFamily: "Akatab,Sans-serif",fontWeight: '500' , textTransform: 'capitalize'}} zIndex={5}>
                  View Full Wedding Stories</Button>
              </PortfolioImage>
            
          </Box>
        </Box>

        {/* Tablet Grid */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'grid', md: 'none' },
            gridTemplateColumns: '1fr 1fr',
            gap: 1.5,
            mb: 2,
            height: '350px',
            padding: 0,
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
              gap: 1.5,
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
            {/* <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1.5,
              height: '150px',
         
              mb: 1.5,
            }}
          >
            <PortfolioImage 
              src={portfolioImages[5].src} 
              alt={portfolioImages[5].alt} 
              >
                <Button   data-testid="notify-button" 
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                backgroundColor: "#000000", color:"#FFFFFF" , 
                width:{ xs: '290px', sm: '290px' , md: '220px', lg: '290px', xl: '290px'}, borderRadius: 50, height: '55px', fontSize: { xs: '12px', sm: '16px'}, fontFamily: "Akatab,Sans-serif",fontWeight: '500' , textTransform: 'capitalize'}} zIndex={5}>
                  View Full Wedding Stories</Button>
              </PortfolioImage>
              </Box> */}
          </Box>
        </Box>

        {/* Mobile Layout */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            padding: 0,
            borderRadius: 2,
          }}
        >
          {/* Main image */}
          <Box sx={{ mb: 1.5, height: '200px' }}>
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
              gap: 1.5,
              height: '150px',
              mb: 1.5,
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
              gap: 1.5,
              height: '150px',
              mb: 1.5,
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
             {/* <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1.5,
              height: '150px',
         
              mb: 1.5,
            }}
          >
            <PortfolioImage 
              src={portfolioImages[5].src} 
              alt={portfolioImages[5].alt} 
              >
                <Button   data-testid="notify-button" 
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                backgroundColor: "#000000", color:"#FFFFFF" , 
                width:{ xs: '290px', sm: '290px' , md: '220px', lg: '290px', xl: '290px'}, borderRadius: 50, height: '55px', fontSize: { xs: '12px', sm: '16px'}, fontFamily: "Akatab,Sans-serif",fontWeight: '500' , textTransform: 'capitalize'}} zIndex={5}>
                  View Full Wedding Stories</Button>
              </PortfolioImage>
              </Box> */}
         
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioSection;

