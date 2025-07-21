import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomBanner from '@/common-component/banner/CustomBanner';
import SEO from '@/common-component/SEO/seo';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: "#001538",
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '50px',
    height: '3px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '2px',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  '&::before': {
    content: '"•"',
    color: "#000000",
    fontWeight: 600,
    position: 'absolute',
    left: '8px',
  },
  paddingLeft: theme.spacing(3),
}));

const disclaimerData = {
  title: "Disclaimer",
  lastUpdated: "13 June 2025",
  companyName: "Poornam Events",
  website: "www.poornamevents.com",
  description: "While we love to dream big, plan beautifully, and blog passionately — it's important to clarify where inspiration ends and responsibility begins.",
  sections: [
    {
      title: "1. General Information Purpose Only",
      content: "All content provided on www.poornamevents.com, including blog posts, checklists, images, planning guides, pricing examples, and service descriptions — is for informational and inspirational purposes only.",
      additionalContent: "We strive to provide accurate and up-to-date info, but we make no guarantees regarding:",
      items: [
        "Accuracy",
        "Completeness",
        "Suitability",
        "Timeliness"
      ],
      note: "Think of our site as your wedding moodboard, not your legal contract."
    },
    {
      title: "2. Service Availability Disclaimer",
      content: "Wedding planning is a dynamic process. While we offer a wide range of services across Indore, Bhopal and destination locations:",
      items: [
        "Availability of venues, vendors, or specific services may change without notice",
        "Visuals used on the site may represent past events, concepts, or client-specific customizations",
        "Packages and service rates may vary based on season, location, and guest count"
      ],
      note: "To get confirmed pricing and service scope, please connect with us for a personalized quote."
    },
    {
      title: "3. Use of Images & Testimonials",
      content: "We may showcase:",
      items: [
        "Photos from real weddings (with client consent)",
        "Stock images for visual inspiration",
        "Testimonials from past clients"
      ],
      additionalContent: "These are used to represent the style and quality of our work. Results and experiences may vary based on individual preferences, budget, and vendor partnerships."
    },
    {
      title: "4. Blog Content Disclaimer",
      content: "Our blog is created with love and industry experience — but it's not a substitute for personalized wedding advice.",
      highlight: "You should always consult with a Poornam planner or relevant professional before making big decisions based on blog suggestions.",
      additionalContent: "Also:",
      items: [
        "Prices mentioned are indicative and may not reflect real-time vendor quotes",
        "Trend ideas are subjective and may evolve",
        "Planning tips are contextual and may not suit every wedding type"
      ]
    },
    {
      title: "5. No Professional-Legal Advice",
      content: "Nothing on this site constitutes legal, medical, or financial advice. We don't offer:",
      items: [
        "Contract reviews",
        "Financial planning",
        "Legal representation for event contracts"
      ],
      note: "Please consult qualified professionals for such matters."
    },
    {
      title: "6. External Links Disclaimer",
      content: "Our website may link to third-party websites, vendors, blogs, or social media content. While we carefully curate these, we're not responsible for their content, services, or practices.",
      note: "Use external links at your own discretion."
    },
    {
      title: "7. Liability Limitation",
      content: "Poornam Events is not liable for:",
      items: [
        "Planning decisions made based solely on website content",
        "Loss or damage from site downtime, technical glitches, or content errors",
        "Misinterpretation of our suggestions, blogs, or creative assets"
      ],
      note: "You use this website at your own risk, with the understanding that Poornam Events is a creative service provider, not a legal or financial entity."
    },
    {
      title: "8. Questions?",
      content: "If you have any questions about this disclaimer or any of our policies:",
      contactInfo: {
        company: "Poornam Events, Indore, Madhya Pradesh",
        email: "info@poornamevents.com",
        phone: "+91-9610366885"
      }
    }
  ]
};

export default function Disclaimer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <>
        <SEO
          url='http://www.poornamevents.com/disclaimer'
          metaTitle='Disclaimer • Poornam Events'
          metaDescription='Disclaimer for planning guides, blogs, tools & service estimates on Poornam Events website.'
          keywords='wedding planning disclaimer, Poornam disclaimer'
          canonical='http://www.poornamevents.com/disclaimer'
          ogTitle='Disclaimer • Poornam Events'
          ogDescription='Disclaimer for planning guides, blogs, tools & service estimates on Poornam Events website.'
          ogImage='https://www.poornamevent.com/og-image.jpg'
          twitterTitle='Disclaimer • Poornam Events'
          twitterDescription='Disclaimer for planning guides, blogs, tools & service estimates on Poornam Events website.'
          twitterImage='https://www.poornamevent.com/logoo.jpg'
          robots="index, follow"//  default
        />
      </>
      <CustomBanner
        showLogo={true}
        logoSrc="/logo.png"
        height="30vh"
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header Section */}
        <StyledPaper elevation={3}>
          <Box textAlign="center" mb={3}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontFamily: "Akatab,Sans-serif",
                backgroundColor: '#001538',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,

              }}
            >
              {disclaimerData.title}
            </Typography>
            <Chip
              label={`Last Updated: ${disclaimerData.lastUpdated}`}
              color="#001538"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Typography variant="h6" color="#000000" sx={{ fontStyle: 'italic' }}
              dangerouslySetInnerHTML={{
                __html: `    Welcome to <strong>{disclaimerData.companyName}!</strong>`,
              }}
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" >
            {disclaimerData.description}
          </Typography>

          <Typography variant="body1" >
            {` This disclaimer outlines how to interpret the information on our website.`}
          </Typography>
        </StyledPaper>

        {/* Disclaimer Sections */}
        {disclaimerData.sections.map((section, index) => (
          <StyledPaper key={index} elevation={2}>
            <SectionTitle variant="h5" component="h2">
              {section.title}
            </SectionTitle>

            {section.content && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.content}
              </Typography>
            )}

            {section.highlight && (
              <Typography
                variant="body1"

                sx={{
                  mb: 2,
                  fontWeight: 500,
                  color: theme.palette.primary.main
                }}
              >
                {section.highlight}
              </Typography>
            )}

            {section.additionalContent && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.additionalContent}
              </Typography>
            )}

            {section.items && (
              <List sx={{ py: 0 }}>
                {section.items.map((item, itemIndex) => (
                  <StyledListItem key={itemIndex} disablePadding>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body1',
                        sx: { lineHeight: 1.6 }
                      }}
                    />
                  </StyledListItem>
                ))}
              </List>
            )}

            {section.note && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontStyle: 'italic',
                  color: 'text.secondary',
                  borderLeft: `3px solid ${theme.palette.secondary.main}`,
                  pl: 2,
                  py: 1
                }}
              >
                {section.note}
              </Typography>
            )}

            {section.contactInfo && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {section.contactInfo.company}
                </Typography>
                <Typography variant="body1" color="#000000">
                  {section.contactInfo.email}
                </Typography>
                <Typography variant="body1" color="#000000">
                  {section.contactInfo.phone}
                </Typography>
              </Box>
            )}
          </StyledPaper>
        ))}
      </Container>
    </>
  );
}