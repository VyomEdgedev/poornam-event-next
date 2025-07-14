

import React from 'react';
import { Grid, Typography } from '@mui/material';
import SnapshotCard from '../../common-component/SpanshotCard/SnapshotCard';

export default function Snapshot() {
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
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2.5rem" },

            fontWeight:"400",
            fontFamily: "Gloock, serif"
          }}
          variant="h3"
          fontWeight="bold"
        >
        {`  Snapshots from the Script`}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
            fontFamily: "Akatab,Sans-serif"
          }}
          variant="subtitle1"
          gutterBottom
        >
        {`  A scrapbook of memories shared by our couples.`}
        </Typography>

        <SnapshotCard
          avatarSrc="/images/profile.jpg"
          title="Priya"
          Subtitles="2 days ago at Udaipur"
          imageSrc="/snapshot.jpg"
          caption="Every detail was perfectly curated!"
           tags={['#WeddingGoals', '#PerfectDay']}
        />
      </Grid>
    </Grid>
  </Grid>
  );
}
