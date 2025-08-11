import { Grid, Typography, Divider } from "@mui/material";
import React from "react";

function Planner() {
  return (
    <>
      <Grid
        container
        display="flex"
        // justifyContent="space-evenly"
        justifyItems="center"
        justifyContent={{ xs: "center", sm: "center", md: "center" }}
        sx={{ bgcolor: "#0D2650", color: "#D7A10F" }}
        padding={{ xs: "10px", sm: "20px", md: "20px" }}
      >
        <Grid>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontFamily: "Akatab,serif",
              fontSize: { xs: "16px", sm: "16px", md: "20px" },
              width: { xs: "100px", sm: "150px", md: "200px" },
              textAlign: "center",
              paddingLeft: { xs: "0px", sm: "5px", md: "10px" },
              marginLeft: {
                xs: "5px",
                sm: "5px",
                md: "10px",
                lg: "-100px",
                xl: "-120px",
              },
            }}
          >
            {`Wedding Planner in Indore`}
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 1,
            height: { xs: "70px", sm: "60px", md: "60px" },
            backgroundColor: "#FFE6A3",
            width: "2px",
            marginLeft: {
              xs: "0px",
              sm: "5px",
              md: "10px",
              lg: "50px",
              xl: "50px",
            },
          }}
        />
        <Grid>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontFamily: "Akatab,serif",
              fontSize: { xs: "16px", sm: "16px", md: "20px" },
              width: { xs: "70px", sm: "150px", md: "200px" },
              // paddingLeft:{xs:"0px",sm:"10px",md:"20px"},
              marginLeft: {
                xs: "0px",
                sm: "5px",
                md: "10px",
                lg: "50px",
                xl: "50px",
              },
              textAlign: "center",
            }}
          >
            {`Wedding Planner Near Me`}
          </Typography>
        </Grid>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 1,
            height: { xs: "70px", sm: "60px", md: "60px" },
            backgroundColor: "#FFE6A3",
            width: "2px",
            marginLeft: {
              xs: "5px",
              sm: "10px",
              md: "10px",
              lg: "50px",
              xl: "50px",
            },
          }}
        />
        <Grid>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontFamily: "Akatab,serif",
              fontSize: { xs: "16px", sm: "16px", md: "20px" },
              width: { xs: "70px", sm: "150px", md: "200px" },

              textAlign: "center",
            }}
          >
            {`Bhopal Wedding Planners`}
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 1,
            height: { xs: "70px", sm: "60px", md: "60px" },
            backgroundColor: "#FFE6A3",
            width: "2px",
            marginLeft: {
              xs: "0px",
              sm: "10px",
              md: "10px",
              lg: "50px",
              xl: "50px",
            },
          }}
        />
        <Grid>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontFamily: "Akatab,serif",
              fontSize: { xs: "16px", sm: "16px", md: "20px" },
              width: { xs: "70px", sm: "130px", md: "180px" },
              marginLeft: {
                xs: "0px",
                sm: "0px",
                md: "10px",
                lg: "20px",
                xl: "20px",
              },
              textAlign: "center",
            }}
          >
            {`Ujjain Shaadi Experts`}
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ paddingTop: "20px" }}></Grid>
      <Grid
        container
        padding="0px"
        marginLeft={{
          xs: "0px",
          sm: "0px",
          md: "0px",
          lg: "280px",
          xl: "260px",
        }}
        textAlign="center"
        sx={{ bgcolor: "#rgba(0, 0, 0, 0.1)" }}
      >
        <Typography
          variant="h6"
          component="h6"
          textAlign="center"
          width={{
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "900px",
            xl: "1090px",
          }}
          sx={{
            padding: "25px",
            fontFamily: "Akatab,serif",
            fontSize: { xs: "18px", sm: "16px", md: "21px" },
          }}
          dangerouslySetInnerHTML={{
            __html: `   Planning a wedding in <strong>Madhya Pradesh</strong> or anywhere in <strong>India?</strong>Let <strong>
                        Poornam Events</strong> be your trusted partner in joy, chaos, and celebration.`,
          }}
        />
      </Grid>
    </>
  );
}

export default Planner;
