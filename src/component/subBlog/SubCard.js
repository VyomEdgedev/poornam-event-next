import React from 'react';
import { Card, CardMedia, Container, Typography, Box, Grid, Chip } from '@mui/material';

const SubCard = () => {
  // JSON data inside the component
  const blogCardData = {
    image: "/SubBlog.png",
    category: "Budget & Planning",
    title: "Shaadi Mein Budget Toh Hai, Par Planning Kaha Hai?",
    authorInfo: "Author | 02-07-2025",
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Card sx={{ position: "relative", height: { xs: 400, md: 450 } }}>
            <CardMedia
              component="img"
              height="100%"
              image={blogCardData.image}
              alt="Blog Preview"
              sx={{ objectFit: "cover", width: "100%" }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                color: "white",
                px: 3,
                py: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  fontFamily: "Akatab",
                }}
              >
                Category: {blogCardData.category}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.3rem", md: "1.7rem" },
                  fontWeight: 600,
                  fontFamily: "Akatab",
                }}
              >
                {blogCardData.title}
              </Typography>

              <Chip
                label={blogCardData.authorInfo}
                variant="outlined"
                sx={{
                  mt: 1,
                  color: "white",
                  borderColor: "white",
                  fontSize: { xs: "0.75rem", md: "0.85rem" },
                  fontFamily: "Akatab",
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubCard;
