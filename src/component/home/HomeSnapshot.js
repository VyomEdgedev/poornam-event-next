

import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import SnapshotCard from '../../common-component/SpanshotCard/SnapshotCard';

export default function   Snapshot() {
    useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.instagram.com/embed.js');
    script.setAttribute('async', '');
    document.body.appendChild(script);
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);
  return (
  <Grid  bgcolor="#FFFAED"
  padding="2%"> 
       
    <Grid
      container
      textAlign="center"
      width="fit-content"
      margin="0 auto"
      
    >
      <Grid>
        <Typography
        vaeriant="h2"
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
          variant="body1"
          component={"p"}
          gutterBottom
        >
        {`  A scrapbook of memories shared by our couples.`}
        </Typography>

   <SnapshotCard 
         
          avatarSrc="/logo.png"
          title="Poornam Events"
          Subtitles="2 days ago at Udaipur"
          imageSrc="/snapshot.jpg"
          caption="Every detail was perfectly curated!"
           tags={['#WeddingGoals', '#PerfectDay']}

          
        />
           {/* <div style={{ maxWidth: '540px', margin: 'auto', marginTop: '20px' }}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/poornamevents"
              data-instgrm-version="12"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: 3,
                boxShadow:
                  '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '99.375%',
              }}
            ></blockquote>
          </div> */}
      </Grid>
    </Grid>
  </Grid>
  );
}
