import React from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  Container,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { 
  Instagram, 
  Twitter, 
  YouTube, 
  LinkedIn 
} from '@mui/icons-material';

// JSON data for social media links
const socialMediaData = {
  title: "Follow Us",
  subtitle: "on",
  platform: "Social Media",
  links: [
    {
      id: "instagram",
      name: "Instagram",
      url: "https://instagram.com/yourcompany",
      icon: "Instagram",
      color: "#E4405F",
      hoverColor: "#C13584"
    },
    {
      id: "twitter",
      name: "Twitter",
      url: "https://twitter.com/yourcompany",
      icon: "Twitter",
      color: "#1DA1F2",
      hoverColor: "#0d8bd9"
    },
    {
      id: "youtube",
      name: "YouTube",
      url: "https://youtube.com/yourcompany",
      icon: "YouTube",
      color: "#FF0000",
      hoverColor: "#cc0000"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/company/yourcompany",
      icon: "LinkedIn",
      color: "#0077B5",
      hoverColor: "#005885"
    }
  ]
};

const SocialMediaFollow = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  

  const iconMap = {
    Instagram: Instagram,
    Twitter: Twitter,
    YouTube: YouTube,
    LinkedIn: LinkedIn
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          width: '100%'
          
        }}
      >
        
        <Box
          sx={{
            textAlign: isMobile ? 'center' : 'left',
            flex: isMobile ? 'none' : 1
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
              color: '#1E1E1E',
               fontFamily: 'Gloock,serif' 
            }}
          >
            {socialMediaData.title}
          </Typography>
          <Typography
            variant="h3"
            component="span"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
               color: '#1E1E1E',
               fontFamily: 'Gloock,serif' 
            }}
          >
            {socialMediaData.subtitle}
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
               color: '#1E1E1E',
               fontFamily: 'Gloock,serif' 
            }}
          >
            {socialMediaData.platform}
          </Typography>
        </Box>

       
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {socialMediaData.links.map((social) => {
            const IconComponent = iconMap[social.icon];
            return (
              <IconButton  data-testid="notify-button"
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: { xs: 60, sm: 60, md:60 },
                  height: { xs: 53, sm: 53, md: 63 },
                  backgroundColor: social.color,
                  color: 'white',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: social.hoverColor,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 25px ${social.color}40`
                  }
                }}
              >
                <IconComponent sx={{ fontSize: { xs: 28, sm: 32, md: 42 } }} />
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default SocialMediaFollow;

