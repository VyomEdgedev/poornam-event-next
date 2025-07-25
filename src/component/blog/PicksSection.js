import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';


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
    ? { xs: 2, sm: 2 , md:2, lg:2,xl:6}   // spacing when screen is small
    : { xs: 2, sm: 1, md: 2, lg: 2, xl: 6}; // spacing when screen is large

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Grid container spacing={responsiveSpacing}
        alignItems={isBelow1150 ? 'center' : "center"}
        justifyContent={isBelow1150 ? 'center' : 'center'}>

        <Grid item xs={12} md={5}>
          <Box sx={{ pr: { md: 4 } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
                fontFamily: 'Gloock,serif',
                fontWeight: 400,
                lineHeight: 1.2,
                mb: 2,
                color: '#000000'
              }}
            >
              {picksData.title}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.95rem', sm: '0.95rem', md: '1rem' },
                fontWeight: 400,
                fontFamily: "Akatab,Sans-serif",
                lineHeight: 1.2,
                width: { xs: '100%', md: '75%' },
                mb: { xs: 4, md: 0 }
              }}
            >
              {picksData.subtitle}
            </Typography>
          </Box>
        </Grid>

        <Grid

          item xs={12} md={7}>
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
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', sm: 140, md: 140 },
                    height: { xs: 200, sm: 120 },
                    objectFit: 'cover',
                    borderRadius: { xs: 0, sm: '8px 0 0 8px' }
                  }}
                  image={item.image}
                  alt={item.title}
                />
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
                      fontSize: { xs: '16px', sm: '16px', md: '18px' },
                      fontWeight: 600,
                      fontFamily: "Akatab,Sans-serif",
                      mb: 0.70,

                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1,
                      fontSize: { xs: '0.85rem', sm: '0.85rem', md: '0.95rem' },
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