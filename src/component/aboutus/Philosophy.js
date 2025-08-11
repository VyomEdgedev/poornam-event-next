import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import React from "react";

function Philosophy() {
  return (
    <>
      <Container>
        <Box>
          <Grid container display="flex" justifyContent="space-between">
            <Grid container padding="30px">
              <Typography
                variant="h2"
                sx={{
                  alignSelf: "center",
                  fontFamily: "Gloock,Sans-serif ",
                }}
              >
                {` Our Philosophy`}
              </Typography>
            </Grid>

            <Grid
              container
              component="img"
              src="/Book.svg"
              alt="Sample"
              alignItems="center"
              sx={{ padding: "30px" }}
            />
            <Grid>
              <Card sx={{ maxWidth: 400, m: 2, p: 2, boxShadow: 3 }}>
                <CardContent>
                  {/* Main title text */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    fontFamily="Akatab,Sans-serif"
                  >
                    {`   Our Humble Beginnings`}
                  </Typography>

                  {/* Supporting description text */}
                  <Typography
                    variant="p"
                    color="#000000"
                    fontFamily="Akatab,Sans-serif"
                  >
                    {` Founded by a passionate team, Poornam began
                                    with the idea of bringing joy and creativity to
                                    Indian weddings.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid
            container
            display="flex"
            justifyContent="space-between"
            justifyItems="center"
            mt={5}
          >
            <Grid
              container
              component="img"
              src="/Dart.svg"
              alt="Sample"
              alignItems="center"
              sx={{ padding: "30px" }}
            />
            <Grid>
              <Card sx={{ maxWidth: 400, m: 2, p: 2, boxShadow: 3 }}>
                <CardContent>
                  {/* Main title text */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    fontFamily="Akatab,Sans-serif"
                  >
                    {`  Our Mission`}
                  </Typography>

                  {/* Supporting description text */}
                  <Typography
                    variant="p"
                    color="#000000"
                    fontFamily="Akatab,Sans-serif"
                  >
                    {`  To create memorable moments filled with creativity, care, joy, and authenticity.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid container padding="30px">
              <Typography
                variant="h2"
                sx={{
                  alignSelf: "center",
                  fontFamily: "Gloock,Sans-serif",
                }}
              >
                {`Why We Exist`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Philosophy;
