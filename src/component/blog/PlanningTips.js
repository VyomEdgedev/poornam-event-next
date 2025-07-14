import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Container, 
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Image from 'next/image';

const PlanningTips = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // JSON data structure
  const sectionData = {
    title: "At Poornam Events,",
    subtitle: "we believe wedding planning shouldn't feel like a maths exam.",
    planningTips: "Expert Planning Tips:",
    services: [
      {
        id: 1,
        image: "/planningtips1.png",
        title: "Expert Planning Tips",
        description: "Get the best advice for your special day.",
        color: "#D9D9D980"
      },
      {
        id: 2,
        image: "/Planningtips2.png",
        title: "Venue & Vendor Insights",
        description: "Discover the best options available.",
        color: "#D9D9D980"
      },
      {
        id: 3,
        image: "/Planningtips3.png",
        title: "Real Couple Stories",
        description: "Inspiration from those who have walked the path.",
        color: "#D9D9D980"
      },
      {
        id: 4,
        image: "/Planningtips4.png",
        title: "Budget Hacks",
        description: "Smart solutions for cost-effective planning.",
        color: "#D9D9D980"
      },
      {
        id: 5,
        image: "/Planningtips5.png",
        title: "Fun Reads",
        description: "Light-hearted content to ease your stress.",
        color: "#D9D9D980"
      }
    ]
  };

  const getIcon = (imagePath) => {
    return <Image 
      src={imagePath} 
      alt="service icon" 
      width={40} 
      height={40} 
    />;
  };

return (
    <Box sx={{ 
        // backgroundColor: '#FFF8F3',
        minHeight: '100vh',
        py: { xs: 4, md: 8 }
    }}>
        <Container maxWidth="lg">
            <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
                {/* Left Column - Main Content */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ pr: { xs: 0, md: 4 } }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.8rem' },
                                fontWeight: 400,
                                lineHeight: 1.2,
                                mb: 3,
                                fontFamily: 'Gloock,serif',
                                color: '#000D1F',
                                width: { xs: '100%', sm: '100%', md: '520px' }
                            }}
                        >
                            <span style={{ color: '#DAA412' }}>{sectionData.title}</span>
                            <br />
                            {sectionData.subtitle}
                        </Typography>
                        
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' },
                                fontWeight: 500,
                                fontFamily: "Akatab,Sans-serif",
                                color: '#000D1F',
                                mt: 4
                            }}
                        >
                            {sectionData.planningTips}
                        </Typography>
                    </Box>
                </Grid>

                {/* Right Column - Service Cards */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
                        {sectionData.services.map((service, index) => (
                            <Card
                                key={service.id}
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: 3,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 } }}>
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                width: { xs: 48, sm: 60 },
                                                height: { xs: 48, sm: 60 },
                                                backgroundColor: service.color,
                                                borderRadius: 50,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}
                                        >
                                            {getIcon(service.image)}
                                        </Box>
                                        
                                        {/* Content */}
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="h6"
                                                component="h3"
                                                sx={{
                                                    fontFamily: 'Akatab,Sans-serif',
                                                    fontWeight: 500,
                                                    fontSize: { xs: '1rem', sm: '1.1rem' },
                                                    color: '#000000',
                                                    mb: 0.5
                                                }}
                                            >
                                                {service.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: 'Akatab,Sans-serif',
                                                    fontWeight: 400,
                                                    color: '#000000',
                                                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                                                    lineHeight: 1.4
                                                }}
                                            >
                                                {service.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
);
};

export default PlanningTips;