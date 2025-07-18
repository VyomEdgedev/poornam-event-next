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
    color: "#001538",
    fontWeight: 600,
    position: 'absolute',
    left: '8px',
  },
  paddingLeft: theme.spacing(3),
}));

const privacyData = {
  title: "Privacy Policy",
  lastUpdated: "13 June 2025",
  companyName: "Poornam Events",
  website: "https://www.poornamevents.com",
  description: "We're excited to be part of your wedding journey — and we take your privacy just as seriously as your big day.",
  sections: [
    {
      title: "1. Who We Are",
      content: "Poornam Events is a wedding and event planning company based in Indore, Madhya Pradesh. Our website address is:",
      websiteUrl: "https://www.poornamevents.com"
    },
    {
      title: "2. What Information We Collect",
      content: "We may collect personal information from you when you:",
      items: [
        "Fill out our contact form",
        "Sign up for newsletters or updates",
        "Submit an inquiry about our services",
        "Schedule a consultation",
        "Download planning kits or resources"
      ],
      subsections: [
        {
          subtitle: "Personal Data may include:",
          items: [
            "Full name",
            "Email address",
            "Phone number",
            "Location/city",
            "Wedding/event details",
            "Any custom notes/messages you share"
          ]
        },
        {
          subtitle: "Automatically collected data may include:",
          items: [
            "IP address",
            "Browser type",
            "Device type",
            "Pages visited",
            "Date/time of access",
            "Referral source (e.g., Google, Instagram)"
          ]
        }
      ]
    },
    {
      title: "3. How We Use Your Information",
      content: "We use your data to:",
      items: [
        "Respond to your queries",
        "Provide personalized wedding planning advice",
        "Send you service details and pricing",
        "Share updates, blogs, and offers (only if you opt in)",
        "Improve website performance and user experience",
        "Protect against fraud or misuse"
      ]
    },
    {
      title: "4. Sharing Your Data",
      content: "We do not sell or rent your personal information to third parties.",
      additionalContent: "We may share your information only with:",
      items: [
        "Trusted vendors or partners (e.g., photographers, decorators) — but only with your consent",
        "Technical service providers who help us maintain our site (e.g., hosting companies, analytics tools)"
      ]
    },
    {
      title: "5. How We Protect Your Information",
      content: "Your privacy is our priority. We use:",
      items: [
        "SSL encryption",
        "Secure databases",
        "Firewall protection",
        "Regular website security checks"
      ],
      note: "But remember — no internet transmission is 100% secure. Always take precautions on your end too."
    },
    {
      title: "6. Cookies Policy",
      content: "We use cookies to:",
      items: [
        "Understand how users navigate our website",
        "Track performance and improve content",
        "Personalize your browsing experience"
      ],
      note: "You can disable cookies via your browser settings. However, some features of our site may not function properly if cookies are turned off."
    },
    {
      title: "7. Children's Privacy",
      content: "Our services are not directed to children under 13. We do not knowingly collect data from minors. If you believe a child has provided us data, please contact us immediately."
    },
    {
      title: "8. Your Rights (For Indian Users)",
      content: "Under applicable laws (including the Digital Personal Data Protection Act, India):",
      items: [
        "You can request access to your personal data",
        "You can ask us to correct or delete your information",
        "You can opt-out of emails or marketing anytime"
      ],
      contactEmail: "Contact us at: info@poornamevents.com"
    },
    {
      title: "9. Third-Party Links",
      content: "Our website may contain links to Instagram, YouTube, Pinterest, or vendor websites. We are not responsible for the privacy practices of those external sites."
    },
    {
      title: "10. Changes to This Policy",
      content: "We may update this policy from time to time. When we do, we'll revise the \"Last Updated\" date at the top. Please review this page occasionally to stay informed."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy or how we use your data, feel free to get in touch:",
      contactInfo: {
        company: "Poornam Events, Indore, Madhya Pradesh",
        email: "info@poornamevents.com",
        phone: "+91-9610366885"
      }
    }
  ]
};

export default function PrivacyPolicy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <>
        <SEO
          url='http://www.poornamevents.com/privacy-policy'
          metaTitle='Privacy Policy • Poornam Events'
          metaDescription="Review how Poornam Events collects and handles personal data under India's DPDPA and global policies."
          keywords='privacy policy India wedding planner'
          canonical='http://www.poornamevents.com/privacy-policy'
          ogTitle='Privacy Policy • Poornam Events'
          ogDescription="Review how Poornam Events collects and handles personal data under India's DPDPA and global policies."
          ogImage='https://www.poornamevent.com/og-image.jpg'
          twitterTitle=' Privacy Policy • Poornam Events'
          twitterDescription="Review how Poornam Events collects and handles personal data under India's DPDPA and global policies."
           twitterImage='https://www.poornamevent.com/logoo.jpg'
          robots="index, follow"
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
                background: "#001538",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              {privacyData.title}
            </Typography>
            <Chip
              label={`Last Updated: ${privacyData.lastUpdated}`}
              color="#001538"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Typography variant="h6" color="#000000" sx={{ fontStyle: 'italic' }}
              dangerouslySetInnerHTML={{
                __html: `   Welcome to <strong>{privacyData.companyName}!</strong>`,
              }}
            />


          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" >
            {privacyData.description}
          </Typography>

          <Typography variant="body1" >
            {`   This Privacy Policy explains how we collect, use, share, and protect your information when you use our website, contact us, or plan your dream wedding with us.`}
          </Typography>
        </StyledPaper>

        {/* Privacy Sections */}
        {privacyData.sections.map((section, index) => (
          <StyledPaper key={index} elevation={2}>
            <SectionTitle variant="h5" component="h2">
              {section.title}
            </SectionTitle>

            {section.content && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.content}
              </Typography>
            )}

            {section.websiteUrl && (
              <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
                {section.websiteUrl}
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

            {section.subsections && section.subsections.map((subsection, subIndex) => (
              <Box key={subIndex} sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                  {subsection.subtitle}
                </Typography>
                <List sx={{ py: 0 }}>
                  {subsection.items.map((item, itemIndex) => (
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
              </Box>
            ))}

            {section.contactEmail && (
              <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                {section.contactEmail}
              </Typography>
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