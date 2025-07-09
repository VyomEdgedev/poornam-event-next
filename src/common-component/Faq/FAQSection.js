// FAQSection.js - Reusable FAQ Component
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ backgroundColor, py: padding, px: padding }}>
      <Typography
        variant={titleVariant}
        align="center"
        sx={{ 
          fontFamily: titleFontFamily, 
          fontWeight: 400, 
          mb: 1,
          color: textColor 
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
          color: textColor 
        }}
      >
        {subtitle}
      </Typography>
      <Box maxWidth={maxWidth} mx="auto">
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            disableGutters
            square
            elevation={0}
            sx={{
              borderBottom: `1px solid ${borderColor}`,
              backgroundColor: 'transparent',
              '&::before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={
                item.answer ? (
                  expanded === index ? <ExpandMoreIcon /> : <ChevronRightIcon />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
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
            {item.answer && (
              <AccordionDetails>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: textColor,
                    fontFamily: bodyFontFamily, 
                    fontWeight: 400 
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
// 4. Minimal Usage (just change data)
// function MinimalFAQ() {
//   const myFAQData = [
//     {
//       question: 'Your custom question?',
//       answer: 'Your custom answer here.',
//     },
//   ];

//   return <FAQSection faqData={myFAQData} />;
// }