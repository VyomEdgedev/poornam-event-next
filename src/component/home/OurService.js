import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/router';

const services = [
  {
    title: "Destination Weddings",
    image: "/homeservices1.png",
    description:
      "We plan unforgettable weddings in Udaipur, Goa, Jaipur, and even your ancestral haveli...",
    cta: "Learn More",

  },
  {
    title: "Intimate Weddings",
    image: "/homeservices.png",
    description:
      "Smaller weddings, bigger heart.We specialize in private, cozy affairs- beautifully styled, deeply personal, and easy on the chaos.",
    guests: "50 guests, 500 memories, 0 stress",
    cta: "Learn More",
  },
  {
    title: "Themed & Designer Weddings",
    image: "/homeservices2.png",
    description: "Enjoy your big day while we handle the details.",
    cta: "Learn More",
  },
  {
    title: "Artist Management",
    image: "/homeservices3.png",
    description: "Don’t lift a finger. We’ll plan the entire show.",
    cta: "Learn More",
  },
  {
    title: "Prewedding & Photography",
    image: "/homeservices4.png",
    description:
      "Because you don’t want to be managing the DJ during your own varmala.",
    cta: "Learn More",
  },
  {
    title: "Special Effects",
    image: "/homeservices5.png",
    description:
      "More than just pretty flowers. We design Instagram-worthy wedding sets, mandaps...",
    cta: "Learn More",
  },
   {
    title: "Food and Beverages",
    image: "/homeservices5.png",
    description:
      "More than just pretty flowers...",
    cta: "Learn More",
  },
   {
    title: "Guest Hospitality & Logistics",
    image: "/homeservices5.png",
    description:
      "Because a happy guest = a happy shaadi...",
    cta: "Learn More",
  },
];

const FlipCard = ({ service }) => {
  const [flipped, setFlipped] = useState(false);

  const router = useRouter();
  const handleNavigate = () => {

    router.push('/services');
  };

  return (
    <Box
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      sx={{
        width: "100%",
        height: 360,
        perspective: 1500,
        cursor: "pointer",
        transition: "transform 0.4s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },

      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.9s ease",
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
          transformOrigin: "bottom",
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 4,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={245}
            height={300}
            unoptimized
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              py: 1,
              px: 2,
              backdropFilter: "blur(4px)",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              {service.title}
            </Typography>
          </Box>
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 2,
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff",
            px: 3,
            py: 3,
            boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden",
            zIndex: 1,
            position: "absolute",
            "::before": {
              content: '""',
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "linear-gradient(0deg, transparent, transparent 30%, rgba(133, 158, 158, 0.3))",
              transform: "rotate(-45deg)",
              opacity: 0,
              transition: "opacity 0.4s ease",
              zIndex: 0,
              animation: flipped ? "slideEffect 1s forwards" : "none",
            },
          }}
        >
          {service.guests && (
            <Typography

              sx={{
                bgcolor: "rgba(255,255,255,0.8)",
                color: "#0D1A46",
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 0.5,
                fontSize: "0.75rem",
                mb: 1,
                zIndex: 2,
              }}
            >
              {service.guests}
            </Typography>
          )}
          <Typography variant="h5" fontWeight={600} fontFamily={"Akatab,Sans-serif"} sx={{ mb: 1, zIndex: 2 }}>
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: "#f5f5f5",
              frontFamily: "Akatab,Sans-serif", color: "#FFFBF0",
              lineHeight: 1.2,
              mb: 2,
              zIndex: 2,
            }}
          >
            {service.description}
          </Typography>
          {service.cta && (
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "#D7A10F",
                color: "#FFFFFF",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "999px",
                px: 3,
                py: 0.8,
                fontSize: "0.85rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                zIndex: 2,
                "&:hover": {
                  bgcolor: "#B8850D",
                },
              }}
              onClick={() => handleNavigate()}
              style={{ cursor: 'pointer' }}
            >
              {service.cta}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default function OurServices() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 8, md: 10 },
        py: { xs: 4, sm: 6, md: 4 },
        bgcolor: "#FFFAED",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Gloock, serif',
          fontWeight: "400",
          color: "#0D1A46",
          mb: 1,
        }}
      >
        Our Services
      </Typography>
      <Typography variant="body1" component="p" color="#000000" fontFamily={"Akatab,Sans-serif"} fontWeight={400} mb={{ xs: 2, md: 4 }}>
        {` Everything You Need, Delivered Beautifully`}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlipCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
