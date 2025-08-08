import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
} from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import Image from "next/image";
import { apiClient } from "@/lib/api-client";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
// const CapturedMomentsData = [
//   {
//     id: 1,
//     tag: "Rajasthan",
//     image: "/YourDream1.png",
//     alt: "Royal Rajasthani Theme",
//     title: "Royal Rajasthani",
//     description: "A regal affair in royal palaces.",
//   },
//   {
//     id: 2,
//     tag: "Beach",
//     image: "/YourDream1.png",
//     alt: "Boho Beach Theme",
//     title: "Boho Beach",
//     description: "An elegant beach ceremony.",
//   },
//   {
//     id: 3,
//     tag: "Modern",
//     image: "/YourDream1.png",
//     alt: "Minimal Chic Theme",
//     title: "Minimal Chic ",
//     description: "Simplicity meets elegance.",
//   },
// ];
const staticDescriptions = [
  "A regal affair in royal palaces.",
  "An elegant beach ceremony.",
  "Simplicity meets elegance.",
];
const CapturedMoments = ({ title, porfioId }) => {
  const [moments, setMoments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchMoments = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(
          `api/service/getServicePageById/${porfioId}/event`
        );
        if (response.data.relatedPortfolios) {
          setMoments(response.data.relatedPortfolios);
        } else {
          setMoments([]);
        }
      } catch (err) {
        setMoments([]);
      } finally {
        setLoading(false);
      }
    };
    if (porfioId) {
      fetchMoments();
    }
  }, [porfioId]);

  const handleViewAll = (category_id) => {
    const id =
      typeof category_id === "object" && category_id !== null
        ? category_id._id
        : category_id;
    if (id) {
      router.push(`/browsegallery?filter=${id}`);
    }
  };
  return (
    <Box sx={{ backgroundColor: "#FFF7E4" }}>
      <Container
        maxWidth="lg"
        sx={{ py: 8 }}
        px={{ xs: "5%", sm: "5%", md: "15%" }}
      >
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: "400",
            mb: 2,
            fontFamily: "Gloock,serif",
            fontSize: { xs: "32px", sm: "32px", md: "48px" },
          }}
        >
          {`  Captured Moments from ${title}`}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 4, fontFamily: "Akatab,Sans-serif", fontWeight: "400" }}
        >
          {`   Scroll through stories written in flowers, lights, and smiles.`}
        </Typography>
        <Box textAlign="center" mb={{ xs: 3, md: 4 }}>
          <CustomButton
            disabled={moments.length === 0}
            onClick={() =>
              handleViewAll(
                typeof moments[0]?.category === "object"
                  ? moments[0]?.category?._id
                  : moments[0]?.category
              )
            }
          >
            View All
          </CustomButton>
        </Box>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 300,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, sm: 2, md: 2, lg: 6, xl: 8 }}
            justifyContent="center"
          >
            {moments.map((portfolio, index) => (
              <Grid item key={portfolio._id || index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                  elevation={1}
                >
                  <Chip
                    label={portfolio.category?.name || "General"}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      backgroundColor: "#ddd",
                      fontSize: 11,
                      zIndex: 2,
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      width: "340px",
                      height: 300,

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 14,
                      textAlign: "center",
                      minHeight: { xs: 250, sm: 280, md: 300 },
                    }}
                  >
                    <Image
                      src={portfolio.images?.[0]?.url || "/YourDream1.png"}
                      alt={
                        portfolio.featuredImage?.altText || "Your Dream Theme"
                      }
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                  <CardContent backgroundColor="#FFFCF5">
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        fontFamily: "Akatab,Sans-serif",
                        fontWeight: "400",
                        fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
                      }}
                    >
                      {portfolio?.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        fontFamily: "Akatab,Sans-serif",
                        fontWeight: "500",
                        color: "#000000",
                        fontSize: {
                          xs: "0.9rem",
                          sm: "0.9rem",
                          md: "1.125rem",
                        },
                      }}
                    >
                      {staticDescriptions[index] || "No Description"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default CapturedMoments;
