import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { loaderContext } from "@/contextApi/loaderContext";

const PortfolioSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [AllPortfolioData, setAllPortfolioData] = useState([]);
  const {loading ,setLoading} = useContext(loaderContext);

  

  const fetchPortfolio = async () => {
    try {
      const res = await apiClient.get("/api/portfolio/event");
      setAllPortfolioData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching portfolio", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);


  // Modal state
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Modal handlers
  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const handlegallery = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true)
    router.push("/gallery");
  };

  const handleCloseModal = () => setOpen(false);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? AllPortfolioData.length - 1 : prev - 1
    );
  };
  // AllPortfolioData[currentIndex]?.images[0]?.url
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === AllPortfolioData.length - 1 ? 0 : prev + 1
    );
  };


  

  // Common image component with hover effects
  const PortfolioImage = ({ src, alt, children, onClick }) => (
    <Box
      sx={{
        position: "relative",
        borderRadius: { xs: 1, md: 2 },
        overflow: "hidden",
        height: "100%",
        width: "100%",
        cursor: onClick ? "pointer" : "default",
        "&:hover": {
          "& .portfolio-image": {
            transform: "scale(1.05)",
          },
        },
      }}
      onClick={onClick}
    >
      {children && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          {children}
        </Box>
      )}
      <Image
        src={src}
        alt={alt || "Portfolio Image"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw,"
        style={{
          objectFit: "cover",
          transition: "transform 0.4s ease",
        }}
        className="portfolio-image"
      />
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "#FFFAED", py: 3 }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Gloock, serif",
              fontWeight: 400,
              color: "#000D1F",
              mb: 0.85,
            }}
          >
            Our Gallery
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "Akatab,Sans-serif",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Real Weddings. Real Emotions.
          </Typography>
        </Box>

        {/* Desktop Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 📱 Mobile: 1 column
              sm: "1fr 1fr", // 📲 Tablet small: 2 columns
              md: "1fr 1fr 1fr", // 📲 Tablet medium: 2 columns
              lg: "1fr 1fr 1fr", // 💻 Desktop: 3 columns
            },
            gap: 1.5,
            mb: 2,
            // height: "825px",
            height: { xs: "1200px", sm: "900px", md: "650px", lg: "425px" },
            padding: 0,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Left Column - Main Image */}
          <PortfolioImage
            src={AllPortfolioData[0]?.images[0]?.url}
            alt={AllPortfolioData[0]?.images[0]?.url || "Portfolio Image"}
            onClick={() => handleOpenModal(0)} // Uncomment if you want image click to open modal
          />

          {/* Middle Column */}
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: 1.5,
              height: "100%",
            }}
          >
            {/* Top section */}
            <PortfolioImage
              src={AllPortfolioData[1]?.images[0]?.url}
              alt={AllPortfolioData[1]?.images[0]?.url || "Portfolio Image"}
              onClick={() => handleOpenModal(1)}
            />

            {/* Bottom section - Two small boxes */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1.5,
                height: "100%",
              }}
            >
              <PortfolioImage
                src={AllPortfolioData[2]?.images[0]?.url}
                alt={AllPortfolioData[2]?.images[0]?.url || "Portfolio Image"}
                onClick={() => handleOpenModal(2)}
              />
              <PortfolioImage
                src={AllPortfolioData[3]?.images[0]?.url}
                alt={AllPortfolioData[3]?.images[0]?.url || "Portfolio Image"}
                onClick={() => handleOpenModal(3)}
              />
            </Box>
          </Box>

          {/* Right Column - Two sections */}
          <Box
            sx={{
              display: {
                xs: "grid", // default for extra-small screens
                sm: "flex", // spans all columns on small screens
                md: "grid", // default for medium and up
              },
              gridColumn: {
                xs: "auto", // default for extra-small screens
                sm: "1 / -1", // spans all columns on small screens
                md: "auto", // default for medium and up
              },
              gridTemplateRows: {
                xs: "auto auto", // 📱 Mobile: two stacked rows (auto height)
                sm: "1fr 1fr", // 📲 Tablet+: equal height rows
              },
              gap: 1.5,
              height: "100%",
            }}
          >
            <PortfolioImage
              src={AllPortfolioData[4]?.images[0]?.url}
              alt={AllPortfolioData[4]?.images[0]?.url || "Portfolio Image"}
              onClick={() => handleOpenModal(4)}
            />

            <PortfolioImage
              src={AllPortfolioData[5]?.images[0]?.url}
              alt={AllPortfolioData[5]?.images[0]?.url || "Portfolio Image"}
              // onClick={() => handleOpenModal(5)}
            >
             
                <Button
                  aria-label="View Full Wedding Stories"
                  data-testid="notify-button"
                  onClick={(ev) => handlegallery(ev)}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#000000",
                    color: "#FFFFFF",

                    width: {
                      xs: "270px",
                      sm: "290px",
                    },
                    borderRadius: 50,
                    height: "55px",
                    fontSize: {
                      xs: "15px",
                      lg: "16px",
                    },
                    fontFamily: "Akatab,Sans-serif",
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                  zIndex={5}
                >
                  View Full Wedding Stories
                </Button>
             
            </PortfolioImage>
          </Box>
        </Box>

        {/* Tablet Grid */}

        {/* Mobile Layout */}
      </Container>

      {/* Modal for full screen image */}
      <Dialog
        onClose={handleCloseModal}
        PaperProps={{
          sx: { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
        fullScreen
        open={open}
        // slots={{
        //   transition: Transition,
        // }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {/* Close Button */}
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: { xs: 13, sm: 15, md: 20, lg: 20 },
              right: 30,
              color: "#fff",
              zIndex: 10,
              backgroundColor: "#DAA412 !important",
              // p: { xs: 0.5, sm: 0.75, md: 1 },
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }} />
          </IconButton>
          {/* Left Arrow */}
          <IconButton
            aria-label="previous"
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 30,
              color: "#fff",
              zIndex: 10,
              backgroundColor: "#DAA412 !important",
              // p: { xs: 0.5, sm: 0.75, md: 1 },
            }}
          >
            <ArrowBackIosNewIcon
              sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }}
            />
          </IconButton>
          {/* Image */}
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ height: "100vh", width: "100%" }}>
              <Image
                // AllPortfolioData[5]?.images[0]?.url
                src={AllPortfolioData[currentIndex]?.images[0]?.url}
                alt={AllPortfolioData[currentIndex]?.images[0]?.url || "Portfolio Image"}
                fill
                style={{
                  objectFit: "contain",
                  // maxWidth: "100%",
                }}
              />
            </Box>
          </Box>
          {/* Right Arrow */}
          <IconButton
            aria-label="next"
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 30,
              color: "#fff",
              zIndex: 10,
              backgroundColor: "#DAA412 !important",
              // p: { xs: 0.5, sm: 0.75, md: 1 },
            }}
          >
            <ArrowForwardIosIcon
              sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }}
            />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
};

export default PortfolioSection;
