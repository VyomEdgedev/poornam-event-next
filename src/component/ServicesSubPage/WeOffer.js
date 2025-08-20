import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

function WeOffer({ categoriesId }) {
  const categories = categoriesId;
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        bgcolor: "#FFF7E4",
      }}
    >
      <Container>
        <Box textAlign="center" px={{ xs: "5%", sm: "10%", md: "15%" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Gloock",
            }}
          >
            {`What's inside Your 'Shaadi ka Pitara'?`}
          </Typography>

          <Grid
            container
            spacing={4}
            columns={{ xs: 12, sm: 12, md: 12 }}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            {categories.map((service, index) => (
              <Grid
                item
                size={{ xs: 12, sm: 4, md: 6 }}
                key={service.id || index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box textAlign="center">
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      border: "2px solid #DAA412",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={service.image?.url || "/Weoffer1.svg"}
                      alt={service.name}
                      width={100}
                      height={100}
                      objectFit="contain"
                    />
                  </Box>
                  <Box sx={{ padding: "10px" }}>
                    <Typography
                      component="h6"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Akatab,Sans-serif",
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      component="p"
                      color="#000000"
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "180px",
                          md: "200px",
                          lg: "100%",
                        },
                        fontFamily: "Akatab,Sans-serif",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default WeOffer;
