"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Chip,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Image from "next/image";

const BlogCard = ({ blogimg }) => {
  const [showShareMessage, setShowShareMessage] = useState(false);
  const handleShare = async () => {
    const currentUrl = window.location.href;
    const shareData = {
      title: posts?.title || "Blog Post",
      text: posts?.excerpt || "Check out this interesting blog post!",
      url: currentUrl,
    };
    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(currentUrl);
        setShowShareMessage(true);
      }
    } catch (error) {
      console.log("clipboard"); 
      try {
        await navigator.clipboard.writeText(currentUrl);
        setShowShareMessage(true);
      } catch (clipboardError) {
        console.error("Failed to copy URL:", clipboardError);
        alert(`Share this URL: ${currentUrl}`);
      }
    }
  };
  const posts = blogimg;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={{ xs: 2, sm: 6, md: 10 }}
      py={5}
      mt={6}
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
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "center",
            }}
          />

          {/* Share icon top-right */}
          <IconButton
            data-testid="share-button"
            onClick={handleShare}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              bgcolor: "rgba(0,0,0,0.3)",
              zIndex: "1500",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.6)",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            <ShareIcon sx={{ cursor: "pointer" }} />
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
              component={"h1"}
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

      {/* Share success message */}
      <Snackbar
        open={showShareMessage}
        autoHideDuration={3000}
        onClose={() => setShowShareMessage(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowShareMessage(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          URL copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BlogCard;
