import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Image from 'next/image';


const picksData = {
  title: "Poornam Picks",
  subtitle: "Check out our editor's favorites, real wedding highlights, and guest insights!",
  items: [
    {
      id: 1,
      title: "Editor's Picks",
      description: "The best from our team for you.",
      image: "./pick1.png",
      category: "editorial"
    },
    {
      id: 2,
      title: "Real Wedding Highlights",
      description: "Unique experiences from real couples.",
      image: "./pick2.png",
      category: "wedding"
    },
    {
      id: 3,
      title: "Guest Interactions",
      description: "Tips and tricks from those who've attended.",
      image: "./pick3.png",
      category: "guest"
    }
  ]
};

const PicksSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isBelow1150 = useMediaQuery('(max-width:1150px),(spacing:50px)');
  const responsiveSpacing = isBelow1150
    ? { xs: 2, sm: 2 , md:0, lg:2,xl:6}   // spacing when screen is small
    : { xs: 2, sm: 1, md: 0, lg: 2, xl: 6}; // spacing when screen is large

  return (
    <Container sx={{ py: 6 }}>
      <Grid
      container 
    
      spacing={{ xs: 2, sm: 2.2, md: 4.25,  xl: 17 }}
      columns={{ xs: 12, sm: 12, md: 12 }}
      // spacing={responsiveSpacing}
        // alignItems={isBelow1150 ? 'center' : "center"}
        // justifyContent={isBelow1150 ? 'center' : 'center'}
        
        >

        <Grid item size={{ xs: 12, sm: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ 
            textAlign: 'center',
          }}>
            <Typography
            component="h1"
              sx={{
                fontFamily: 'Gloock,serif',
                fontWeight: 400,
                lineHeight: 1.2,
                mb: 2,
                color: '#000000',
                textAlign: { xs: 'center', md: 'center', lg: 'left' }
              }}
            >
              {picksData.title}
            </Typography>
            <Typography
              component="p"
              color="#000000"
              sx={{
                fontWeight: 400,
                fontFamily: "Akatab,Sans-serif",
                width: { xs: '100%', md: '100%', lg: '100%' },
                textAlign: { xs: 'center', md: 'center', lg: 'left' },
                mb: { xs: 4, md: 2, lg: 4 },
                lineHeight: 1.4
              }}
            >
              {picksData.subtitle}
            </Typography>
          </Box>
        </Grid>

        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {picksData.items.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: theme.shadows[4],
                    transform: 'translateY(-2px)'
                  },
                  cursor: 'pointer'
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: '100%', sm: 140, md: 140 },
                    height: { xs: 200, sm: 120 },
                    borderRadius: { xs: 0, sm: '8px 0 0 8px' },
                    overflow: 'hidden',
                    flexShrink: 0
                  }}
                >
                  <Image
                    src={item.image?.startsWith('./') ? item.image.replace('./','/') : item.image}
                    alt={item.title}
                    fill
                    // sizes="(max-width: 600px) 100vw, 140px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flex: 1,
                    p: 3,
                    '&:last-child': { pb: 3 },
                    cursor: 'pointer'
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{
                      
                      fontWeight: 600,
                      fontFamily: "Akatab,Sans-serif",
                      mb: 0.70,

                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography                
                    component="p"
                    color="#000000"
                    sx={{
                      lineHeight: 1,
                      fontWeight: 400,
                      fontFamily: "Akatab,Sans-serif",
                      color: '#000000'
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PicksSection;