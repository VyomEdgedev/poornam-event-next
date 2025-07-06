// components/HeroSection.js
"use client";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box
    sx={{
                backgroundImage: 'url("/ConnectUsBanner.png")',
                backgroundSize: 'cover',         // or 'contain'
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '500px',                // must give height
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'

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
                color: "##FFFFFF",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem", 
                
                },
              }}
              gutterBottom
            >
              Let's Make Shaadi Magic Together!
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#FFF5D9", mb: 2, fontWeight: 300 ,
                 fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem", }
              }}
            >
              From Planning to "I do", we've got your back!
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <Button
                variant="contained"
                sx={{ bgcolor: "#DAA412", color: "white", borderRadius: "15px",padding:"7px 30px" }}
              >
                Plan My Wedding
              </Button>

            </Stack>
          </Box>

          
        
        </Box>
      </Container>
    </Box>
  );
}
