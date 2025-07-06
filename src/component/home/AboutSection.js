import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";

export default function AboutSection() {
  return (
    <Box sx={{ bgcolor: "#fff", marginTop: "10px", marginBottom: "10px" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontFamily: `'Playfair Display', serif`,
            fontWeight: "bold",
            color: "#0D1A46",
            mb: 3,
            textAlign: "center",
          }}
        >
          Crafting Weddings with Soul Since 2017
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontSize: "1rem",
            lineHeight: 1.75,
            textAlign: "center",
            mb: 2,
          }}
        >
          At Poonam Events, we turn your wedding dreams into unforgettable
          memories. Founded by <strong>Aadi Jain</strong>, a self-taught planner
          with a passion for perfection, and <strong>Richi Anand Jain</strong>,
          the creative spirit behind our signature style — we've been planning
          heartfelt celebrations across India since 2017.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontSize: "1rem",
            lineHeight: 1.75,
            textAlign: "center",
            mb: 4,
          }}
        >
          From intimate gatherings to grand destination weddings, our team
          brings emotion, elegance, and flawless execution to every event.
        </Typography>

        <Box display="flex">
          <CustomButton> Meet Our Story</CustomButton>
        </Box>
      </Container>
    </Box>
  );
}
