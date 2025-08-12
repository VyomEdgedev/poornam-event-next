import React from "react";
import Link from "next/link";
import { Box, Typography, Button, Container } from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";

export default function AboutSection() {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "#fff",
          marginTop: "10px",
          marginBottom: "10px",
          py: {sm:3,md:5},
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Gloock, serif",
            fontWeight: "400",
            color: "#000D1F",
            mb: 3,
          }}
        >
          {`Crafting Weddings with Soul Since 2017`}
        </Typography>

        <Typography
          variant="p"
          sx={{
            color: "#000D1F",
            fontSize: "1rem",
            lineHeight: 1.75,
            fontFamily: "Akatab,Sans-serif",
            color: "#000000",
            fontWeight: "400",
            // textAlign: "center",
            mb: 2,
          }}
        >
          {` At Poonam Events, we turn your wedding dreams into unforgettable memories. Founded by `}
          <strong>Aadi Jain</strong>
          {`, a self-taught planner with a passion for perfection, and `}
          <strong>Richi Anand Jain</strong>
          {`, the creative spirit behind our signature style — we've been planning heartfelt celebrations across India since 2017.`}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            // fontSize: "1rem",
            lineHeight: 1.75,
            fontFamily: "Akatab,Sans-serif",
            color: "#000000",
            fontWeight: "400",
            mb: 4,
          }}
        >
          {`  From intimate gatherings to grand destination weddings, our team
          brings emotion, elegance, and flawless execution to every event.`}
        </Typography>

        <Box display="flex">
          <CustomButton data-testid="notify-button">
            <Link href="/aboutus" passHref legacyBehavior>
              <Button
                data-testid="notify-button"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  whiteSpace: "nowrap",
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                {`Meet Our Story`}
              </Button>
            </Link>
          </CustomButton>
        </Box>
      </Box>
    </Container>
  );
}
