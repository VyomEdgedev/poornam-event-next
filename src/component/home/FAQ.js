import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const faqData = [
  {
    question: 'Do you only plan weddings in Indore?',
    answer: 'Absolutely. We’ve pulled off 3-day prep shaadis with a smile.',
  },
  {
    question: 'Can you help with last-minute weddings?',
    answer: "Absolutely. We’ve pulled off 3-day prep shaadis with a smile.",
  },
  {
    question: 'Do you provide decorators and photographers too?',
    answer: 'Absolutely. We’ve pulled off 3-day prep shaadis with a smile.',
  },
  {
    question: 'Do you offer budget planning help?',
    answer: 'Absolutely. We’ve pulled off 3-day prep shaadis with a smile.',
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ backgroundColor: '#fdf8ef', py: 8, px: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 1 }}
      >
        FAQ’s
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 4 }}
      >
        Your Questions, Answered
      </Typography>

      <Box maxWidth="md" mx="auto">
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            disableGutters
            square
            elevation={0}
            sx={{
              borderBottom: '1px solid #e0b855',
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
                  fontWeight: 500,
                  color: '#000',
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            {item.answer && (
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: '#333' }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
