import React from 'react'
import { Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CheckList() {
  return (
    <Grid container
      display="flex"
      justifyItems="center"
      alignContent="center"
      justifyContent="space-evenly"
      textAlign="left"
      padding={{xs:"30px",sm:"50px",md:"60px"}}>
      <Grid>
        <Typography variant="body1"
          component={"p"}
          sx={{ frontFamily: "Akatab,Sans-serif", fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" } }}
          dangerouslySetInnerHTML={{
            __html: `    <strong>Visit Our Studio (We Server Chai & Checklists)</strong>`,
          }}
        />
        <Typography variant="body1"
          component={"p"} sx={{ frontFamily: "Akatab,Sans-serif", fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" } }}
          dangerouslySetInnerHTML={{
            __html: `   202, 2nd Floor, Kothari Manjur, Janjeerwala Square, Near Janjeerwala Square,
          <br /> Diamond Colony, New Palasia, Indore, Madhya Pradesh 452001`,
          }}
        />


      </Grid>
      <Grid>
        <LocationOnIcon data-testid="notify-button" fontSize="large" color="primary" />
      </Grid>

    </Grid>
  )
}

export default CheckList;