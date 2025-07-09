import React from "react";
import Link from "next/link";
import { Box, Typography, Button, Container } from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";

export default function AboutSection() {
  return (
    <Box sx={{
      bgcolor: "#fff", marginTop: "10px", marginBottom: "10px", py: { xs: 1, md: 2 },
      px: { xs: 2, md: 7 },
    }}>

      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Gloock, serif',
          fontWeight: "400",
          color: "#0D1A46",
          mb: 3,
        }}
      >
        {` Crafting Weddings with Soul Since 2017`}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#000D1F",
          fontSize: "1rem",
          lineHeight: 1.75,
          frontFamily: "Akatab,Sans-serif",
          color: "#000000",
          fontWeight: '700',
          // textAlign: "center",
          mb: 2,
        }}
      >
        {` At Poonam Events, we turn your wedding dreams into unforgettable
          memories. Founded by Aadi Jain, a self-taught planner
          with a passion for perfection, and Richi Anand Jain,
          the creative spirit behind our signature style — we've been planning
          heartfelt celebrations across India since 2017.`}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#000000",
          fontSize: "1rem",
          lineHeight: 1.75,
          frontFamily: "Akatab,Sans-serif",
          color: "#000000",
          fontWeight: '700',
          mb: 4,
        }}
      >
        {`  From intimate gatherings to grand destination weddings, our team
          brings emotion, elegance, and flawless execution to every event.`}
      </Typography>

      <Box display="flex">
        <CustomButton >
          <Link href="/aboutus" passHref legacyBehavior>
            <Button sx={{ textDecoration: 'none', color: 'inherit' }}>
              Meet Our Story
            </Button>
          </Link>
        </CustomButton>
      </Box>
    </Box>
  );
}


