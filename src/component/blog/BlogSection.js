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

  return (
    <Box sx={{ py: 2, px: { xs: 2, md: 15 }, backgroundColor: "#fefefe" }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
          <Button
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

        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ px: 0 }}>
          {blogData.posts.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <Box sx={{ px: 0 }}>
                <Card
                  sx={{
                    width: "80%",
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
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    image={post.image}
                    alt={post.imageAlt}
                  />

                  <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
                    <Chip
                      label={post.category}
                      sx={{
                        backgroundColor: "#fff3e0",
                        fontWeight: 400,
                        fontFamily: "Akatab,Sans-serif",
                        color: "#f57c00",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        mb: 1.5,
                        height: 24,
                      }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.85rem",
                          md: "0.85rem",
                        },
                        fontWeight: 400,
                        fontFamily: "Akatab,Sans-serif",

                        lineHeight: 1.1,
                        color: "#000000",
                        mb: 1,
                      }}
                    >
                      {post.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#000000",
                        fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                        fontWeight: 500,
                        fontFamily: "Akatab,Sans-serif",
                        lineHeight: 1.4,
                        fontWeight: 500,
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
