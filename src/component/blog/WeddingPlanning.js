import React from 'react';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import CustomButton from '@/common-component/button/CustomButton';

export default function WeddingPlanning() {
  return (
    <Container sx={{ py: { xs: 4, md: 4 } }}>
      <Grid 
        container 
        spacing={10} 
        alignItems="center" 
        direction={{ xs: 'column', md: 'row' }}
      >
        {/* Text Content */}
        <Grid item xs={12} md={4}  >
          <Box>
            <Typography variant="h4" component="h2" fontWeight={400} sx={{ fontFamily: 'Gloock, serif', color:"#000000" }}>
              Shaadi Ki Planning?
            </Typography>
            <Typography 
              variant="h4" 
              component="h3" 
              fontWeight={400} 
              color="#DAA412" 
              sx={{ fontFamily: 'Gloock, serif',}}
            >
              Gyaan Bhi, Fun Bhi!
            </Typography >
            <Typography 
              variant="body1" 
              sx={{ mb: 3, color: '#000000', maxWidth: 530, frontFamily: "Akatab,Sans-serif", fontWeight:'400'  }}
            >
              Welcome to the only wedding blog that understands your vibe, your chaos, and your cousin who always wants to dance at haldi. From serious planning tips to hilarious shaadi stories, we’ve written it all — with love, dhol, and a bit of dholak.
            </Typography>
            <CustomButton   data-testid="notify-button" >Start Planning</CustomButton>
           
          </Box>
        </Grid>

        {/* Image Content */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="./weddingplanning.jpg"
            alt="Wedding Planning"
            sx={{
              width: '100%',
              height: '400px',
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
  );
}

