import React, { useState } from "react";
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

const PortfolioSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  // Images
  const portfolioImages = [
    {
      src: "/portfolio2.png",
      alt: "Main gallery",
      id: "main",
    },
    {
      src: "/portfolio3.png",
      alt: "gallery Image 3",
      id: "img1",
    },
    {
      src: "/portfolio7.jpg",
      alt: "gallery Image 7",
      id: "img2",
    },
    {
      src: "/portfolio6.jpg",
      alt: "gallery Image 6",
      id: "img3",
    },
    {
      src: "/portfolio5.jpg",
      alt: "gallery Image 5",
      id: "img5",
    },
    {
      src: "/portfolio4.jpg",
      alt: "gallery Image 4",
      id: "img4",
    },
  ];

  // Modal state
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Modal handlers
  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const handlegallery = (event) => {
     event.stopPropagation(); 
    router.push("/gallery");
  };

  const handleCloseModal = () => setOpen(false);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === portfolioImages.length - 1 ? 0 : prev + 1
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
        alt={alt}
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
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 1.5,
            mb: 2,
            height: "425px",
            padding: 0,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Left Column - Main Image */}
          <PortfolioImage
            src={portfolioImages[0].src}
            alt={portfolioImages[0].alt}
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
              src={portfolioImages[1].src}
              alt={portfolioImages[1].alt}
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
                src={portfolioImages[2].src}
                alt={portfolioImages[2].alt}
                onClick={() => handleOpenModal(2)}
              />
              <PortfolioImage
                src={portfolioImages[3].src}
                alt={portfolioImages[3].alt}
                onClick={() => handleOpenModal(3)}
              />
            </Box>
          </Box>

          {/* Right Column - Two sections */}
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: 1.5,
              height: "100%",
            }}
          >
            <PortfolioImage
              src={portfolioImages[4].src}
              alt={portfolioImages[4].alt}
              onClick={() => handleOpenModal(4)}
            />

            <PortfolioImage
              src={portfolioImages[5].src}
              alt={portfolioImages[5].alt}
              // onClick={() => handleOpenModal(5)}
            >
              <Link href="/gallery" style={{ textDecoration: 'none' }}>
              <Button
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
                    xs: "100%",
                    sm: "290px",
                    md: "210px",
                    lg: "290px",
                    xl: "290px",
                  },
                  borderRadius: 50,
                  height: "55px",
                  fontSize: {
                    xs: "12px",
                    sm: "16px",
                    md: "15px",
                    lg: "16px",
                    xl: "16px",
                  },
                  fontFamily: "Akatab,Sans-serif",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
                zIndex={5}
              >
                View Full Wedding Stories
              </Button>
              </Link>
            </PortfolioImage>
          </Box>
        </Box>

        {/* Tablet Grid */}
        <Box
          sx={{
            display: { xs: "none", sm: "grid", md: "none" },
            gridTemplateColumns: "1fr 1fr",
            gap: 1.5,
            mb: 2,
            height: "350px",
            padding: 0,
            borderRadius: 2,
          }}
        >
          {/* Left side - Main image */}
          <PortfolioImage
            src={portfolioImages[0].src}
            alt={portfolioImages[0].alt}
            onClick={() => handleOpenModal(0)}
          />

          {/* Right side - Grid of smaller images */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 1.5,
              height: "100%",
            }}
          >
            <PortfolioImage
              src={portfolioImages[1].src}
              alt={portfolioImages[1].alt}
              onClick={() => handleOpenModal(1)}
            />
            <PortfolioImage
              src={portfolioImages[2].src}
              alt={portfolioImages[2].alt}
              onClick={() => handleOpenModal(2)}
            />
            <PortfolioImage
              src={portfolioImages[3].src}
              alt={portfolioImages[3].alt}
              onClick={() => handleOpenModal(3)}
            />
            <PortfolioImage
              src={portfolioImages[4].src}
              alt={portfolioImages[4].alt}
              onClick={() => handleOpenModal(4)}
            >
              
              <Button
                data-testid="notify-button"
                onClick={(ev) => handlegallery(ev)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  padding: {
                    xs: "10px 16px",
                    sm: "10px 20px",
                    md: "10px 22px",
                  },
                  width: {
                    xs: "100%",
                    sm: "140px",
                    md: "220px",
                    lg: "290px",
                    xl: "290px",
                  },
                  borderRadius: 50,
                  height: "55px",
                  fontSize: { xs: "12px", sm: "13px" },
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

        {/* Mobile Layout */}
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            padding: 0,
            borderRadius: 2,
          }}
        >
          {/* Main image */}
          <Box sx={{ mb: 1.5, height: "200px" }}>
            <PortfolioImage
              src={portfolioImages[0].src}
              alt={portfolioImages[0].alt}
              onClick={() => handleOpenModal(0)}
            />
          </Box>

          {/* Grid of smaller images */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1.5,
              height: "150px",
              mb: 1.5,
            }}
          >
            <PortfolioImage
              src={portfolioImages[1].src}
              alt={portfolioImages[1].alt}
              onClick={() => handleOpenModal(1)}
            />
            <PortfolioImage
              src={portfolioImages[2].src}
              alt={portfolioImages[2].alt}
              onClick={() => handleOpenModal(2)}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1.5,
              height: "150px",
              mb: 1.5,
            }}
          >
            <PortfolioImage
              src={portfolioImages[3].src}
              alt={portfolioImages[3].alt}
              onClick={() => handleOpenModal(3)}
            />
            <PortfolioImage
              src={portfolioImages[4].src}
              alt={portfolioImages[4].alt}
              onClick={() => handleOpenModal(4)}
            >
              <Button
                data-testid="notify-button"
                onClick={(ev) => handlegallery(ev)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  padding: {
                    xs: "10px 16px",
                    sm: "10px 20px",
                    md: "10px 22px",
                  },
                  width: {
                    xs: "140px",
                    sm: "140px",
                    md: "220px",
                    lg: "290px",
                    xl: "290px",
                  },
                  borderRadius: 50,
                  height: "55px",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontFamily: "Akatab,Sans-serif",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
                zIndex={5}
              >
                View Full <br />
                Wedding Stories
              </Button>
            </PortfolioImage>
          </Box>
        </Box>
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
            marginTop:"20px"
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: { xs: 13, sm: 15, md: 20, lg: 20 },
              right: 30,
              color: "#fff",
              zIndex: 10,
              backgroundColor:"#DAA412 !important",
              // p: { xs: 0.5, sm: 0.75, md: 1 },
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }} />
          </IconButton>
          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 30,
            color: "#fff",
              zIndex: 10,
              backgroundColor:"#DAA412 !important",
              // p: { xs: 0.5, sm: 0.75, md: 1 },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }} />
          </IconButton>
          {/* Image */}
          <Box
            sx={{
              height:"100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          <Box sx={{height:"100vh",width:"100%"}}>
              <Image
              src={portfolioImages[currentIndex].src}
              alt={portfolioImages[currentIndex].alt}
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
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 30,
               color: "#fff",
              zIndex: 10,
              backgroundColor:"#DAA412 !important",
              // p: { xs: 0.5, sm: 0.75, md: 1 }, 
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }} />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
};

export default PortfolioSection;
