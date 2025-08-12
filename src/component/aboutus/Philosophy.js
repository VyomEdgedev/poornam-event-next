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
        {/* First Section */}
        <Box sx={{ py: 4 }}>
          <Grid 
            container 
            spacing={{ xs: 2, sm: 4, md: 6, lg: 15}} 
            alignItems="center" 
            justifyContent="center"
          >
            {/* Title */}
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Gloock, Sans-serif",
                  mb: { xs: 2, md: 0 }
                }}
              >
               {` Our Philosophy`}
              </Typography>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="/Book.svg"
                alt="Book illustration"
                sx={{ 
                  maxWidth: "100%",
                  height: "auto",
                  padding: 2
                }}
              />
            </Grid>

            {/* Card */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                maxWidth: 400, 
                mx: "auto",
                boxShadow: 3,
                height: "100%"
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    fontFamily="Akatab, Sans-serif"
                    sx={{ mb: 2 }}
                  >
                    {`Our Humble Beginnings`}
                  </Typography>
                  <Typography
                    variant="p"
                    color="#000000"
                    fontFamily="Akatab, Sans-serif"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {`Founded by a passionate team, Poornam began
                    with the idea of bringing joy and creativity to
                    Indian weddings.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Second Section */}
        <Box sx={{ py: {xs:2,md:4} }}>
          <Grid 
            container 
            spacing={{ xs: 2, sm: 4, md: 6, lg: 15 }} 
            alignItems="center" 
            justifyContent="center"
          >
            {/* Image */}
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="/Dart.svg"
                alt="Dart illustration"
                sx={{ 
                  maxWidth: "100%",
                  height: "auto",
                  padding: 2
                }}
              />
            </Grid>

            {/* Card */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                maxWidth: 400, 
                mx: "auto",
                boxShadow: 3,
                height: "100%"
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    fontFamily="Akatab, Sans-serif"
                    sx={{ mb: 2 }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="p"
                    color="#000000"
                    fontFamily="Akatab, Sans-serif"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {`To create memorable moments filled with creativity, care, joy, and authenticity.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Title */}
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Gloock, Sans-serif",
                  mt: { xs: 2, md: 0 }
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
