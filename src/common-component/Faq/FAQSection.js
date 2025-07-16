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
    <Box sx={{ backgroundColor, py: padding, px: padding }}>
      <Typography
        variant={"h1"}
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
              spacing={2}
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
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 0.4s ease',
                          color: textColor,
                        }}
                      />
                    }
                    sx={{
                      minHeight: 48,
                      '& .MuiAccordionSummary-content': {
                        marginY: '8px',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: bodyFontFamily,
                        fontWeight: 500,
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
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: bodyFontFamily,
                        fontWeight: 400,
                        color: textColor,
                        lineHeight: 0.85,
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
