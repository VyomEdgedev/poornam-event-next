import { Grid, Typography } from "@mui/material";
import React from "react";

function MagicMakers() {
  return (
    <Grid
      container
      sx={{
        height: { xs: "100px", sm: "120px", md: "150px" },
        width: "100%",
        backgroundImage: `linear-gradient(
                                rgba(0, 13, 31, 0.5),
                                rgba(0, 13, 31, 0.5)
                            ), url(/MagicMakers.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ textAlign: "center" }}>
        <Typography
          component="h2"
          sx={{
         fontFamily: "Gloock,serif",
         fontWeight:"400"
          }}
        >
          {`Meet the Magic Makers`}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: "Akatab,Sans-serif",
             fontWeight:"400"
          }}
        >
          {`The heart and soul behind your dreamy Shaadi.`}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default MagicMakers;
