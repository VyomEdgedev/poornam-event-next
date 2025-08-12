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
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
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
                variant="body1"
                component="p"
                width="250px"
                px={2}
                frontFamily="Akatab,Sans-serif"
              >
                {`"I want a destination wedding but don't know where!" `}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              component="p"
              frontFamily="Akatab,Sans-serif"
              textAlign="center"
            >
              <strong>{`We've got suggestions.`}</strong>
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
                variant="body1"
                component="p"
                width="250px"
                px={2}
                frontFamily="Akatab,Sans-serif"
              >
                {`"Mom wants 500 guests, I want 50!" `}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              component="p"
              frontFamily="Akatab,Sans-serif"
              textAlign="center"
            >
              <strong>{`We'll negotiate for you.`}</strong>
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
                variant="body1"
                component="p"
                width="250px"
                px={2}
                frontFamily="Akatab,Sans-serif"
              >
                {`"Need someone to handle everything!" `}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              component="p"
              frontFamily="Akatab,Sans-serif"
              textAlign="center"
            >
              <strong>{`We love everything`}</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheatSheet;
