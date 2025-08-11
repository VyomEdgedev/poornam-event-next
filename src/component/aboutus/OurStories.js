import { useState } from "react";
import { Box, Typography } from "@mui/material";
const Story = [
  {
    "heading": "Our Story “From One Wedding... to a Thousand Memories”",
    "paragraphs": [
      "Poornam wasn’t born in a boardroom. It began in the middle of marigolds, mehendi music, and the madness of our founder’s cousin’s wedding. what started as a one-time rescue mission in Indore turned into a lifelong passion -turning shaadis into art, chaos intochoreography, and budgets into beauty.",
      "Today, we’re a team of planners, designers, crisis-managers, and dream-weavers who believe that every wedding is “once-in-a-lifetime,”not “one-size-fits-all.”"
    ]
  }
];

export default function OurStories() {
  return (


    <Box 
    display="block"
    justifyItems="center"
    justifyContent="center"
    width="100%"
    maxWidth="1350px"
    margin="0 auto"
    sx={{ padding: {xs:"40px", sm:"40px", md:"40px"} }}>
      {Story.map((story, index) => (
        <Box key={index} sx={{ marginBottom: "1.5rem" }}>
          {/* Heading */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "black",
             
              fontFamily: "Gloock, serif",
              fontWeight: 400,
              mb: 1.5,
            }}
          >
            {story.heading}
          </Typography>

          {/* Paragraphs */}
          {story.paragraphs.map((p, i) => (
            <Typography
             variant="p"
            component="p"
              key={i}
              sx={{
                lineHeight: 1.6,
           
                fontWeight: 400,
                fontFamily: "Akatab, sans-serif",
                mb: 1,
              }}
            >
              {p}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};




