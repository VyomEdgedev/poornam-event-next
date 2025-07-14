"use client";
import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image"; // assuming you're using Next.js

const testimonials = [
  {
    name: "Aditi & Nikhil",
    avatar: "/avatar1.jpg",
    text: "Poornam Events turned our dream wedding into a beautiful reality!",
  },
  {
    name: "Shruti & Raj",
    avatar: "/avatar2.jpg",
    text: "They made our special day a magical story to tell.",
  },
  {
    name: "Ishita & Aryan",
    avatar: "/avatar3.jpg",
    text: "From decor to coordination — absolutely flawless experience!",
  },
  {
    name: "Megha & Kabir",
    avatar: "/avatar4.jpg",
    text: "Couldn’t have asked for a better team on our big day!",
  },
];

export default function ClientTestimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "white",
        px: { xs: 2, md: 5 },
        py: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 4,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left - Testimonials Grid */}
       {/* Left - Testimonials Grid */}
<Box
  sx={{
    width: isMobile ? '100%' : '60%',
    overflowX: isMobile ? 'auto' : 'visible',
    "&::-webkit-scrollbar": { display: "none" },
  }}
>
  <Box
    sx={{
      display: "flex",
      gap: 2,
      flexWrap: isMobile ? "nowrap" : "wrap",
      justifyContent: isMobile ? "flex-start" : "center",
    }}
  >
    {testimonials.map((item, index) => (
      <Paper
        key={index}
        sx={{
          minWidth: isMobile ? 260 : 260,
          maxWidth: isMobile ? 280 : 280,
          flexShrink: 0,
          bgcolor: "#fff",
          borderRadius: 4,
          p: '12px',
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Avatar src={item.avatar} sx={{ width: 36, height: 36 }} />
          <Typography variant="subtitle2" fontWeight={600} fontFamily={"Akatab,Sans-serif"} color="#000000" fontSize={isMobile ? "1rem" : "1.1rem"}>
            {item.name}
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          color="#000000"
          sx={{ fontStyle: "italic", mb: 2, frontFamily: "Akatab,Sans-serif",fontWeight:'400' , fontSize: isMobile ? "0.95rem" : "1rem" }}
        >
          {item.text}
        </Typography>

        <Stack direction="row" spacing={0.5}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} sx={{ color: "#FFD700", fontSize: 18 }} />
          ))}
        </Stack>
      </Paper>
    ))}
  </Box>
</Box>


        {/* Right - Heading */}
        <Box sx={{ textAlign: isMobile ? "center" : "right" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
             fontFamily: 'Gloock, serif',
              fontWeight: "400",
              color: "#000000",
              mb: 1,
              fontSize: isMobile ? "2rem" : "3rem"
            }}
          >
            Client Testimonials
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{
            frontFamily: "Akatab,Sans-serif",
            color: "#000000",
            fontWeight:'400'
          }}>
            {`Love From Our Couples`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
