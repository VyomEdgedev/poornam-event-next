"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Chip,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import axios from "axios";
import { apiClient } from "@/lib/api-client";
import { useRouter } from "next/router";
import Image from "next/image";

const cardData = {
  image: "/SubBlog.png",
  category: "Budget & Planning",
  title: "Shaadi Mein Budget Toh Hai, Par Planning Kaha Hai?",
  author: "Author",
  date: "02-07-2025",
};

const BlogCard = ({setFaq}) => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await apiClient.get(`api/blogs/${id}/event`);
        console.log(response);
        const data = response.data.blog;
        if (data) {
          setPosts(data);
          setFaq(data.faq)
        } else {
          setPosts(null);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchBlogs();
    }
  }, [id]);
  // if (loading) return <CircularProgress sx={{ m: 5 }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={{ xs: 2, sm: 6, md: 10 }}
      py={5}
    >
      {posts && (
        <Card
          sx={{
            position: "relative",
            borderRadius: 2,
            width: { xs: "100%", sm: "100%", md: "100%", lg: "74%", xl: "74%" },
            height: 449,
            overflow: "hidden",
          }}
        >
          <Image
            src={posts?.featuredImage?.url}
            alt={posts?.title}
            width={600}
            height={400}
            style={{ objectFit: "cover", width: "100%", height: "100%" ,position:"center" }}
          />

          {/* Share icon top-right */}
          <IconButton
            data-testid="notify-button"
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              // bgcolor: 'rgba(0,0,0,0.4)',
              "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ShareIcon data-testid="notify-button" />
          </IconButton>

          {/* Overlay Text */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              p: 2,
              bgcolor: "rgba(0,0,0,0.4)",
              color: "white",
            }}
          >
            <Typography
             component={"p"}
              sx={{
                fontWeight: 600,
                fontFamily: "Akatab,Sans-serif",
              }}
            >
              Category: {posts?.category?.name || "N/A"}
            </Typography>
            <Typography
            component={"p"}
              sx={{
               
                fontWeight: 600,
                fontFamily: "Akatab,Sans-serif",
              }}
            >
              {posts.title}
            </Typography>
            <Chip
              label={`${posts.authorName || "Author"} | ${new Date(
                posts.createdAt
              ).toLocaleDateString("en-GB")}`}
              variant="outlined"
              component={"p"}
              sx={{
                mt: 1,
                color: "white",
                borderColor: "white",
                fontSize: "0.8rem",
                fontFamily: "Akatab,Sans-serif",
              }}
            />
          </Box>
        </Card>
      )}
    </Box>
  );
};

export default BlogCard;
