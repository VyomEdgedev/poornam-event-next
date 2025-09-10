import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BlogSection = ({ posts }) => {
  if (!posts?.length) return null;

  return (
    <Box sx={{ py: 5, backgroundColor: "#fff" }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Gloock,serif",
              fontWeight: 400,
              color: "#000000",
              mb: 3,
            }}
          >
           {` Wedding Blog`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              height: 6,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#DAA412",
              borderRadius: 3,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#ccc",
            },
          }}
        >
          {posts.map((post, idx) => (
            <Box
              key={post._id || idx}
              sx={{
                flex: "0 0 auto",
                width: { xs: "300px", sm: "350px", md: "400px" },
              }}
            >
              <Link href={`/blog/${post.uid}`} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 1,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                    },
                    cursor: "pointer",
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: "220px", sm: "250px", md: "280px" },
                    }}
                  >
                    <Image
                      src={post.featuredImage?.url}
                      alt={post.featuredImage?.altText || post.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    component="h6"
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Akatab,Sans-serif",
                      color: "#000000",
                      px: 2,
                      pt: 2,
                      mb: 1,
                    }}
                  >
                    {post.title}
                  </Typography>

                  <CardContent sx={{ p: 2, textAlign: "center" }}>
                    <Typography
                      component="h6"
                      sx={{
                        fontFamily: "Akatab,Sans-serif",
                        color: "#00000080",
                        fontWeight: 500,
                        mb: 1.5,
                      }}
                    >
                      {post.category?.name}
                    </Typography>
                    <Typography
                      component="h6"
                      sx={{
                        fontFamily: "Akatab,Sans-serif",
                        color: "#000000",
                        fontWeight: "bold",
                      }}
                    >
                      {post.authorName}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;
