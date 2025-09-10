import React, { useState } from "react";
import CustomButton from "@/common-component/button/CustomButton";
import {
  Grid,
  Typography,
  styled,
  Box,
  Container,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Gloock, serif",
  fontWeight: 400,
  textAlign: "center",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: { fontSize: "36px" },
  [theme.breakpoints.down("sm")]: { fontSize: "28px" },
}));

const HeroImageContainer = styled(Box)({
  width: "100%",
  height: "240px",
  overflow: "hidden",
  borderRadius: "5px",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const HeroContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    alignItems: "start",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    textAlign: "start",
    alignItems: "start",
    padding: 0,
  },
  [theme.breakpoints.down("xs")]: {
    padding: 6,
    textAlign: "start",
    alignItems: "start",
  },
  padding: 6,
}));

const ShaddiService = (props) => {
  const router = useRouter();
  const services = props?.services;

  const handleNavigate = (uid) => {
    router.push(`/services/${uid}`);
  };

  return (
    <Container sx={{ py: { xs: 3, md: 4 }, px: { xs: 4, md: 4 } }}>
      <StyledTypography component="h2">{`Our Shaadi Services`}</StyledTypography>
      {/* Hero Section */}
      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        sx={{ border: "1px solid #ddd", borderRadius: "8px" }}
      >
        <Grid item size={{ xs: 12, sm: 6, md: 8 }} sx={{ p: 2 }}>
          <HeroImageContainer>
            <Image
              src={services[0]?.featuredImage?.url}
              alt={services[0]?.title}
              width={480}
              height={480}
            />
          </HeroImageContainer>
        </Grid>
        <Grid item size={{ xs: 11, sm: 6, md: 4 }}>
          <HeroContent sx={{ py: { xs: 0, sm: 2, md: 1.5 } }}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                paddingRight: { xs: "5px", sm: "2px" },
                px: { xs: "5px", sm: "2px" },
                fontFamily: "Gloock, serif",
                fontWeight: 400,
                color: "#000000",
                mb: 2,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {services[0]?.title}
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                px: { xs: "5px", sm: "1px" },
                fontFamily: "Akatab,Sans-serif",
                fontWeight: "400",
                color: "#000000",
                textAlign: "left",
                mb: 2,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {services[0]?.meta?.description}
            </Typography>
            <CustomButton
              sx={{
                marginLeft: { xs: "5px", sm: "5px", md: 0 },
                alignItems: "start",
                mb: 2,
                fontFamily: "Akatab, Sans-serif !important",
              }}
              onClick={() => {
                handleNavigate(services[0]?.uid);
              }}
            >
              {"Learn More"}
            </CustomButton>
          </HeroContent>
        </Grid>
      </Grid>

      {services?.length > 0 && (
        <Grid
          py={3}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {services?.map((val, index) => {
            return (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 6 }}
                onClick={() => {
                  handleNavigate(val.uid);
                }}
              >
                <Box
                  sx={{
                    border: "2px solid #ddd",
                    padding: "10px",
                    borderRadius: "5px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      border: "1px solid #DAA412",
                      transform: "translateY(-2px) scale(1.01)",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", gap: "12px" }}>
                    <Box sx={{ height: "100%", width: "100px" }}>
                      <Image
                        src={val?.featuredImage?.url}
                        alt={"image"}
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        component="h6"
                        mb={1}
                        sx={{
                          fontFamily: "Akatab, Sans-serif",
                          fontWeight: 700,
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {val?.title}
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontFamily: "Akatab, Sans-serif",
                          fontWeight: 400,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {val?.meta?.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default ShaddiService;
