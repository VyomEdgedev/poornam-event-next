import React from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Gloock, serif",
  fontWeight: 400,
  color: "#000000",
  marginBottom: theme.spacing(4),

}));

const EventItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(3),
  position: "relative",
  paddingBottom: theme.spacing(2),
  "&:last-child": {
    marginBottom: 0,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
    backgroundColor: "#d0d0d0",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2),
  fontSize: "24px",
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
    fontSize: "20px",
  },
}));

const IconImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));

const EventText = styled(Typography)(({ theme }) => ({
  fontFamily: "Akatab, sans-serif",
  color: "#000000",
  fontWeight: 400,
  width: "160px",
  height: "56px",
  display: "flex",
  alignItems: "center",
}));

const WeddingChecklist = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const events = [
    {
      icon: "./checklist.png",
      text: "Emcee replaced mid-sangeet",
    },
    {
      icon: "./checklist1.png",
      text: "Baraat came early",
    },
    {
      icon: "./checklist2.png",
      text: "Phoolon Ki Holi bride entry",
    },
    {
      icon: "./checklist3.png",
      text: "Sherwani found at 2AM",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFF7E4",
        py: 5,
      }}
    >
      <Container >
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "flex-start",
            gap: { xs: 1, sm: 4, md: 5, lg: 4, xl: 2 },
          }}
        > */}
        <Grid container spacing={0} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          alignItems={"center"}
          justifyItems={"center"} justifyContent={"center"}

        >  {/* Main Title Section */}
          <Grid item size={{ xs: 12,md: 6, lg: 4 }} >
            <MainTitle component="h2"
              textAlign={{ xs: "center", sm: "start" }}>
            {`  Shaadi Mein
              Kya-Kya Karwaya
              Hai?`}
            </MainTitle>
          </Grid>
          <Grid item size={{ xs: 12 , md: 6, lg: 8 }} justifyContent={"center"}>
            <Grid container spacing={2} columns={12}
             justifyContent={{xs:"space-around" }}
            >

              <Grid display="flex"
                borderBottom="2px solid grey"
                justifyContent={"center"}
                gap={3}
                alignItems={"center"}
                py={1}
                >
               <Box>
                 <Image
                  src="/checklist.png"
                  alt='Checklist Image'
                  width={70}
                  height={70}
                />
               </Box>

                <Typography
                  component={"h6"}
                sx={{
                  fontFamily: "Akatab, sans-serif",
                  color: "#000000",
                  fontWeight: 400,
                  width: "180px",
                 
                  alignItems:"center"
                }}>{`Emcee replaced mid-sangeet`}</Typography>
              </Grid>

              <Grid display="flex"
                borderBottom="2px solid grey"
                justifyContent={"center"}
                gap={3}
                alignItems={"center"}
                py={1}
                flex="wrap">
               <Box>
                 <Image
                  src="/checklist1.png"
                  alt='Checklist Image'
                  width={70}
                  height={70}
                />
               </Box>
                <Typography 
                  component={"h6"}
                sx={{
                  fontFamily: "Akatab, sans-serif",
                  color: "#000000",
                  fontWeight: 400,
                  width: "180px",
                  
                 
                }}>{`Baraat came early`}</Typography>
              </Grid>
              <Grid display="flex"
                borderBottom="2px solid grey"
                justifyContent={"center"}
                gap={3}
                alignItems={"center"}
                 py={1}

                flex="wrap">
                <Image
                  src="/checklist2.png"
                  alt='Checklist Image'
                  width={70}
                  height={70}
                />
                <Typography 
                  component={"h6"}
                sx={{
                  fontFamily: "Akatab, sans-serif",
                 
                  color: "#000000",
                  fontWeight: 400,
                  width: "180px",
                
                }}>{`Phoolon Ki Holi bride entry`}</Typography>
              </Grid>
              <Grid display="flex"
                borderBottom="2px solid grey"
                justifyContent={"center"}
                gap={3}
                alignItems={"center"}
                py={1}
                flex="wrap">
                <Image
                  src="/checklist3.png"
                  alt='Checklist Image'
                  width={70}
                  height={70}
                />
                <Typography 
                component={"h6"}
                sx={{
                  fontFamily: "Akatab, sans-serif",
                  color: "#000000",
                  width: "180px",
                  fontWeight: 400,
               
                }}>{`Sherwani found at 2AM`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        {/* Main Title Section */}
        {  /*<Box
            sx={{
              flex: isMobile ? "none" : 1,
              minWidth: isMobile ? "100%" : "300px",
              mb: isMobile ? 3 : 0,
            }}
          >
            <MainTitle variant="h2">
              Shaadi Mein
              <br />
              Kya-Kya Karwaya
              <br />
              Hai?
            </MainTitle>
          </Box>}

          {/* Events Grid */}
        {/*  <Box
            sx={{
              flex: isMobile ? "none" : 1,
              width: "100%",
              // maxWidth: isMobile ? '100%' : '600px'
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isTablet
                    ? "1fr"
                    : "repeat(2, 1fr)",
                gap: 1,
                alignItems: "baseline",
                width: "100%",
              }}
            >
              {events.map((event, index) => (
                <EventItem key={index}>
                  <IconWrapper>
                    <IconImage
                      src={event.icon}
                      alt={`Icon for ${event.text}`}
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.target.style.display = "none";
                      }}
                    />
                  </IconWrapper>
                  <EventText>{event.text}</EventText>
                </EventItem>
              ))}
            </Box>
          </Box>*/}
        {/* </Box> */}
      </Container>
    </Box>
  );
};

export default WeddingChecklist;
