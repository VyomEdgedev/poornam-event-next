import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SnapshotCard from '../../common-component/SpanshotCard/SnapshotCard';

export default function   Snapshot() {
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
  <Grid  bgcolor="#FFFAED" pt={3}> 
       
    <Grid
      container
      textAlign="center"
      width="fit-content"
      margin="0 auto"
      
    >
      <Grid>
        <Typography
        component="h2"
          sx={{
            fontWeight:"400",
            fontFamily: "Gloock, serif"
          }}
          
          fontWeight="bold"
        >
        {`  Snapshots from the Script`}
        </Typography>

        <Typography
          sx={{
          fontFamily: "Akatab,Sans-serif"
          }}
          component="p"
          gutterBottom
        >
        {`  A scrapbook of memories shared by our couples.`}
        </Typography>

   {/* <SnapshotCard 
         
          avatarSrc="/logo.png"
          title="Poornam Events"
          Subtitles="2 days ago at Udaipur"
          imageSrc="/snapshot.jpg"
          caption="Every detail was perfectly curated!"
           tags={['#WeddingGoals', '#PerfectDay']}

          
        /> */}
         <Box id="instagram-embed" sx={{ marginTop: 5, }}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DNNj2zcz2gp/?igsh=aWZjeTg5M3RwbHRo"
              data-instgrm-version="12"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: 3,
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: 540,
                minWidth: 326,
                padding: 0,
                width: "100%",
                maxHeight: "100%",
              }}
            >
              <a
                href="https://www.instagram.com/reel/DNNj2zcz2gp/?igsh=aWZjeTg5M3RwbHRo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3897f0", fontWeight: 550 }}
              >
                View this post on Instagram
              </a>
            </blockquote>
            
          </Box>
      </Grid>
    </Grid>
  </Grid>
  );
}
