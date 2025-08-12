import { Box, Container, Typography } from "@mui/material";
const Story = [
  {
    heading: "Our Story “From One Wedding... to a Thousand Memories”",
    paragraphs: [
      "Poornam wasn’t born in a boardroom. It began in the middle of marigolds, mehendi music, and the madness of our founder’s cousin’s wedding. what started as a one-time rescue mission in Indore turned into a lifelong passion -turning shaadis into art, chaos intochoreography, and budgets into beauty.",
      "Today, we’re a team of planners, designers, crisis-managers, and dream-weavers who believe that every wedding is “once-in-a-lifetime,”not “one-size-fits-all.”",
    ],
  },
];

export default function OurStories() {
  return (
    <Container>
      <Box
        display="block"
        justifyItems="center"
        justifyContent="center"
        sx={{ py: { xs: "20px", sm: "40px", md: "60px" } }}
      >
        {Story.map((story, index) => (
          <Box key={index}>
            {/* Heading */}
            <Typography
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
                component="p"
                key={i}
                sx={{
                  fontWeight: 400,
                  fontFamily: "Akatab, sans-serif",
                  color:"#000000",
                  mb: 1,
                }}
              >
                {p}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
