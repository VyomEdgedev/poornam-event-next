import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from 'next/router';
import Image from 'next/image';

const blogData = {
  title: "Latest From the Blog",
  viewAllText: "View All Blogs",
  posts: [
    {
      id: 1,
      title: "Shaadi Mein Budget Toh Hai, Par Planning Kaha Hai?",
      subtitle: "Learn how to make every rupee feel like a royal investment.",
      category: "Budget & Planning",
      image: "/blogsection1.png",
      imageAlt: "Wedding venue with golden lights and decorations",
    },
    {
      id: 2,
      title: "Top 5 Destination Wedding Locations You Haven't Considered Yet",
      subtitle:
        "Beyond Goa and Udaipur — these hidden gems are chef's kiss for intimate vibes.",
      category: "Destination Weddings",
      image: "/blogsection2.png",
      imageAlt:
        "Wedding planning infographic with venue and catering statistics",
    },
  ],
};

const BlogSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isBelow1150 = useMediaQuery('(max-width:1150px),(spacing:50px)');
  const responsiveSpacing = isBelow1150
    ? { xs: 2, sm: 3, md: 2, lg: 8, xl: 25 }   // spacing when screen is small
    : { xs: 2, sm: 3, md: 2 , lg: 8, xl: 25}; // spacing when screen is large
  const router = useRouter();

    const handleNavigate = () => {
      router.push('/subblog');
    };

  return (
    <Box
      sx={{ py: 5, px: { xs: 2, sm: 8, md: 5, lg: 10, xl: 3 },  backgroundColor: "#FFF7E4" }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              // fontSize: { xs: "1.8rem", sm: "2rem", md: "3rem" },
              fontFamily: "Gloock,serif",
              fontWeight: 400,
              color: "#000000",
              mb: 3,
              fontFamily: "serif",
            }}
          >
            {blogData.title}
          </Typography>
          <Button onClick={() => handleNavigate() } data-testid="notify-button"
            variant="contained"
            sx={{
              backgroundColor: "#ffa726",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 25,
              textTransform: "none",
              fontSize: { xs: "16px", sm: "16px", md: "16px" },
              fontWeight: 500,
              fontFamily: "Akatab,Sans-serif",

              "&:hover": {
                backgroundColor: "#ff9800",
              },
            }}
          >
            {blogData.viewAllText}
          </Button>
        </Box>

        <Grid container spacing={responsiveSpacing}
          alignItems={isBelow1150 ? 'center' : "center"}
          justifyContent={isBelow1150 ? 'center' : 'center'} sx={{ px: 0 }}>
          {blogData.posts.map((post) => (
            <Grid item xs={12} sm={8} md={6} key={post.id}>
              <Box sx={{ px: 0 }}>
                <Card
                  sx={{
                    width: { xs: "350px", sm: "400px", md: "460px", lg: "460px", xl: "460px" },
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    mx: "auto",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                    },
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{
                    position: 'relative',
                    width: { xs: "100%", sm: "100%", md: "460px" ,lg: "460px", xl: "460px"},
                    height: { xs: "250px", sm: "250px", md: "300px" , lg: "350px", xl: "350px"},
                    margin: "0 auto",
                  }}>
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      style={{
              
                        objectFit: "cover",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Akatab,Sans-serif",
                      color: "#000000",
                      mb: 1,
                      lineHeight: 1.4,
                      textAlign: "cover",
                      pt: 2,
                      px: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
                    }}
                  >
                    {post.title}
                  </Typography>
                  <CardContent sx={{ p: 1.5, flexGrow: 1 }}>
                    <Typography
                      label={post.category}
                      sx={{

                        fontWeight: 400,
                        fontFamily: "Akatab,Sans-serif",
                        color: "#00000080",
                        textAlign: "center",
                        fontWeight: 500,
                        mb: 1.5,
                        height: 24
                      }}>
                      {post.category}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="h6"
                      sx={{
                        color: "#000000",
                        fontSize: { xs: "16px", sm: "16px", md: "16px" },
                        fontWeight: 500,
                        fontFamily: "Akatab,Sans-serif",
                        lineHeight: 1.5,
                        fontWeight: 500,
                        fontWeight: 'bold',
                        textAlign: "center",
                      }}
                    >
                      {post.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;