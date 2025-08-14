"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Paper,
  useMediaQuery,
  useTheme,
  Fade,
  Container,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const testimonials = [
  {
    name: "Aditi & Nikhil",
    avatar: "/review1.png",
    alt: "Aditi & Nikhil",
    text: "Poornam Events turned our dream wedding into a beautiful reality!",
    rating: 5,
  },
  {
    name: "Shruti & Raj",
    avatar: "/review2.png",
    alt: "shruti & raj",
    text: "They made our special day a magical story to tell.",
    rating: 4,
  },
  {
    name: "Ishita & Aryan",
    avatar: "/review3.png",
    alt: "ishita & aryan",
    text: "From decor to coordination — absolutely flawless experience!",
    rating: 4.5,
  },
  {
    name: "Megha & Kabir",
    avatar: "/review4.png",
    alt: "megha & kabir",
    text: "Couldn’t have asked for a better team on our big day!",
    rating: 5,
  },
];

export default function ClientTestimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollRef = useRef(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const el = scrollRef.current;
      if (el) {
        setAtStart(el.scrollLeft <= 5);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5);
      }
    };

    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }

    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "white",
          py: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile || isTablet ? "column" : "row",
            // gap: 4,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              textAlign: isMobile ? "center" : "right",
              mt: { xs: 2, sm: 0, md: 1 },
              mb: { xs: 2, sm: 0, md: 1 },
              order: isMobile || isTablet ? 0 : 1,
              width: isMobile || isTablet ? "100%" : "20%",
            }}
          >
            <Typography
              component="p"
              className="h2_heading"
              sx={{
                fontFamily: "Gloock, serif",
                fontWeight: "400",
                color: "#000000",
                mb: 1,
              }}
            >
              Client Testimonials
            </Typography>
            <Typography
              component="p"
              sx={{
                fontFamily: "Akatab,Sans-serif",
                color: "#000000",
                fontWeight: "400",
              }}
            >
              Love From Our Couples
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: isMobile || isTablet ? "100%" : "70%",
            }}
          >
            {!isMobile && !isTablet && (
              <Fade in={!atStart}>
                <Box
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollBy({
                        left: -280,
                        behavior: "smooth",
                      });
                    }
                  }}
                  sx={{
                    position: "absolute",
                    left: -15,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 40,
                    height: 40,
                    bgcolor: "#ffffff",
                    borderRadius: "50%",
                    boxShadow: 3,
                    p: 1,
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                >
                  <ArrowBackIosNewIcon fontSize="medium" />
                </Box>
              </Fade>
            )}

            {!isMobile && !isTablet && (
              <Fade in={!atEnd}>
                <Box
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollBy({
                        left: 280,
                        behavior: "smooth",
                      });
                    }
                  }}
                  sx={{
                    position: "absolute",
                    right: -15,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 40,
                    height: 40,
                    bgcolor: "#ffffff",
                    borderRadius: "50%",
                    boxShadow: 3,
                    p: 1,
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                >
                  <ArrowForwardIosIcon fontSize="medium" />
                </Box>
              </Fade>
            )}

            <Box
              ref={scrollRef}
              sx={{
                borderRadius: "20px",
                overflowX: "auto",
                overflowY: "visible",
                "&::-webkit-scrollbar": { height: 6 },
                px: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "nowrap",
                  justifyContent: "flex-start",
                }}
              >
                {testimonials.map((item, index) => (
                  <Paper
                    key={index}
                    sx={{
                      minWidth: isMobile ? 260 : 260,
                      maxWidth: isMobile ? 280 : 280,
                      flexShrink: 0,
                      mt: 2,
                      mb: 2,
                      borderRadius: 4,
                      p: "11px",
                      boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
                      overflow: "visible",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      mb={1}
                    >
                      <Avatar
                        src={item.avatar}
                        alt={item.alt}
                        sx={{ width: 30, height: 30 }}
                      />
                      <Typography
                          component="h3"
                    className="h6_heading"
                        fontWeight={600}
                        fontFamily={"Akatab,Sans-serif"}
                        color="#000000"
                      >
                        {item.name}
                      </Typography>
                    </Stack>

                    <Typography
                      component="p"
                      color="#000000"
                      sx={{
                        // fontStyle: "italic",
                        mb: 2,
                        fontFamily: "Akatab,Sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {item.text}
                    </Typography>

                    <Stack direction="row" spacing={0.5} mb={1}>
                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                        }}
                      >
                        <Box
                          component="img"
                          src="/search.png"
                          alt="Google logo"
                          sx={{ width: 17, height: 17, mr: 1.2 }}
                        />
                      </Box>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{
                            color: i < item.rating ? "#FFD700" : "#ccc",
                            fontSize: 18,
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
