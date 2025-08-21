import React, { useEffect, useState } from "react";
import CustomButton from "@/common-component/button/CustomButton";
import {
  Card,
  Grid,
  Typography,
  styled,
  Box,
  CircularProgress,
  Container,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { apiClient } from "@/lib/api-client";
import { px } from "framer-motion";

const servicesData = {
  hero: {
    image: "/serviceimg1.png",
    title: "Destination Weddings",
    description:
      "Udaipur, Goa, ancestral havelis- travel + traditions done right.",
    buttonText: "Learn More",
  },
  services: [
    // {
    //   id: 1,
    //   image: "/serviceimg2.png",
    //   title: "Destination Weddings",
    //   description: "Shaadi + Vacation = Best Decision Ever",
    //   gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 2,
    //   image: "/serviceimg3.png",
    //   title: "Themed & Designer Weddings",
    //   description:
    //     "Vintage Bollywood? Royal Rajput? We say YES to all the drama.",
    //     gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 3,
    //   image: "/serviceimg4.png",
    //   title: "Full Wedding Planning",
    //   description: "Don't lift a finger. We'll plan the entire shaadi.",
    //   gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 4,
    //   image: "/serviceimg5.png",
    //   title: "Intimate Weddings",
    //   description: "50 guests. 500 memories. 0 stress.",
    //   gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 5,
    //   image: "/serviceimg6.png",
    //   title: "Wedding Day Coordination",
    //   description:
    //     "Because you don't want to be managing the DJ during your own varmala.",
    //     gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 6,
    //   image: "/serviceimg7.png",
    //   title: "Food and Beverages",
    //   description: "More than just pretty flowers.",
    //   gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 7,
    //   image: "/serviceimg6.png",
    //   title: "Artist Management",
    //   description: "Don't lift a finger. We'll plan the entire shaadi.",
    //   gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 8,
    //   image: "/serviceimg4.png",
    //   title: "Prewedding & Photography",
    //   description:
    //     "Because you don't want to be managing the DJ during your own varmala.",
    //    gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 9,
    //   image: "/serviceimg9.png",
    //   title: "Guest Hospitality & Logistics",
    //   description: "Because a happy guest = a happy shaadi.",
    //   gridProps: { xs: 12, sm: 6, md: 4 }
    // },
    // {
    //   id: 10,
    //   image: "/serviceimg5.png",
    //   title: "Special Effects",
    //   description:
    //     "More than just pretty flowers. We design Instagram-worthy wedding sets, mandaps...",
    //     gridProps: { xs: 12, sm: 12, md: 12 }
    // },
  ],
};

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(1),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Gloock, serif",
  fontWeight: 400,
  textAlign: "center",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: { fontSize: "36px" },
  [theme.breakpoints.down("sm")]: { fontSize: "28px" },
}));

const HeroCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
  border: "none",
  overflow: "hidden",
  marginBottom: theme.spacing(3),
}));

const ServiceCard = styled(Card)(({ theme, isSelected }) => ({
  backgroundColor: "transparent",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  border: isSelected ? "1px solid #DAA412" : "1px solid #e0e0e0",
  borderRadius: "12px",
  width: "340px",
  height: "118px",
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  alignItems: "center",
  gap: theme.spacing(1),
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    border: "1px solid #DAA412",
    transform: "translateY(-5px) scale(1.02)",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    minHeight: "132px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    height: "auto",
    minHeight: "180px",
    marginLeft: "10px",
    padding: theme.spacing(1),
    gap: theme.spacing(1),
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "125px",
  overflow: "hidden",
  borderRadius: "6px",
  flexShrink: 0,
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "150px",
  },
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

const ServiceContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "100%",
  width: "200px",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Akatab,Sans-serif",
  fontWeight: 600,

  color: "#000D1F",
  [theme.breakpoints.down("sm")]: { fontSize: "18px" },
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "Akatab,Sans-serif",
  color: "#000000",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: { fontSize: "12px" },
}));

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
    padding: 0
  },
  [theme.breakpoints.down("xs")]: {
    padding: 6,
    textAlign: "start",
    alignItems: "start",
  },
  padding: 6
}));

// const HeroTitle = styled(Typography, {
//   shouldForwardProp: (prop) => prop !== "isLong",
// })(({ theme, isLong }) => ({
//   fontFamily: "Gloock, serif",
//   fontWeight: 400,
//   // fontSize: "32px !important",
//   color: "#000000",
//   [theme.breakpoints.down("sm")]: {
//     alignItems: "start",
//     textAlign: "start",
//      fontSize: "68px !important",
//      padding:4
//   },

//   paddingLeft: { xs: "10px", md: "0px" },
//   marginBottom: theme.spacing(0.5),
//   [theme.breakpoints.down("md")]: { fontSize: "30px" },
//   [theme.breakpoints.down("sm")]: { fontSize: "24px" },
// }));

// const HeroDescription = styled(Typography)(({ theme }) => ({
//   fontFamily: "Akatab,Sans-serif",
//   fontWeight: "400",
//   fontSize: "16px !important",
//   color: "#000000",
//   textAlign: "left",
//   marginBottom: theme.spacing(3),
//   [theme.breakpoints.down("sm")]: { padding: "0px 0px", width: "100%" },
//}));

