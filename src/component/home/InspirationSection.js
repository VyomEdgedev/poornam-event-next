import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

const data = [
  { name: "Latest Trends", image: "/blog1.jpg" },
  { name: "Celebrity", image: "/blog2.jpg" },
  { name: "Fashion", image: "/blog3.jpg" },
  { name: "Decoration", image: "/blog4.jpg" },
  { name: "Lifestyle", image: "/blog1.jpg" },
  { name: "Beauty", image: "/blog2.jpg" },
];

export default function InspirationSection({ categories = data }) {
  return (
    <Container>
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography
          component="h2"
          sx={{ fontFamily: "Gloock, serif", fontWeight: 400, mb: 6 }}
        >
          {`Inspirations & Blogs`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 9.5,
            overflowX: "auto",
            scrollBehavior: "smooth",
            pb: 2,
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#aaa",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f0f0f0",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {categories.map((item, index) => (
            <Link
              key={index}
              href={`/blog/?category=${item.name}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  flex: "0 0 auto",
                  width: { xs: 150, sm: 170, md: 200, lg: 230 },
                  height: { xs: 150, sm: 170, md: 200, lg: 230 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.8s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  "&:hover .overlay": {
                    backdropFilter: "blur(3px)",
                  },
                  "&:hover .label-text": {
                    transform: "translateY(-50px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.label}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(0px)",
                    transition: "all 0.4s ease",
                    zIndex: 1,
                  }}
                />

                {/* Label */}
                <Typography
                  className="label-text"
                  component="p"
                  sx={{
                    fontFamily: "Akatab,Sans-serif",
                    fontWeight: 600,
                    position: "absolute",
                    bottom: 25,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    color: "#fff",
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "18px",
                    },
                    zIndex: 2,
                    transform: "translateY(0)",
                    transition: "transform 0.6s ease-in-out",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
