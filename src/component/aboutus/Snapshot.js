import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import SnapshotCard from '../../common-component/SpanshotCard/SnapshotCard';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Snapshot() {
 
    useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.instagram.com/embed.js');
    script.setAttribute('async', '');
    document.body.appendChild(script);
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);
  const isBelow1150 = useMediaQuery('(max-width:1150px),(spacing:50px)');
  const responsiveSpacing = isBelow1150
    ? { xs: 2, sm: 1 }   // spacing when screen is small
    : { xs: 2, sm: 1, md: 8 }; // spacing when screen is large

  return (
    <Grid bgcolor="#FFF7E4">
      <Grid
        container
        textAlign="center"
        width="fit-content"
        margin="0 auto"
        padding={2}
        spacing={responsiveSpacing}
        alignItems={isBelow1150 ? 'center' : "center"}
        justifyContent={isBelow1150 ? 'center' : 'center'}
        sx={{ width: { xs: '100%', sm: '100%', md: '70%' } }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2.5rem" },
              fontFamily: "Gloock,Sans-serif"
            }}
            variant="h3"

            gutterBottom
          >
            {`  Life at Poornam`}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" },
              fontFamily: "Akatab,Sans-serif"
            }}
            variant="subtitle1"
            gutterBottom
          >
            {`  Behind the scenes of our creative hustle.`}
          </Typography>

          {/* <SnapshotCard
            avatarSrc="/logo.png"
            title="Team Poornam Events"
            imageSrc="/snapshot2.png"
            caption="Laughter, chai, and dance practice!"

          /> */}

<div style={{ maxWidth: '540px', margin: 'auto', marginTop: '20px' }}>
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
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
