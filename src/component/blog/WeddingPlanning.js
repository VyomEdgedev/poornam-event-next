import React, { useState } from 'react';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import CustomButton from '@/common-component/button/CustomButton';
import { useMediaQuery, useTheme } from '@mui/material';
import ConnectModal from '@/common-component/modal/ConnectModal';




export default function WeddingPlanning() {
  const [open, setOpen] = useState(false)
  const isBelow1150 = useMediaQuery('(max-width:1150px),(spacing:50px)');

  const responsiveSpacing = isBelow1150
    ? { xs: 3, sm: 2, md: 5, lg: 6, xl: 8 }   // spacing when screen is small
    : { xs: 3, sm: 2, md:  5, lg: 6, xl: 8}; // spacing when screen is large 

    const handleWeddingPlan = () => {
    setOpen(true)
  };

  return (
    <Box> <Container sx={{ py: { xs: 4, sm: 4, md: 4 }, px: { xs: 2, sm: 0, md: 0,lg:0, xl: 0 }  }}>
      <ConnectModal open={open} setOpen={setOpen} />
      <Grid
        container
        spacing={responsiveSpacing}
        alignItems={isBelow1150 ? 'center' : "center"}
        justifyContent={isBelow1150 ? 'center' : 'center'}
        direction={{ xs: 'column', sm: "row", md: 'row', lg: 'row', xl: 'row' }}
      >
        {/* Text Content */}
        <Grid item xs={12} sm={8} md={4} lg={4}  >
          <Box>
            <Typography variant="h2" component="h2" fontWeight={400} sx={{ fontFamily: 'Gloock, serif', color: "#000000" }}>
              {` Shaadi Ki Planning?`}
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              fontWeight={400}
              color="#DAA412"
              sx={{ fontFamily: 'Gloock, serif', }}
            >
              {` Gyaan Bhi, Fun Bhi!`}
            </Typography >
            <Typography
              variant="body1"
              component="p"
              sx={{ mb: 3, color: '#000000', maxWidth:{ xs: '530px', sm: '450px', md: '350px', lg: '500px', xl: '530px'}, frontFamily: "Akatab,Sans-serif", fontWeight: '400' }}
            >
              {`  Welcome to the only wedding blog that understands your vibe, your chaos, and your cousin who always wants to dance at haldi. From serious planning tips to hilarious shaadi stories, we’ve written it all — with love, dhol, and a bit of dholak.`}
            </Typography>
            <CustomButton onClick={handleWeddingPlan} data-testid="notify-button" >{`Start Planning`}</CustomButton>

          </Box>
        </Grid>

        {/* Image Content */}
        <Grid item xs={12} sm={8} md={6}>
          <Box
            component="img"
            src="./weddingplanning.jpg"
            alt="Wedding Planning"
            sx={{
              width: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%' },
              height: { xs: '400px', sm: '340px', md: '300px', lg: '400px', xl: '400px' },
              borderRadius: 2,
              boxShadow: 3,
              display: 'block',
              mx: 'auto'
            }}
            // <p><em>Hello</em>, <span style="text-decoration: underline;"><strong>World!</strong></span></p>

            onError={(e) => {
              e.target.onerror = null;
            }}
          />
        </Grid>
      </Grid>
    </Container>
    </Box>

  );
}

