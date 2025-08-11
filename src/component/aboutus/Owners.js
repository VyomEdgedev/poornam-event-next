import React from "react";
import { Grid, Card, Box, Typography, Container } from "@mui/material";
import Image from "next/image";

const owners = [
  {
    image: "/AadiJain.png",
    alt: "Aadi Jain",
    headline: "Aadi Jain - The Visionary (Founder & Creative Director)",
    description:
      "The calm in your chaos, the brain behind every baraat. Swati's superpower? Turning Pinterest boards into physical mandaps, without breaking the bank or a sweat.",
  },
  {
    image: "/RichiAnandJain.png",
    alt: "Richi Anand Jain",
    headline: "Richi Anand Jain - CEO",
    description:
      "He once planned a wedding where the horse fainted. He had a backup in 22 minutes. Enough said.",
  },
];

function OwnerCard({ image, alt, headline, description }) {
  return (
    <Card
      sx={{
        width: { xs: 360, sm: 350, md: 450, lg: 500 },
        height: { xs: 400, sm: 400, md: 500, lg: 550 },
        position: "relative",
        mx: { xs: "auto", sm: 0 },
        mt: { xs: 2, sm: 0 },
      }}
    >
      <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} priority />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          px: { xs: 1, md: 4 },
          py: { xs: 1.5, md: 2.5 },
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0) 70%)",
          }}>
        <Box>
          <Typography
            variant="h5"
            color="white"
            sx={{  fontFamily: "Akatab,Sans-serif" }}
          >
            <strong>{headline}</strong>
          </Typography>
          <Typography
            color="white"
            sx={{  fontFamily: "Akatab,Sans-serif" }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default function Owners() {
  return (
    <Container sx={{ py: { xs: 5, sm: 4, md: 5 } }}>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3 }}
        columnSpacing={{ sm: 2, md: 3, lg: 5 }}
        justifyContent={{ xs: "center", sm: "center", md: "center", lg: "flex-start" }}
      >
        {owners.map((owner) => (
          <Grid key={owner.alt} item xs={12} sm={"auto"}>
            <OwnerCard {...owner} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
