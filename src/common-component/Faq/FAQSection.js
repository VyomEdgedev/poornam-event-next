import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  useMediaQuery,
  useTheme,
  Grid,
  Container,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const faqData = [
  { question: "Do you only plan weddings in Indore?", answer: "Nope! We serve Bhopal, Ujjain, and beyond." },
  { question: "Can you help with last-minute weddings?", answer: "Absolutely. We’ve pulled off 3-day prep shaadis with a smile." },
  { question: "Do you provide decorators and photographers too?", answer: "Yes! We provide decorators and photographers too." },
  { question: "Do you offer budget planning help?", answer: "Of course! We even have a free planner you can download." },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ backgroundColor: "#fdf8ef", py: 3 }}>
      <Container>
        {/* Heading */}
        <Typography
          component="h2"
          align="center"
          sx={{ fontFamily: "Gloock, serif", fontWeight: 400, mb: 1 }}
        >
          FAQ’s
        </Typography>
        <Typography
          component="p"
          align="center"
          sx={{
            mb: 4,
            fontFamily: "Akatab, Sans-serif",
            fontWeight: 400,
          }}
        >
          Your Questions, Answered
        </Typography>

        {/* FAQ Items */}
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
                  flexWrap: "nowrap",
                }}
              >
                {/* Question */}
                <Grid item sx={{ width: { xs: "100%", sm: "50%" } }} >
                  <Accordion
                      component="div"
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
                      disableTypography
                         component="div"
                         
                      expandIcon={
                        <ChevronRightIcon
                        
                          sx={{
                            transform: {
                              xs: "rotate(90deg)",
                              sm: isOpen
                                ? "rotate(-180deg)"
                                : "rotate(90deg)",
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
                        },
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{
                          fontFamily: "Akatab, Sans-serif",
                          fontWeight: 700,
                          fontSize: { xs: "14px", sm: "16px", md: "18px" },
                          color: "#001538",
                        }}
                      >
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                  </Accordion>
                </Grid>

                {/* Answer */}
                {isOpen && (
                  <Grid item sx={{ width: { sm: "45%" } }}>
                    <Box
                      sx={{
                        paddingTop: { xs: 0, sm: 2, md: 1.5 },
                        paddingLeft: { xs: 2, sm: 2 },
                        transition: "opacity 0.4s ease",
                        opacity: 1,
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{
                          fontFamily: "Akatab, Sans-serif",
                          fontWeight: 400,
                          color: "#001538",
                          lineHeight: 1.3,
                          mb: 0.4,
                          fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
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
      </Container>
    </Box>
  );
}
