import { Typography, Box, Container } from "@mui/material";
import React from "react";

const WhyChoose = ({ title, description }) => {
  const safeDescription = React.useMemo(() => {
    const html = description || "";
    return html
      .replace(/<h1\b([^>]*)>/gi, "<h2$1>")
      .replace(/<\/h1>/gi, "</h2>");
  }, [description]);
  return (
    <Box py={{ xs: "20px", sm: "20px", md: "20px" }} textAlign="center">
      <Container>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="flex-start"
          textAlign="center"
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            margin: 2,
            padding: 1,
            gap: {xs:2, sm:3,md:6}
          }}
        >
          <Box
            component="img"
            src="/Arches.svg"
            alt="Sample"
            height="120px"
            sx={{ flexShrink: 0 }}
          />
          <Box sx={{ textAlign: "left" }}>
            <Typography
              component="h3"
              sx={{ fontFamily: "Gloock, Sans-serif" }}
            >
              {`${title} with Poornam?`}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: safeDescription }}
              component="p"
              sx={{ fontFamily: "Akatab, Sans-serif" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChoose;
