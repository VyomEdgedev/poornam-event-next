import React, { useContext, useState } from "react";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { loaderContext } from "@/contextApi/loaderContext";
import { useRouter } from "next/router";
const FlipCard = ({ service }) => {
  const { loading, setLoading } = useContext(loaderContext);
  const [flipped, setFlipped] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    router.push(`/services/${service.uid}`);
  };
  return (
    <Box
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      sx={{
        width: "100%",
        height: { xs: 330, sm: 350 },
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
            borderRadius: 2,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Image
            src={service?.featuredImage?.url}
            alt={service?.featuredImage?.altText || "Service Image"}
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
              bgcolor: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              py: 1,
              px: 2,
              backdropFilter: "blur(4px)",
            }}
          >
            <Typography fontFamily="Akatab, sans-serif" fontWeight={600}>
              {service?.title}
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
            background: "#000D1F",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff",
            px: { xs: 1, sm: 2, md: 3 },
            py: 3,
            boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden",
            zIndex: 1,
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
          <Typography
            fontWeight={700}
            fontFamily={"Akatab,Sans-serif"}
            sx={{ mb: 1, zIndex: 2 }}
          >
            {service?.title}
          </Typography>
          <Typography
            sx={{
              color: "#f5f5f5",
              fontFamily: "Akatab,sans-serif",
              color: "#FFFBF0",
              lineHeight: 1.2,
              mb: 2,
              zIndex: 2,
            }}
          >
            {service?.meta?.description?.split(" ").slice(0, 25).join(" ") +
              "..."}
          </Typography>
          {service.uid && (
            <Button
              variant="contained"
              size="small"
              onClick={handleClick}
              aria-label={`Learn more about ${service.title || 'this service'}`}
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
            >
              Learn More
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default function OurServices({ services }) {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 2 },
        pb: { md: 4 },
        bgcolor: "#FFFAED",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          sx={{
            fontSize: "32px !important",
            fontFamily: "Gloock, serif",
            fontWeight: "400",
            color: "#0D1A46",
            mb: 1,
          }}
        >
          {`Our Services`}
        </Typography>
        <Typography
          color="#000000"
          fontFamily={"Akatab,Sans-serif"}
          fontWeight={400}
          mb={{ xs: 2, md: 4 }}
        >
          {` Everything You Need, Delivered Beautifully`}
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={12}
          justifyContent="center"
        >
          {services.map((service, index) => (
            <Grid item xs={12} size={{ xs: 6, sm: 4, md: 3 }} key={index}>
              <FlipCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
