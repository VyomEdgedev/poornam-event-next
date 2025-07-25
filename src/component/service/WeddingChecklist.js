import React from 'react';
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';




const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Gloock, serif',
  fontWeight: 400,
  fontSize: '3rem',
  lineHeight: 1.4,
  color: '#000000',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const EventItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  position: 'relative',
  paddingBottom: theme.spacing(2),
  '&:last-child': {
    marginBottom: 0,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1px',
    backgroundColor: '#d0d0d0',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  fontSize: '24px',
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
    fontSize: '20px',
  },
}));

const IconImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
}));

const EventText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Akatab, sans-serif',
  fontSize: '1.25rem',
  color: '#000000',
  fontWeight: 400,
  width: '160px',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    width: 'auto',
    height: 'auto',
  },
}));

const WeddingChecklist = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const events = [
    {
      icon: './checklist.png',
      text: 'Emcee replaced mid-sangeet'
    },
    {
      icon: './checklist1.png',
      text: 'Baraat came early'
    },
    {
      icon: './checklist2.png',
      text: 'Phoolon Ki Holi bride entry'
    },
    {
      icon: './checklist3.png',
      text: 'Sherwani found at 2AM'
    }
  ];

  return (
    <Box sx={{
       backgroundColor: '#FFF7E4',
      py: 5,
      px: { xs: 4, sm: 4, md: 5, lg: 30, xl: 32 },
    }}>
      
        <Box sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'flex-start',
          gap: { xs: 1, sm: 4, md: 5, lg: 4, xl: 4 },
        }}>
          {/* Main Title Section */}
          <Box sx={{
            flex: isMobile ? 'none' : 1,
            minWidth: isMobile ? '100%' : '300px',
            mb: isMobile ? 3 : 0
          }}>
            <MainTitle variant="h2">
              Shaadi Mein<br />
              Kya-Kya Karwaya<br />
              Hai?
            </MainTitle>
          </Box>

          {/* Events Grid */}
          <Box sx={{
            flex: isMobile ? 'none' : 1,
            width: '100%',
            // maxWidth: isMobile ? '100%' : '600px'
          }}>
            <Box sx={{
              display: 'grid',
              // gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 3,
              alignItems: 'baseline',
              width: '100%',
            }}>
              {events.map((event, index) => (
                <EventItem key={index}>
                  <IconWrapper>
                    <IconImage
                      src={event.icon}
                      alt={`Icon for ${event.text}`}
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.target.style.display = 'none';
                      }}
                    />
                  </IconWrapper>
                  <EventText>
                    {event.text}
                  </EventText>
                </EventItem>
              ))}
            </Box>
          </Box>
        </Box>
    
    </Box>
  );
};

export default WeddingChecklist;