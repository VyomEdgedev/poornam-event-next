import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
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
  titleFontFamily = 'Gloock, serif',
  bodyFontFamily = 'Akatab, Sans-serif',
  maxWidth = 'lg',
  padding = { xs: 2, sm: 4 },
}) => {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ backgroundColor, py: 3, px: padding }}>
      <Typography
       
        component="h2"
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
      
      {subtitle && (
        <Typography
         component="h6"
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
      )}

      <Box maxWidth={maxWidth} mx="auto">
        {faqData.map((item, index) => {
          const isOpen = expanded === index;
          
          return (
            <Grid
              container
              key={index}
              spacing={isTabletUp ? 0 : 0}
              alignItems="flex-start"
              sx={{ 
                marginLeft:{
                  xs: 0,
                  sm: 0,
                  md: 0,
                  lg: "20px",
                  
                },
                borderBottom: `1px solid ${borderColor}`,
                mb: 2,
              }}
            >
              <Grid item sx={{width:{xs:"100%" ,sm:"50%"}}}>
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
                            xs: "rotate(90deg)",
                            sm: isOpen ? 'rotate(-180deg)' : 'rotate(90deg)',
                          },
                          
                          transition: 'transform 0.3s ease',
                          color: textColor,
                        }}
                      />
                    }
                    aria-controls={`faq-content-${index}`}
                    id={`faq-header-${index}`}
                    sx={{
                      minHeight: 48,
                      '& .MuiAccordionSummary-content': {
                        marginY: '8px',
                        fontFamily: bodyFontFamily,
                        fontWeight: 500,
                        color: textColor,
                      },
                    }}
                  >
                    <Typography
                      component="h6"
                      sx={{
                        
                        fontFamily: bodyFontFamily,
                        fontWeight: 600,
                        color: textColor,
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              </Grid>

              {isOpen && (
                <Grid item sx={{width:{sm:"50%"}}}>
                  <Box
                    sx={{
                      paddingTop: { xs: 0, sm: 1.2 },
                      paddingLeft: { xs: 2, sm: 2 },
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <Typography
                     component="h6"
                      id={`faq-content-${index}`}
                      aria-labelledby={`faq-header-${index}`}
                      sx={{
                       
                        fontFamily: bodyFontFamily,
                        fontWeight: 400,
                        color: textColor,
                        mb:0.2,
                       
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
