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



export default function FAQSection({faq=[]}) {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ backgroundColor: "#fdf8ef",py:3}}>
      <Container>
        <Box>
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
            {faq.map((item, index) => {
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
                  <Grid item sx={{ width: { xs: "100%", sm: "50%" } }}>
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
                                xs: "rotate(90deg)", // Mobile view
                                sm: isOpen
                                  ? "rotate(-180deg)"
                                  : "rotate(90deg)", // Tablet and up
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
                    <Grid item sx={{ width: { sm: "45%" } }}>
                      <Box
                        sx={{
                          paddingTop: { xs: 0, sm: 2, md: 1.5, lg: 2 },
                          paddingLeft: { xs: 2, sm: 2 },
                          transition: "opacity 0.4s ease",
                          opacity: 1,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
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
      </Container>
    </Box>
  );
}
