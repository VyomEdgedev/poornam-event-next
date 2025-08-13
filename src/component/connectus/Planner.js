import { Grid, Typography, Divider, Container, Box } from "@mui/material";
import React from "react";

function Planner() {
  return (
    <>
      <Box sx={{ backgroundColor: "#0D2650", py: 2 }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            alignItems={"center"}
          >
            <Grid
              size={{ xs: 6, sm: 6, md: 3 }}
              px={{ xs: 1, sm: 4 }}
              py={1}
              sx={{ borderRight: "3px solid #D7A10F" }}
            >
              <Typography
             
                variant="h6"
                sx={{
                  fontFamily: "Akatab,serif",
                  fontWeight:"600",
                  textAlign: "center",
                  color: "#D7A10F",
                }}
              >
                {`Wedding Planner in Indore`}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 6, sm: 6, md: 3 }}
              px={{ xs: 1, sm: 4 }}
              py={1}
              sx={{ borderRight: { md: "3px solid #D7A10F" } }}
            >
              <Typography
               
                component="h6"
                sx={{
                  fontFamily: "Akatab,serif",
                  fontSize: { xs: "16px", sm: "16px", md: "20px" },
                  textAlign: "center",
                  color: "#D7A10F",
                   fontWeight:"600",
                }}
              >
                {`Wedding Planner Near Me`}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 6, sm: 6, md: 3 }}
              px={{ xs: 1, sm: 4 }}
              py={1}
              sx={{ borderRight: "3px solid #D7A10F" }}
            >
              <Typography
               
                component="h6"
                sx={{
                  fontFamily: "Akatab,serif",
                  fontSize: { xs: "16px", sm: "16px", md: "20px" },
                  textAlign: "center",
                  color: "#D7A10F",
                   fontWeight:"600",
                }}
              >
                {`Bhopal Wedding Planners`}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 6, sm: 6, md: 3 }}
              px={{ xs: 1, sm: 4 }}
              py={1}
              //   sx={{ borderRight: "3px solid #D7A10F" }}
            >
              <Typography
              
                component="h6"
                sx={{
                  fontFamily: "Akatab,serif",
                  fontSize: { xs: "16px", sm: "16px", md: "20px" },
                  textAlign: "center",
                  color: "#D7A10F",
                   fontWeight:"600",
                }}
              >
                {`Ujjain Shaadi Experts`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid
          container
          padding="0px"
          textAlign="center"
          sx={{ bgcolor: "#rgba(0, 0, 0, 0.1)" }}
        >
          <Typography
          
            variant="h6"
            // component="h6"
            textAlign="center"
            sx={{
              padding: "25px",
              fontFamily: "Akatab,serif",
             fontWeight:"400",
            }}
            // dangerouslySetInnerHTML={{
            //   __html: `  `,
            // }}
          >
             Planning a wedding in <strong>Madhya Pradesh</strong> or anywhere in <strong>India? </strong>Let <strong>
                        Poornam Events</strong> be your trusted partner in joy, chaos, and celebration.
            </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default Planner;
