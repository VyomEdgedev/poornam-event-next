import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const blogData = {
  title: "Latest From the Blog",
  viewAllText: "View All Blogs",
  posts: [
    {
      id: 1,
      title: "Shaadi Mein Budget Toh Hai, Par Planning Kaha Hai?",
      subtitle: "Learn how to make every rupee feel like a royal investment.",
      category: "Budget & Planning",
      image: "./blogsection1.png",
      imageAlt: "Wedding venue with golden lights and decorations",
    },
    {
      id: 2,
      title: "Top 5 Destination Wedding Locations You Haven't Considered Yet",
      subtitle:
        "Beyond Goa and Udaipur — these hidden gems are chef's kiss for intimate vibes.",
      category: "Destination Weddings",
      image: "./blogsection2.png",
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
    ? { xs: 2, sm: 1, md: 6 }   // spacing when screen is small
    : { xs: 2, sm: 3, md: 6 }; // spacing when screen is large

  return (
    <Box
      sx={{ py: 5, px: { xs: 2, sm: 8, md: 10 }, backgroundColor: "#FFF7E4" }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2rem", md: "3rem" },
              fontFamily: "Gloock,serif",
              fontWeight: 400,
              color: "#000000",
              mb: 3,
              fontFamily: "serif",
            }}
          >
            {blogData.title}
          </Typography>
          <Button data-testid="notify-button"
            variant="contained"
            sx={{
              backgroundColor: "#ffa726",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 25,
              textTransform: "none",
              fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
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
                    width: { xs: "100%", sm: "100%", md: "460px" },
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
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: "100%", sm: "100%", md: "458px" },
                      height: "350px",
                      objectFit: "cover",
                      margin: "0 auto",
                    }}
                    image={post.image}
                    alt={post.imageAlt}
                  />
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Akatab,Sans-serif",
                      color: "#000000",
                      mb: 1,
                      lineHeight: 1.4,
                      textAlign: "center",
                      pt: 2,
                      px: 2,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
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
                        fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
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
