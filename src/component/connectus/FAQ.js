import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  useMediaQuery,
  useTheme,
  Grid,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const faqData = [
  {
    question: 'What does a wedding planner actually do?',
    answer: 'Think of us as your behind-the-scenes superheroes. From budget planning, vendor management, decor design, to handling last-minute family drama — we do everything except walk down the aisle for you.',
  },
  {
    question: 'Do you only work in Indore?',
    answer: " While we’re proudly rooted in Indore, we’ve planned weddings in Bhopal, Jabalpur, and across India. If your heart says “Shimla ki Shaadi”, our bags are already packed.",
  },
  {
    question: 'Can I hire you just for wedding day coordination?',
    answer: "Yes! If you’ve done the heavy lifting and just need a pro team to handle the “big day” chaos, we offer on-day execution services too. We'll make sure everything runs smoother than a sangeet playlist.",
  },
  {
    question: 'Do you plan small, intimate weddings too?',
    answer: 'Absolutely. From 500-guest big fat weddings to 50-person hilltop vows — we design every event with the same love, drama, and attention to detail.',
  },
   {
    question: 'How far in advance should I book Poornam Events?',
    answer: 'The sooner, the better — especially during peak wedding seasons (Oct–Feb). Some couples book us 9–12 months in advance. Others call us two weeks before. Either way, we deliver magic.',
  },
   {
    question: 'Do you handle destination wedding?',
    answer: 'Yes! Whether it’s a royal palace in Rajasthan or a beach in Kerala, we manage logistics, travel, stay, and every tiny flower petal that needs to fall just right.',
  },
   {
    question: ' What if I already have some vendors booked?',
    answer: 'No problem! We can seamlessly collaborate with your chosen vendors or suggest our trusted ones. Either way, your wedding will be chef’s kiss perfect.',
  },
   {
    question: 'Is hiring a wedding planner expensive?',
    answer: 'Not when you consider the time, stress, and money we help you save. Plus, we tailor our packages based on your vision and budget. Trust us — we know how to party smart.',
  },
   {
    question: 'Will you help with the “not-so-fun” stuff too?',
    answer: 'You mean budgeting, guest RSVP chaos, or handling that one auntie who wants to change the seating chart? Yup. We’ve got it all covered.',
  },
   {
    question: ' How do I get started with Poornam Events?',
    answer: 'Easy! Just head to our Connect With Us page, fill out the form, or drop us a WhatsApp. We’ll set up a vibe-check call, and take it from there. Your dream wedding starts with a simple hello!',
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ backgroundColor: '#fdf8ef', py: 3, px: 4 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontFamily: 'Gloock, serif', fontWeight: 400, mb: 1 }}
      >
        FAQ’s
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          mb: 4,
          fontFamily: 'Akatab, Sans-serif',
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
              spacing={2}
              alignItems="flex-start"
              sx={{
                borderBottom: '1px solid #e0b855',
                mb: 2,
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
                    backgroundColor: 'transparent',
                    '&::before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ChevronRightIcon
                        sx={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(90deg)',
                          transition: 'transform 0.4s ease',
                          color: '#001538',
                        }}
                      />
                    }
                    sx={{
                      minHeight: 48,
                      '& .MuiAccordionSummary-content': {
                        marginY: '8px',
                        fontFamily: 'Akatab, Sans-serif',
                        fontWeight: 500,
                        color: '#001538',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        width:{
                          xs: '320px',
                          sm: '250px',
                          md: '350px',
                          lg: '450px'
                        },
                        fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                        fontFamily: 'Akatab, Sans-serif',
                        fontWeight: 700,
                        color: '#001538',
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
                      p: 2,
                      transition: 'opacity 0.4s ease',
                      opacity: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                        fontFamily: 'Akatab, Sans-serif',
                        fontWeight: 400,
                        color: '#001538',
                        lineHeight: 1,
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
