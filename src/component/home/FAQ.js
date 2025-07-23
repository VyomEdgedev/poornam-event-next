import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const faqData = [
  {
    question: "Do you only plan weddings in Indore?",
    answer: "Nope! We serve Bhopal, Ujjain, and beyond.",
  },
  {
    question: "Can you help with last-minute weddings?",
    answer: " Absolutely. We’ve pulled off 3-day prep shaadis with a smile.",
  },
  {
    question: "Do you provide decorators and photographers too?",
    answer: "Yes! We provide decorators and photographers too.",
  },
  {
    question: "Do you offer budget planning help?",
    answer: "Of course! We even have a free planner you can download.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ backgroundColor: "#fdf8ef", py: 3, px: 4 }}>
      <Typography
        variant="h2"
        component={"h2"}
        align="center"
        sx={{ fontFamily: "Gloock, serif", fontWeight: 400, mb: 1 }}
      >
        FAQ’s
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          mb: 4,
          fontFamily: "Akatab, Sans-serif",
          fontWeight: 400,
        }}
      >
        Your Questions, Answered
      </Typography>

      <Box maxWidth="lg" mx="auto">
        {faqData.map((item, index) => {
          const isOpen = expanded === index;

          return (
            <Grid
              container
              key={index}
              spacing={isTabletUp ? { md: 2, lg: 6, xl: 6 } : 0}
              alignItems="flex-start"
              sx={{
                borderBottom: "1px solid #e0b855",
                mb: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Grid item xs={12} sm={6}>
                <Accordion
                  expanded={isOpen}
                  onChange={handleChange(index)}
                  disableGutters
                  square
                  elevation={0}
                  sx={{
                    backgroundColor: "transparent",
                    "&::before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ChevronRightIcon
                        sx={{
                          transform: {
                            xs: isOpen ? "rotate(270deg)" : "rotate(-90deg)", // Mobile view
                            sm: isOpen ? "rotate(-180deg)" : "rotate(90deg)", // Tablet and up
                          },
                          transition: "transform 0.3s ease",
                          color: "#001538",
                        }}
                      />
                    }
                    sx={{
                      minHeight: 48,
                      "& .MuiAccordionSummary-content": {
                        marginY: "8px",
                        fontFamily: "Akatab, Sans-serif",
                        fontWeight: 500,
                        color: "#001538",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "250px",
                          md: "350px",
                          lg: "450px",
                        },
                        fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                        fontFamily: "Akatab, Sans-serif",
                        fontWeight: 700,
                        color: "#001538",
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              </Grid>

              {/* Answer right on desktop, below on mobile */}
              {isOpen && (
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      paddingTop: { xs: 0, sm: 1, md: 1, lg: 1 },
                      paddingLeft: { xs: 2, sm: 2 },
                      transition: "opacity 0.4s ease",
                      opacity: 1,
                      
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "250px",
                          md: "350px",
                          lg: "450px",
                        },
                        fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                        fontFamily: "Akatab, Sans-serif",
                        fontWeight: 400,
                        color: "#001538",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
}
