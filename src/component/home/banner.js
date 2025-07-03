// components/HeroSection.js
"use client";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#030b1d",
        pt: { xs: 6, sm: 10, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: "space-between",
            gap: 4,
            padding: "20px"
          }}
        >


          {/* Text Section */}
          <Box flex={1} display="flex" flexDirection="column" justifyContent="center">
            <Box mb={2} sx={{ display: { xs: "none", md: "block" } }}>
              <Image src={"/logo.png"} alt="Logo" width={150} height={150} />

            </Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                color: "#f4ce6a",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
              }}
              gutterBottom
            >
              Shaadiyaan Banti Hain Yaadon Se...
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", mb: 2, fontWeight: 300 }}
            >
              Let’s Make Yours Legendary
            </Typography>
            <Typography
              sx={{ color: "#ccc", fontSize: "0.95rem", mb: 3 }}
            >
              Luxury meets laughter, chaos choreographed-beautiful weddings across
              Indore, Bhopal & Jabalpur.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <Button
                variant="contained"
                sx={{ bgcolor: "#f4ce6a", color: "black" }}
              >
                Plan My Wedding
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
              >
                Talk to Our Planner
              </Button>
            </Stack>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              overflow: "hidden",
              borderRadius: 2,


            }}
          >
            <Image
              src={"/sadhi.png"}
              alt="Bridal Hero"
              width={1200}
              height={1600}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                borderRadius: "12px",
                transform: 'scaleX(-1)',

              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
