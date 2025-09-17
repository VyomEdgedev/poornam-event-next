import React, { useContext } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { loaderContext } from "@/contextApi/loaderContext";


const data = [
  { name: "Latest Trends", image: "/blog1.jpg" },
  { name: "Celebrity", image: "/blog2.jpg" },
  { name: "Fashion", image: "/blog3.jpg" },
  { name: "Decoration", image: "/blog4.jpg" },
  { name: "Lifestyle", image: "/blog1.jpg" },
  { name: "Beauty", image: "/blog2.jpg" },
];


export default function InspirationSection({ categories = data }) {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const { loading, setLoading } = useContext(loaderContext);

  const capitalizeWords = (text) => {
    if (!text) return "";
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    handleScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const scroll = (direction) => {
    if (scrollRef.current) {
      // get width of the first child (circle)
      const firstChild = scrollRef.current.querySelector("div");
      if (!firstChild) return;

      const childWidth = firstChild.offsetWidth;
      const gap = parseInt(
        getComputedStyle(scrollRef.current).columnGap ||
        getComputedStyle(scrollRef.current).gap ||
        0
      );

      const scrollAmount = childWidth + gap; // dynamic scroll step

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCatgotyClick = () => {
    setLoading(true);
    window.location.state = "fromHome"
  }

  if (loading) return <Loader />

  return (
    <Container>
      <Box sx={{ textAlign: "center", py: 5 }}
      >
        <Typography
          component="h2"
          sx={{ fontFamily: "Gloock, serif", fontWeight: 400, mb: 6 }}
        >
          {`Inspirations & Blogs`}
        </Typography>
        <Box sx={{
          position: "relative",
          border: "1px solid grey",
          borderRadius: "10px",
          paddingTop: 2,
          boxShadow: 4
        }}
        >
          {showLeft && (
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                position: "absolute",
                left: -10,
                top: "40%",
                zIndex: 10,
                background: "#fff",
                boxShadow: 2,
                "&:hover": { background: "#f5f5f5" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: { xs: 5.5, md: 6.5 },
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
              px: 4
            }}
          >
            {categories.map((item, index) => (
              <Link
                key={index}
                href={`/blog/?category=${item.name}`}
                style={{ textDecoration: "none" }}
                onClick={(e) => { handleCatgotyClick(item.name) }}
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
                      transform: "scale(1)",
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
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  />

                  {/* Label */}
                  <Typography
                    className="label-text"
                    component="p"
                    label={capitalizeWords(item.name)}
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: 600,
                      position: "absolute",
                      bottom: 40,
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
                      width: "75%",


                      margin: "auto"
                    }}
                  >
                    {capitalizeWords(item.name)}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>

          {showRight && (
            <IconButton
              onClick={() => scroll("right")}
              sx={{
                position: "absolute",
                right: -10,
                top: "40%",
                zIndex: 10,
                background: "#fff",
                boxShadow: 2,
                "&:hover": { background: "#f5f5f5" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Container>
  );
}