function highlightSpecificWords(text, keywords) {
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) => {
    if (keywords.some((word) => word.toLowerCase() === part.toLowerCase())) {
      return (
        <span key={index} style={{ color: "#DAA520", fontWeight: "bold" }}>
          {part}
        </span>
      );
    }

    return part;
  });
}
function trimText(text, maxLength = 100) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
const ShaddiService = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(services);

  const handleNavigate = (uid) => {
    console.log(uid, "uid");
    router.push(`/services/${uid}`);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiClient.get(
          "api/service/AllServicePages/event"
        );
        console.log(response, "response");
        const data = response.data;
        if (Array.isArray(data)) {
          const formattedServices = data.map((item, idx) => ({
            id: item._id || idx,
            image: item.featuredImage?.url || "/serviceimg2.png",
            title: item.meta?.title,
            description: item.meta?.description || "No Description",
            gridProps: { xs: 12, sm: 6, md: 4 },
            uid: item.uid,
          }));
          setServices(formattedServices);
        } else {
          setServices([]);
        }
      } catch (error) {
        setError(error?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);
  return (
    <Container sx={{ py: { xs: 3, md: 4 }, px: { xs: 4, md: 4 } }}>
      <StyledTypography component="h2">{`Our Shaadi Services`}</StyledTypography>
      {/* Hero Section */}
      <Grid
        container

        spacing={2}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        sx={{ border: "1px solid #ddd", borderRadius: "8px", }}
      >
        <Grid item size={{ xs: 12, sm: 6, md: 8 }}
          sx={{ p: 2 }}
        >
          <HeroImageContainer>
            <Image
              src={services[0]?.image}
              alt={services[0]?.title}
              width={480}
              height={480}
            />
          </HeroImageContainer>
        </Grid>
        <Grid item size={{ xs: 11, sm: 6, md: 4 }} >
          <HeroContent sx={{ py: { xs: 0, sm: 2, md: 1.5 } }} >
            <Typography component="h2" variant="h2"
              sx={{
                paddingRight: { xs: "5px", sm: "2px" },
                px: { xs: "5px", sm: "2px" },
                fontFamily: "Gloock, serif",
                fontWeight: 400,
                color: "#000000",
                mb: 2
              }}>
              {selectedService
                ? trimText(selectedService.title, 110)
                : trimText(services[0]?.title || servicesData.hero.title, 40)}
            </Typography>
            <Typography component="p" variant="p"
              sx={{
                px: { xs: "5px", sm: "1px" },
                fontFamily: "Akatab,Sans-serif",
                fontWeight: "400",
                color: "#000000",
                textAlign: "left",
                mb: 2
              }}>
              {selectedService
                ? trimText(selectedService.description, 80)
                : trimText(services[0]?.description, 110)}
            </Typography>
            <CustomButton
              sx={{
                marginLeft: { xs: "5px", sm: "5px", md: 0 },
                alignItems: "start",
                mb: 2,
                fontFamily: "Akatab, Sans-serif !important"
              }}
              onClick={() => {
                handleNavigate(services[0]?.uid);
              }}
            >
              {servicesData.hero.buttonText}
            </CustomButton>
          </HeroContent>
        </Grid>
      </Grid>

      {/* <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Item>{index + 1}</Item>
          </Grid>
        ))}
      </Grid> */}

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
                  <Box sx={{height:"100%", width:"100px"}}>
                      <Image
                      src={val?.image}
                      height={100}
                      width={100}
                      style={{ border: "1px solid #ddd", borderRadius: "8px" }}
                    />
                  </Box>
                    <Box>
                      <Typography
                        component="h6"
                        mb={1}
                        sx={{
                          fontFamily: "Akatab, Sans-serif",
                          fontWeight: 700,

                        }}
                      >
                        {val?.title}
                      </Typography>
                      <Typography

                        component="p"
                        sx={{
                          fontFamily: "Akatab, Sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {val?.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* <MainContainer >
        <Grid
          container
          spacing={2}
          justifyContent={{ xs: "center", md: "start" }}
        >
          {(services.length ? services : servicesData.services).map((service) => (
            <Grid
              item
              key={service.id}
              onClick={() => {
                handleNavigate(service.uid);
              }}
              {...{ xs: 12, sm: 6, md: 4, ...(service.gridProps || {}) }}
              display="flex"
              justifyContent="center"
            >
              <ServiceCard
                onClick={() => setSelectedService(service)}
                isSelected={selectedService?.id === service.id}
              >
                <ImageContainer>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={100}
                    height={125}
                  />
                </ImageContainer>
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>
                    {highlightSpecificWords(service.description, [
                      "Vintage",
                      "Bollywood",
                      "Royal",
                      "Rajput",
                      "YES",
                    ])}
                  </ServiceDescription>
                </ServiceContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
       
      </MainContainer> */}
    </Container>
  );
};

export default ShaddiService;
