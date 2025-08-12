import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

function CheatSheet() {
  return (
    <Container sx={{ py: 3 }}>
      <Box>
        <Typography
          variant="h2"
          textAlign={"center"}
          sx={{
           fontWeight:"400",
            fontFamily: "Gloock, serif",
          }}
        >
          {`Still Confused?`}
          <br />
          {` Here's a Cheat Sheet`}
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
        mt={4}
        justifyContent={"center"}
      >
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid>
                <Image
                  src="/Cloud.svg"
                  alt="Sample"
                  width={70}
                  height={70}
                  alignItems="center"
                />
              </Grid>
              <Typography
               
                component="p"
                width="250px"
                px={2}
                fontFamily="Akatab,Sans-serif"
                fontWeight={600}
              >
                {`"I want a destination wedding but don't know where!" `}
              </Typography>
            </Box>
            <Typography
              fontWeight={800}
              component="p"
              fontFamily="Akatab,Sans-serif"
              textAlign="center"
                color="#000D1F"
            >
              {`We've got suggestions.`}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid>
                <Image
                  src="/Cloud.svg"
                  alt="Sample"
                  width={70}
                  height={70}
                  alignItems="center"
                />
              </Grid>
              <Typography
                fontWeight={600}
                component="p"
                width="250px"
                px={2}
                fontFamily="Akatab,Sans-serif"
              >
                {`"Mom wants 500 guests, I want 50!" `}
              </Typography>
            </Box>
            <Typography
              fontWeight={800}
              component="p"
                color="#000D1F"
              fontFamily="Akatab,Sans-serif"
              textAlign="center"
            >
              {`We'll negotiate for you.`}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid>
                <Image
                  src="/Cloud.svg"
                  alt="Sample"
                  width={70}
                  height={70}
                  alignItems="center"
                />
              </Grid>
              <Typography
                 fontWeight={600}
                component="p"
                width="250px"
                px={2}
                fontFamily="Akatab,Sans-serif"
              >
                {`"Need someone to handle everything!" `}
              </Typography>
            </Box>
            <Typography
              fontWeight={800}
              color="#000D1F"
              component="p"
              fontFamily="Akatab,Sans-serif"
              textAlign="center"
            >
              {`We love everything`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheatSheet;
