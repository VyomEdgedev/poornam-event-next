import React from 'react';
import CustomButton from '@/common-component/button/CustomButton';
import { Card, Grid, Typography, styled, Box } from '@mui/material';
import Image from 'next/image';

// JSON Data for services
const servicesData = {
  hero: {
    image: "/serviceimg1.png",
    title: "Destination Weddings",
    description: "Udaipur, Goa, ancestral havelis- travel + traditions done right.",
    buttonText: "Learn More"
  },
  services: [
    {
      id: 1,
      image: "/serviceimg2.png",
      title: "Destination Weddings",
      description: "Shaadi + Vacation = Best Decision Ever"
    },
    {
      id: 2,
      image: "/serviceimg3.png",
      title: "Themed & Designer Weddings",
      description: "Vintage Bollywood? Royal Rajput? We say YES to all the drama."
    },
    {
      id: 3,
      image: "/serviceimg4.png",
      title: "Full Wedding Planning",
      description: "Don't lift a finger. We'll plan the entire shaadi."
    },
    {
      id: 4,
      image: "/serviceimg5.png",
      title: "Intimate Weddings",
      description: "50 guests. 500 memories. 0 stress."
    },
    {
      id: 5,
      image: "/serviceimg6.png",
      title: "Wedding Day Coordination",
      description: "Because you don't want to be managing the DJ during your own varmala."
    },
    {
      id: 6,
      image: "/serviceimg7.png",
      title: "Food and Beverages",
      description: "More than just pretty flowers."
    },
    {
      id: 7,
      image: "/serviceimg8.png",
      title: "Artist Management",
      description: "Don't lift a finger. We'll plan the entire shaadi."
    },
    {
      id: 8,
      image: "/serviceimg8.png",
      title: "Prewedding & Photography",
      description: "Because you don't want to be managing the DJ during your own varmala."
    },
    {
      id: 9,
      image: "/serviceimg9.png",
      title: "Guest Hospitality & Logistics",
      description: "Because a happy guest = a happy shaadi."
    },
    
    {
      id: 10,
      image: "/serviceimg8.png",
      title: "Special Effects",
      description: "More than just pretty flowers. We design Instagram-worthy wedding sets, mandaps...",
      isHighlighted: true
    }
  ]
};

// Styled Components
const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
  }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Gloock, serif',
  fontWeight: 400,
  fontSize: '48px',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '36px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  }
}));

const HeroCard = styled(Card)(({ theme }) => ({
  display:'flex',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border: 'none',
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
  '& .MuiCardContent-root': {
    padding: 0,
  }
}));

const ServiceCard = styled(Card)(({ theme,isHighlighted }) => ({
  backgroundColor: 'transparent',
   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  border: '1px solid #e0e0e0',
  borderRadius: '12px',
  width: isHighlighted ? "1058px" : "340px",
  height: '132px',
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  padding: '16px 16px 16px 0px',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& .MuiCardContent-root': {
    padding: theme.spacing(2)
  },
[theme.breakpoints.down('md')]: {
    // width: '100%', 
    maxWidth: '340px', // Standard card width
    height: 'auto',
    minHeight: '132px',
  },
  [theme.breakpoints.down('sm')]: {
   flexDirection: 'column',
   textAlign:'center',
    height: 'auto',
    minHeight: '180px',
    marginLeft: '10px',
    padding: theme.spacing(1),
    gap: theme.spacing(1),
  },
}));

const ImageContainer = styled(Box)(({ theme })=>({
  width: '100px',
  height: '125px',
  overflow: 'hidden',
  borderRadius: '8px',
    flexShrink: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
   [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '100px',
  },
}));

const HeroImageContainer = styled(Box)({
  width: '100%',
  height: '223px',
  overflow: 'hidden',
  borderRadius: '8px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
});
const ServiceContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  height: '100%',
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  }
}));
const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Akatab,Sans-serif',
  fontWeight: 600,
  fontSize: '20px',
  color: '#000D1F',
  marginBottom: theme.spacing(0.5),
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Akatab,Sans-serif',
  fontSize: '14px',
  color: '#000000',
  lineHeight: 1.5,
  // overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  display: 'flex',
  marginLeft:'40px',
  flexDirection: 'column',
  justifyContent: 'center',
    alignItems: 'start',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0px',
    textAlign: 'center',
     alignItems: 'center',
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Gloock, serif',
  width:'314px',
  fontWeight: 400,
  fontSize: '36px',
  color: '#000000',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  }
}));

const HeroDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Akatab,Sans-serif',
  fontWeight:'400',
  fontSize: '16px',
  width:'251px',
  color: '#000000',
  textAlign:"left",
  marginBottom: theme.spacing(3),
  lineHeight: 1.5,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const   ShaddiService = () => {
  return (
    <MainContainer>
      {/* Title */}
      <StyledTypography variant="h2" >
        Our Shaadi Services
      </StyledTypography>

      {/* Hero Section */}
      <HeroCard >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <HeroImageContainer>
              <Image
                src={servicesData.hero.image}
                alt={servicesData.hero.title}
                width={500}
                height={500}
                objectFit="cover"
              />
            </HeroImageContainer>
          </Grid>
          <Grid item xs={12} md={4} spacing={2}>
            <HeroContent>
              <HeroTitle variant="h3">
                {servicesData.hero.title}
              </HeroTitle>
              <HeroDescription>
                {servicesData.hero.description}
              </HeroDescription>
              <CustomButton>
                {servicesData.hero.buttonText}
              </CustomButton>
            </HeroContent>
          </Grid>
        </Grid>
      </HeroCard>

      {/* Services Grid */}
     <Grid container spacing={2}>
        {servicesData.services.map((service) => (
          <Grid item xs={12}   
          sm={service.isHighlighted ? 12 : 6} 
            md={service.isHighlighted ? 12 : 4} 
            key={service.id}>
            <ServiceCard isHighlighted={service.isHighlighted}>
              <ImageContainer>
                <ImageContainer>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={125}
                  style={{ objectFit: 'cover' }}
                />
              </ImageContainer>
              </ImageContainer>
              <ServiceContent>
                <ServiceTitle variant="h6">
                  {service.title}
                </ServiceTitle>
                <ServiceDescription>
                  {service.description}
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </MainContainer>
  );
};

export default ShaddiService;


