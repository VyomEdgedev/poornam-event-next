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
  color: '#001538',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '50px',
    height: '3px',
    backgroundColor:"#011d4a",
    borderRadius: '2px',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  '&::before': {
    content: '"•"',
    color: '#001538',
    
    fontWeight: 600,
    position: 'absolute',
    left: '8px',
  },
  paddingLeft: theme.spacing(3),
}));

const termsData = {
  title: "Terms & Conditions",
  lastUpdated: "13 June 2025",
  companyName: "Poornam Events",
  website: "www.poornamevents.com",
  description: "where we turn shaadi dreams into stunning realities",
  sections: [
    {
      title: "1. Use of Our Website",
      content: "You agree to:",
      items: [
        "Use this site only for personal and non-commercial purposes",
        "Provide accurate and honest information when filling out forms",
        "Not copy, duplicate, or misuse our content, design, or images",
        "Not use the site in any way that could damage, disable, or impair our services"
      ],
      note: "We reserve the right to block access to any user who misuses the platform."
    },
    {
      title: "2. Booking & Service Engagement",
      items: [
        "Submitting an inquiry or booking form does not confirm a project",
        "All projects are confirmed only after a written agreement and advance payment",
        "Prices may vary based on location, season, vendors, and scope",
        "We reserve the right to decline projects that are beyond our capacity or timelines"
      ]
    },
    {
      title: "3. Intellectual Property",
      content: "Everything on this website — including but not limited to:",
      items: [
        "Text",
        "Images",
        "Videos",
        "Designs",
        "Blogs",
        "Wedding planning kits",
        "Tools or templates"
      ],
      note: "...is the property of Poornam Events and may not be used, reproduced, copied, or shared without written permission."
    },
    {
      title: "4. Cancellation & Refund Policy",
      content: "Our refund and cancellation terms vary by service and are detailed in your signed event contract. However:",
      items: [
        "Enquiry form submissions carry no obligation",
        "Paid consultation or booking fees may be non-refundable once planning begins",
        "Vendor refunds (photographers, venues, decorators) are governed by their respective policies"
      ],
      note: "Please refer to your service agreement for specific terms."
    },
    {
      title: "5. Communication",
      content: "By sharing your contact details, you agree that:",
      items: [
        "We may contact you via email, WhatsApp, or phone regarding your inquiry",
        "You may receive updates, planning tips, or promotions from Poornam (you can unsubscribe anytime)",
        "We respect your privacy — refer to our Privacy Policy"
      ]
    },
    {
      title: "6. Third-Party Links",
      content: "Our site may link to wedding vendors, social media platforms (Instagram, YouTube, Pinterest), or affiliate blogs. We do not control or endorse their content or policies.",
      note: "Use third-party links at your own discretion."
    },
    {
      title: "7. Website Accuracy & Availability",
      content: "We strive to keep all information updated and correct. However:",
      items: [
        "Services, prices, and vendor details may change over time",
        "We do not guarantee that the website will always be available, error-free, or uninterrupted",
        "We are not liable for any losses due to technical errors or external hacks"
      ]
    },
    {
      title: "8. Limitation of Liability",
      content: "Poornam Events shall not be liable for any direct, indirect, incidental, or special damages arising from:",
      items: [
        "Your use or inability to use the website",
        "Delays in event planning due to force majeure (e.g., weather, political events, pandemics)",
        "Vendor-related issues outside our contractual scope"
      ]
    },
    {
      title: "9. Governing Law",
      content: "These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of Indore, Madhya Pradesh."
    },
    {
      title: "10. Contact Us",
      content: "If you have questions about these Terms, feel free to get in touch:",
      contactInfo: {
        company: "Poornam Events, Indore, Madhya Pradesh",
        email: "info@poornamevents.com",
        phone: "+91-9519066885"
      }
    }
  ]
};

export default function TermsAndConditions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <>
        <SEO
          url='http://www.poornamevents.com/terms'
          metaTitle='Terms & Conditions • Poornam Events'
          metaDescription='Terms of use for Poornam Events website, bookings, pricing & services.'
          keywords='terms Poornam Events, terms wedding planner'
          canonical='http://www.poornamevents.com/terms'
          ogTitle='Terms & Conditions • Poornam Events'
          ogDescription='Terms of use for Poornam Events website, bookings, pricing & services.'
          ogImage='https://www.poornamevent.com/og-image.jpg'
          twitterTitle='Terms & Conditions • Poornam Events'
          twitterDescription='Terms of use for Poornam Events website, bookings, pricing & services.'
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
              {termsData.title}
            </Typography>
            
           
            <Typography variant="h6" color="#000000" sx={{ fontStyle: 'italic' }}>
              Welcome to {termsData.companyName}  — {termsData.description}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" >
            {`  Before you explore, book, or contact us through our website, please take a moment to read our terms.`}
          </Typography>

         <Typography
  variant="body1"
  sx={{ fontWeight: 500 }}
  dangerouslySetInnerHTML={{
    __html: `By accessing or using <strong>${termsData.website}</strong>, you agree to the following terms and conditions:`,
  }}
/>

<Typography variant="body1" sx={{ fontWeight: 500 }}></Typography>

        </StyledPaper>

        {/* Terms Sections */}
        {termsData.sections.map((section, index) => (
          <StyledPaper key={index} elevation={2}>
            <SectionTitle variant="h5" component="h2">
              {section.title}
            </SectionTitle>

            {section.content && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.content}
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
                  color: '#000000',
                  borderLeft: "3px solid #011d4a",
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
                <Typography variant="body1" color="primary">
                  {section.contactInfo.email}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {section.contactInfo.phone}
                </Typography>
              </Box>
            )}
          </StyledPaper>
        ))}

        {/* Changes Notice */}
        <StyledPaper elevation={2} sx={{ bgcolor: 'grey.50' }}>
          <SectionTitle variant="h5" component="h2">
            {`   Changes to These Terms`}
          </SectionTitle>
          <Typography variant="body1">
            {` We may update these Terms occasionally. Any changes will be reflected on this page with an updated date.
            Your continued use of the site after any changes means you accept the updated Terms.`}
          </Typography>
        </StyledPaper>
      </Container>
    </>
  );
}