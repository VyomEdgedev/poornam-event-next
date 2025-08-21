import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function Philosophy() {
  return (
    <>
      <Container>
        {/* First Section */}
        <Box sx={{ py: { xs: 4, md: 4 } }}>
          <Grid
            container
           
            columns={{ xs: 12, sm: 12, md: 12 }}
            alignItems="center"
            justifyContent="space-between"
            justifyItems="center"
          >
            {/* Title */}
            <Grid
              item
              size={{ xs: 12, sm: 12, md: 4 }}
              sx={{ textAlign:  "center"  }}
            >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Gloock, serif",
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                {` Our Philosophy`}
              </Typography>
            </Grid>

            {/* Image */}
            <Grid
              item
              size={{ xs: 12, sm: 12, md: 4 }}
              sx={{ textAlign: "center" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "130px", sm: "160px", md: "200px" },
                  height: { xs: "130px", sm: "160px", md: "200px" },
                  margin: "0 auto",
                }}
              >
                <Image
                  src="/Book.svg"
                  alt="Book illustration"
                  fill
                  style={{
                    objectFit: "contain",
                    padding: "16px",
                  }}
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                />
              </Box>
            </Grid>

            {/* Card */}
            <Grid item size={{ xs: 12, sm: 12, md: 4 }} justifyItems={"center"}>
              <Card
                sx={{
                  boxShadow: 3,
                  height: "100%",
                  marginLeft: { sm: 0, md: 5 },
                 margin: "0 auto",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    component="h5"
                    fontWeight="700"
                    gutterBottom
                    fontFamily="Akatab, Sans-serif"
                    color="#000000"
                    sx={{ mb: 2 }}
                  >
                    {`Our Humble Beginnings`}
                  </Typography>
                  <Typography
                    component="p"
                    color="#000000"
                    fontFamily="Akatab, Sans-serif"
                    fontWeight="400"
                    
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
        <Box sx={{ py: { xs: 0.3, sm: 0.5, md: 1 } }} mb={3}>
          <Grid
            container
            spacing={{ xs: 0.5, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            alignItems="center"
            justifyContent="center"
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
          >
            {/* Image */}
            {/* Card */}
            <Grid item size={{ xs: 12, sm: 12, md: 4 }}>
              <Card
                sx={{
                  boxShadow: 3,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    component="h5"
                    fontWeight="700"
                    gutterBottom
                    fontFamily="Akatab, Sans-serif"
                    // sx={{ mb: 2 }}
                  >
                    {`  Our Mission`}
                  </Typography>
                  <Typography
                    component="p"
                    color="#000000"
                    fontFamily="Akatab, Sans-serif"
                    fontWeight="400"
                  >
                    {`To create memorable moments filled with creativity, care, joy, and authenticity.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item size={{ sm: 12, md: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "130px", sm: "160px", md: "200px" },
                  height: { xs: "130px", sm: "160px", md: "200px" },
                  margin: "0 auto",
                }}
              >
                <Image
                  src="/Dart.svg"
                  alt="Dart illustration"
                  fill
                  style={{
                    objectFit: "contain",
                    padding: "16px",
                  }}
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                />
              </Box>
            </Grid>

            {/* Title */}
            <Grid
              item
              size={{ xs: 12, sm: 12, md: 4 }}
              sx={{ textAlign: "center", flexDirection: "column-reverse" }}
            >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Gloock, serif",
                  fontWeight: "400",
                  // mt: { xs: 1, md: 0 },
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
