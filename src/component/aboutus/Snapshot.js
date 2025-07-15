

import React from 'react';
import { Grid, Typography } from '@mui/material';
import SnapshotCard from '../../common-component/SpanshotCard/SnapshotCard';

export default function Snapshot() {
  return (
    <Grid
      container
      textAlign="center"
      width="fit-content"
      margin="0 auto"
      bgcolor="#FFFCF5"
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

        <SnapshotCard
          avatarSrc="/images/profile.jpg"
          title="Team Poornam"
          imageSrc="/snapshot2.png"
          caption="Laughter, chai, and dance practice!"
        />
      </Grid>
    </Grid>
  );
}
