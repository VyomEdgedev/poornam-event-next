import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import CustomButton from '@/common-component/button/CustomButton';
import { px } from 'framer-motion';
import { Height } from '@mui/icons-material';

export default function ContactSection() {
    const handleLetChat = () => {
    // Add your navigation or action logic here
    console.log("Let's Chat clicked");
  };
  return (
    <Box sx={{ px: 2, py: 10 }}>
      <Grid container spacing={{xs: 6, md: 25}}  justifyContent="center">
        {/* Left Text Side */}
        <Grid item xs={12} md={8} >
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Gloock, serif',
              fontWeight: 400,
              mb: 2,
              lineHeight: 1.2,
            }}
            dangerouslySetInnerHTML={{
                __html: `Get in Touch with <br />
            the Heart Behind <br />
            the Brand`,
              }}
         />
            <Typography variant="body1" sx={{ color: '#000000' ,frontFamily: "Akatab,Sans-serif", fontWeight:'400'}}>
           {` Let’s connect and make your dream wedding a reality.`}
          </Typography>
        </Grid>

        {/* Right Form Side */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: {xs: '100%', md: '600px'},
            }}
          >
            <Box> 
              <Typography variant="body2" sx={{ mb: 0.5 ,frontFamily: "Akatab,Sans-serif", fontWeight:'500', color:'#000000'}}>
             {` Your Name`}
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your name"
                variant="outlined"
                size="small"
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 ,frontFamily: "Akatab,Sans-serif", fontWeight:'500', color:'#000000'}}>
             {`   Your Message`}
              </Typography>
              <TextField
                fullWidth
                placeholder="How can we help you?"
                variant="outlined"
                size="small"
                multiline
                rows={3}
              />
            </Box>
            <CustomButton    data-testid="notify-button" onClick={handleLetChat} sx={
              {mt:1}
            }>{`Let's Chat`}</CustomButton>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
