import React from "react";
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
import { useRouter } from "next/router";

const CapturedMoments = ({ title, captured =[]}) => {
  const moments = captured?.relatedPortfolios || []
  const router = useRouter();

  const handleViewAll = (category_id) => {
    const id =
      typeof category_id === "object" && category_id !== null
        ? category_id._id
        : category_id;
    if (id) {
      router.push(`/gallery/${id}`);
    }
  };


  return (
    <Box sx={{ backgroundColor: "#FFF7E4" }}>
      <Container
        sx={{ py: 4 }}
       >
        <Typography
          component="h2"
          align="center"
          sx={{
            fontWeight: "400",
            mb: 2,
            fontFamily: "Gloock,serif",
            
          }}
        >
          {`  Captured Moments from ${title}`}
        </Typography>
        <Typography
          component="p"
          align="center"
          sx={{ mb: 2, fontFamily: "Akatab,Sans-serif", fontWeight: "400" }}
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
                      width: "350px",
                      height: 300,

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 14,
                      textAlign: "center",
                      minHeight: { xs: 250, sm: 280, md: 380 },
                    }}
                  >
                    <Image
                      src={portfolio.images?.[0]?.url || "/YourDream1.png"}
                      alt={
                        portfolio?.featuredImage?.altText || "Your Dream Theme"
                      }
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
             
                </Card>
              </Grid>
            ))}
          </Grid>
     </Container>
    </Box>
  );
};

export default CapturedMoments;
