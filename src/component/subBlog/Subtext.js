import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Container,
  Typography,
  Box,
  Grid,
  Chip,
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
   if(id){
    fetchBlogs();
     
   }
  }, [id]);

  // if (loading) return <CircularProgress sx={{ m: 5 }} />;
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
          {/* <Typography
                        sx={{
                            fontSize: { xs: "24px", sm: "28px", md: "36px" },
                            fontWeight: 600,
                            frontFamily: "Akatab,serif",
                            lineHeight: "1.2",
                            // letterSpacing: "0.02em",
                            whiteSpace:{xs:'normal',sm:'normal',md:'normal',lg:"nowrap"},
                            marginBottom:"10px"
                        }}
                    >
                        {SubtextData.heading}
                    </Typography> */}
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
              lineHeight: "1.5",
              fontFamily: "Akatab,Sans-serif",
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* <Typography
                        sx={{
                            fontSize: { xs: "16px", sm: "20px", md: "24px" },
                            fontWeight: 600,
                             frontFamily: "Akatab,serif",
                        }}
                    >
                        {SubtextData.subHeading}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "16px", sm: "20px", md: "24px" },

                         frontFamily: "Akatab,serif",
                        }}
                    >
                        {SubtextData.line}
                    </Typography> */}
          {/* <Box>
           */}
          {/* <Typography
                            sx={{
                                fontSize: { xs: "16px", sm: "20px", md: "24px" },

                               frontFamily: "Akatab,serif",
                            }}
                        >
                            {SubtextData.line1}
                        </Typography> */}
          {/* <Typography
                            sx={{
                                fontSize: { xs: "16px", sm: "20px", md: "24px" },

                                  frontFamily: "Akatab,serif",
                            }}
                        >
                            {SubtextData.line2}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "16px", sm: "20px", md: "24px" },
                                fontWeight: 600,
                                  frontFamily: "Akatab,serif",
                            }}
                        >
                            {SubtextData.line3}
                        </Typography> */}
          {/* </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Subtext;
