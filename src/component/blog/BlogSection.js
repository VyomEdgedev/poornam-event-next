import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';

const BlogSection = ({ posts }) => {
  const [visibledPosts, setVisibledPosts] = useState([]);

  useEffect(()=>{
    setVisibledPosts(posts.slice(0, 15))
  },[])

  const handleViewMore = () => {
    const newAddPosts = posts.slice(visibledPosts.length, visibledPosts.length + 6);
    setVisibledPosts((prev) => [...prev, ...newAddPosts]);
  }

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
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#DAA412",
              borderRadius: 3,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#ccc",
            },
          }}
        >
          {visibledPosts.map((post, idx) => (
            <Box
              key={post._id || idx}
              sx={{
                flex: "0 0 auto",
                width: { xs: "300px", sm: "350px", md: "360px" },
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
        {
          visibledPosts.length < posts.length &&
          visibledPosts.length >= 15 &&
          <Box sx={{ textAlign: "center", paddingTop: 2 }}>
            <IconButton className="view-more-icon" size="large" onClick={handleViewMore}>
              <KeyboardDoubleArrowDownSharpIcon sx={{ height: "40px", fill: "#DAA412", width: "40px" }} />
            </IconButton>
          </Box>
        }
      </Container>
    </Box>
  );
};

export default BlogSection;
