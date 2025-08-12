import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';

export default function Snapshot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process(); 
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Grid bgcolor="#FFF7E4">
      <Grid
        container
        margin="0 auto"
        padding={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} textAlign="center">
          <Typography
            component="h2"
            sx={{
              fontFamily: "Gloock,Sans-serif",
              mb: 0.5
            }}
          >
            {`Life at Poornam`}
          </Typography>

          <Typography
            component="p"
            sx={{
              fontFamily: "Akatab,Sans-serif"
            }}
            gutterBottom
          >
            {`Behind the scenes of our creative hustle.`}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 2
            }}
          >
            
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/poornamevents"
              data-instgrm-version="12"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '12px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                // margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '99.375%',
              }}
              
            ></blockquote>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
