// FAQSection.js - Enhanced Reusable FAQ Component
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const FAQSection = ({
  title = "FAQ's",
  subtitle = "Your Questions, Answered",
  faqData = [],
  backgroundColor = '#fdf8ef',
  borderColor = '#e0b855',
  textColor = '#001538',
  titleVariant = 'h4',
  titleFontFamily = 'Gloock, serif',
  bodyFontFamily = 'Akatab, Sans-serif',
  maxWidth = 'lg',
  padding = 4,
}) => {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ backgroundColor, py: 3, px: 4 }}>
      <Typography
        variant={"h2"}
        align="center"
        sx={{
          fontFamily: titleFontFamily,
          fontWeight: 400,
          mb: 1,
          color: textColor,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          mb: 4,
          fontFamily: bodyFontFamily,
          fontWeight: 400,
          color: textColor,
        }}
      >
        {subtitle}
      </Typography>

      <Box maxWidth={maxWidth} mx="auto">
        {faqData.map((item, index) => {
          const isOpen = expanded === index;
          return (
            <Grid
              container
              key={index}
              spacing={isTabletUp ? { md: 2, lg: 6, xl: 6 } : 0}
              alignItems="flex-start"
              sx={{ borderBottom: `1px solid ${borderColor}`, mb: 2 }}
            >
              {/* Question Accordion */}
              <Grid item xs={12} sm={6}>
                <Accordion
                  expanded={isOpen}
                  onChange={handleChange(index)}
                  disableGutters
                  square
                  elevation={0}
                  sx={{
                    backgroundColor: 'transparent',
                    '&::before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ChevronRightIcon
                        sx={{
                          transform: {
          xs: isOpen ? 'rotate(270deg)' : 'rotate(-90deg)', // Mobile view
          sm: isOpen ? 'rotate(-180deg)' : 'rotate(90deg)', // Tablet and up
        },
                          transition: 'transform 0.4s ease',
                          color: textColor,
                          marginX:"58px"
                        }}
                      />
                    }
                    sx={{ 
                      minHeight: 48,
                      '& .MuiAccordionSummary-content': {
                        marginY: { xs: 2, sm: 3 , md: 2 , lg: 2 },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: {xs:"left", sm:"left", md:"left", lg:"left"},
                        width:{
                          xs: '270px',
                          sm: '250px',
                          md: '350px',
                          lg: '550px'
                        },
                        ml:{
                          xs: 1,
                          sm: 0,
                          md: 0,
                          lg: 0
                        },
                        fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                        fontFamily: bodyFontFamily,
                        fontWeight: 700,
                        color: textColor,
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              </Grid>

              {/* Answer - right side (tablet/desktop), below (mobile) */}
              {isOpen && (
                <Grid item xs={12} sm={6}>
                  <Box sx={{
                      paddingTop: { xs: 0, sm: 1, md: 1, lg: 1 },
                      paddingLeft: { xs: 3, sm: 2 },
                      transition: "opacity 0.4s ease",
                      opacity: 1,
                      
                    }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                        fontFamily: bodyFontFamily,
                        fontWeight: 400,
                        color: textColor,
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
};

export default FAQSection;


// import FAQSection from './FAQSection';

// const MinimalFAQ = () => {
//   const myFAQData = [
//     {
//       question: 'Can I customize this component?',
//       answer: 'Yes! You can pass props like title, color, font, etc.',
//     },
//     {
//       question: 'Does it support responsive layouts?',
//       answer: 'Absolutely! Answer shows below on mobile, right side on larger screens.',
//     },
//   ];

//   return <FAQSection faqData={myFAQData} />;
// };
