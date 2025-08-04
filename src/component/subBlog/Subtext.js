import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { apiClient } from "@/lib/api-client";
import { useRouter } from "next/router";
const Subtext = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await apiClient.get(`api/blogs/${id}/event`);
        console.log(response);
        const blog = response.data.blog;
        if (blog && blog.description) {
          setDescription(blog.description);
        } else {
          setDescription("No description found.");
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

  if (loading) return <CircularProgress sx={{ m: 5 }} />;
  if (error)
    return (
      <Typography color="error">
        Error: {error.message || "Something went wrong"}
      </Typography>
    );
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={{ xs: 2, sm: 6, md: 10 }}
      py={4}
    >
      <Box maxWidth="1100px" width="100%" textAlign="left">
        <Box>
          <Box
            component="div"
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
              lineHeight: "1.5",
              fontFamily: "Akatab,Sans-serif",
              "& *": {
                fontFamily: "Akatab, Sans-serif",
              },
              "&  h1, ": {
                fontFamily: "Gloock, serif",
                fontWeight: 400,
                color: "#000D1F",
              },
              "& h2 & h3, & h4 ": {
                fontFamily: "Akatab,Sans-serif",
                fontWeight: 600,
                color: "#000D1F",
              },
              "& h3, & h4 ": {
                fontSize: { xs: "20px", sm: "22px", md: "28px" },
              },

              "&   & h5, & h6 , & p ": {
                fontFamily: "Akatab,Sans-serif",
                fontWeight: 400,
                color: "#000D1F",
                // fontSize: { xs: "16px", sm: "18px", md: "22px" },
              },
              "&  p ": {
                fontFamily: "Akatab,Sans-serif",
                fontWeight: 400,
                color: "#000D1F",
                fontSize:{xs:"16px", sm:"16px", md:"16px", lg:"18px"}
              },
              "& ul, & ol": {
                paddingLeft: "50px",
                fontSize: { xs: "16px", sm: "16px", md: "18px" },
              },
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Subtext;
