// components/Banner.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomButton from '../button/CustomButton';
import Image from 'next/image';
import Link from 'next/link';

// Custom styled components
const BannerSection = styled(Box)(({ theme, height, backgroundcolor }) => ({
  position: 'relative',
  width: '100%',
  height: height || '450px',
  backgroundColor: backgroundcolor || 'rgba(0, 13, 31, 1)',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  
  // Responsive height adjustments
  [theme.breakpoints.down('lg')]: {
    height: height === '100vh' ? '80vh' : height === '450px' ? '400px' : height,
  },
  [theme.breakpoints.down('md')]: {
    height: height === '100vh' ? '70vh' : height === '450px' ? '350px' : height,
    minHeight: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    height: height === '100vh' ? '60vh' : height === '450px' ? '300px' : height,
    minHeight: '280px',
  },
}));

const BackgroundImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 1,
  
  // Responsive adjustments for background image
  [theme.breakpoints.down('md')]: {
    objectPosition: 'center center',
  },
}));

const Overlay = styled(Box)(({ theme, overlay }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: overlay?.width || '65%',
  height: '100%',
  zIndex: 2,
   background: overlay?.background || 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)',
  
  // Responsive overlay adjustments
  [theme.breakpoints.down('lg')]: {
    width: overlay?.responsive?.lg?.width || '70%',
    background: overlay?.responsive?.lg?.background || overlay?.background || 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)',
  },
  [theme.breakpoints.down('md')]: {
    width: overlay?.responsive?.md?.width || '100%',
    background: overlay?.responsive?.md?.background || overlay?.background || 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)',
  },
  [theme.breakpoints.down('sm')]: {
    background: overlay?.responsive?.sm?.background || overlay?.background || 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)',
  },
}));

const LogoContainer = styled(Box)(({ theme, showlogo, logoposition }) => ({
  ...(showlogo && {
    position: 'absolute',
    top: logoposition?.top || '30px',
    left: logoposition?.left || '30px',
    right: logoposition?.right || 'auto',
    zIndex: 3,
    width: logoposition?.width || '80px',
    height: 'auto',
    
    // Enhanced responsive logo positioning
    [theme.breakpoints.down('lg')]: {
      top: logoposition?.lg?.top || logoposition?.mobile?.top || '25px',
      left: logoposition?.lg?.left || logoposition?.mobile?.left || '25px',
      width: logoposition?.lg?.width || logoposition?.mobile?.width || '70px',
    },
    [theme.breakpoints.down('md')]: {
      top: logoposition?.md?.top || logoposition?.mobile?.top || '20px',
      left: logoposition?.md?.left || logoposition?.mobile?.left || '20px',
      width: logoposition?.md?.width || logoposition?.mobile?.width || '60px',
    },
    [theme.breakpoints.down('sm')]: {
      top: logoposition?.sm?.top || logoposition?.mobile?.top || '15px',
      left: logoposition?.sm?.left || logoposition?.mobile?.left || '15px',
      width: logoposition?.sm?.width || logoposition?.mobile?.width || '50px',
    },
  }),
}));

const ContentContainer = styled(Container)(({ theme, contentalignment, contentposition }) => ({
  position: 'absolute',
  top: '190px',
  left: '40px',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: contentalignment?.horizontal || 'flex-start',
  justifyContent: contentalignment?.vertical || 'center',
  textAlign: contentalignment?.textAlign || 'left',
  maxWidth: '1200px',
  padding: '0 20px',
  // backgroundColor:"red",
  // Enhanced responsive positioning
  [theme.breakpoints.down('xl')]: {
    top: contentposition?.xl?.top || '120px',
    left: contentposition?.xl?.left || '35px',
    maxWidth: '1000px',
  },
  [theme.breakpoints.down('lg')]: {
    top: contentposition?.lg?.top || '100px',
    left: contentposition?.lg?.left || '30px',
    paddingLeft: '15px',
    paddingRight: '15px',
    maxWidth: '900px',
  },
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    padding: '40px 20px',
    alignItems: contentalignment?.md?.horizontal || contentalignment?.mobile?.horizontal || 'center',
    textAlign: contentalignment?.md?.textAlign || contentalignment?.mobile?.textAlign || 'center',
    width: '100%',
    maxWidth: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 15px',
    alignItems: contentalignment?.sm?.horizontal || contentalignment?.mobile?.horizontal || 'center',
    textAlign: contentalignment?.sm?.textAlign || contentalignment?.mobile?.textAlign || 'center',
  },
}));

const MainHeading = styled(Typography)(({ theme, headingstyle }) => ({
  fontFamily: headingstyle?.fontFamily || "'Gloock', serif",
  fontWeight: headingstyle?.fontWeight || '400',
  fontSize: headingstyle?.fontSize || '48px',
  letterSpacing: headingstyle?.letterSpacing || '-0.02em',
  lineHeight: headingstyle?.lineHeight || '1.13',
  color: headingstyle?.color || 'rgba(255, 255, 255, 1)',
  marginBottom: headingstyle?.marginBottom || '8px',
  maxWidth: headingstyle?.maxWidth || '600px',
  whiteSpace:'nowrap',
  
  // Enhanced responsive typography
  [theme.breakpoints.down('xl')]: {
    fontSize: headingstyle?.responsive?.xl?.fontSize || '44px',
    maxWidth: headingstyle?.responsive?.xl?.maxWidth || '550px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: headingstyle?.responsive?.lg?.fontSize || '40px',
    lineHeight: headingstyle?.responsive?.lg?.lineHeight || '1.15',
    maxWidth: headingstyle?.responsive?.lg?.maxWidth || '500px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: headingstyle?.responsive?.md?.fontSize || '36px',
    lineHeight: headingstyle?.responsive?.md?.lineHeight || '1.2',
    maxWidth: headingstyle?.responsive?.md?.maxWidth || '100%',
    marginBottom: headingstyle?.responsive?.md?.marginBottom || '12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: headingstyle?.responsive?.sm?.fontSize || '28px',
    lineHeight: headingstyle?.responsive?.sm?.lineHeight || '1.3',
    marginBottom: headingstyle?.responsive?.sm?.marginBottom || '16px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: headingstyle?.responsive?.xs?.fontSize || '24px',
    lineHeight: headingstyle?.responsive?.xs?.lineHeight || '1.35',
  },
}));

const SubHeading = styled(Typography)(({ theme, subheadingstyle }) => ({
  fontFamily: subheadingstyle?.fontFamily || "'Akatab', sans-serif",
  fontWeight: subheadingstyle?.fontWeight || '600',
  fontSize: subheadingstyle?.fontSize || '26px',
  letterSpacing: subheadingstyle?.letterSpacing || '0.02em',
  lineHeight: subheadingstyle?.lineHeight || '1.37',
  color: subheadingstyle?.color || 'rgba(255, 245, 217, 1)',
  marginBottom: subheadingstyle?.marginBottom || '10px',
  maxWidth: subheadingstyle?.maxWidth || '900px',
  
  // Enhanced responsive typography
  [theme.breakpoints.down('xl')]: {
    fontSize: subheadingstyle?.responsive?.xl?.fontSize || '24px',
    maxWidth: subheadingstyle?.responsive?.xl?.maxWidth || '800px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: subheadingstyle?.responsive?.lg?.fontSize || '22px',
    maxWidth: subheadingstyle?.responsive?.lg?.maxWidth || '700px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: subheadingstyle?.responsive?.md?.fontSize || '20px',
    marginBottom: subheadingstyle?.responsive?.md?.marginBottom || '12px',
    maxWidth: subheadingstyle?.responsive?.md?.maxWidth || '100%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: subheadingstyle?.responsive?.sm?.fontSize || '18px',
    lineHeight: subheadingstyle?.responsive?.sm?.lineHeight || '1.4',
    marginBottom: subheadingstyle?.responsive?.sm?.marginBottom || '16px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: subheadingstyle?.responsive?.xs?.fontSize || '16px',
  },
}));

const ParagraphSubtitle = styled(Typography)(({ theme, paragraphstyle }) => ({
  fontFamily: paragraphstyle?.fontFamily || "'Akatab', sans-serif",
  fontWeight: paragraphstyle?.fontWeight || '400',
  fontSize: paragraphstyle?.fontSize || '16px',
  letterSpacing: paragraphstyle?.letterSpacing || '0.01em',
  lineHeight: paragraphstyle?.lineHeight || '1.5',
  color: paragraphstyle?.color || 'rgba(255, 255, 255, 0.8)',
  marginBottom: paragraphstyle?.marginBottom || '32px',
  maxWidth: paragraphstyle?.maxWidth || '800px',
  
  // Enhanced responsive typography
  [theme.breakpoints.down('xl')]: {
    maxWidth: paragraphstyle?.responsive?.xl?.maxWidth || '700px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: paragraphstyle?.responsive?.lg?.fontSize || '15px',
    maxWidth: paragraphstyle?.responsive?.lg?.maxWidth || '600px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: paragraphstyle?.responsive?.md?.fontSize || '15px',
    marginBottom: paragraphstyle?.responsive?.md?.marginBottom || '24px',
    maxWidth: paragraphstyle?.responsive?.md?.maxWidth || '100%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: paragraphstyle?.responsive?.sm?.fontSize || '14px',
    lineHeight: paragraphstyle?.responsive?.sm?.lineHeight || '1.6',
    marginBottom: paragraphstyle?.responsive?.sm?.marginBottom || '20px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: paragraphstyle?.responsive?.xs?.fontSize || '13px',
    lineHeight: paragraphstyle?.responsive?.xs?.lineHeight || '1.65',
  },
}));

const ButtonContainer = styled(Box)(({ theme, buttonscontainer }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: buttonscontainer?.gap || '16px',
  flexDirection: buttonscontainer?.direction || 'row',
  flexWrap: 'wrap',
  
  // Enhanced responsive button layout
  [theme.breakpoints.down('lg')]: {
    gap: buttonscontainer?.lg?.gap || '14px',
    flexDirection: buttonscontainer?.lg?.direction || 'row',
  },
  [theme.breakpoints.down('md')]: {
    gap: buttonscontainer?.md?.gap || '12px',
    flexDirection: buttonscontainer?.md?.direction || buttonscontainer?.mobile?.direction || 'row',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    gap: buttonscontainer?.sm?.gap || buttonscontainer?.mobile?.gap || '10px',
    flexDirection: buttonscontainer?.sm?.direction || buttonscontainer?.mobile?.direction || 'column',
    width: '100%',
    '& > *': {
      width: buttonscontainer?.sm?.buttonWidth || '100%',
      maxWidth: '300px',
    },
  },
  [theme.breakpoints.down('xs')]: {
    gap: buttonscontainer?.xs?.gap || '8px',
  },
}));

// Main Banner Component
const CustomBanner = ({
  // Content props
  title,
  subtitle,
  paragraphSubtitle,
  buttons = [],
  
  // Image props
  backgroundImage,
  backgroundColor,
  backgroundAlt = "Banner background",
  overlay,
  
  // Logo props
  showLogo = false,
  logoSrc,
  logoAlt = "Company Logo",
  logoPosition = {
    top: '14.15px',
    left: '68.07px',
    width: '113.92px',
    height:'143.62px',
    // Enhanced responsive logo positions
    xl: { top: '12px', left: '60px', width: '100px' },
    lg: { top: '10px', left: '50px', width: '90px' },
    md: { top: '15px', left: '20px', width: '70px' },
    sm: { top: '10px', left: '15px', width: '60px' },
    xs: { top: '8px', left: '10px', width: '50px' },
    mobile: { top: '20px', left: '20px', width: '60px' }
  },
  
  // Layout props
  height = '450px',
  contentAlignment = {
    horizontal: 'flex-start',
    vertical: 'center',
    textAlign: 'left',
    // Enhanced responsive alignment
    xl: { horizontal: 'flex-start', textAlign: 'left' },
    lg: { horizontal: 'flex-start', textAlign: 'left' },
    md: { horizontal: 'center', textAlign: 'center' },
    sm: { horizontal: 'center', textAlign: 'center' },
    xs: { horizontal: 'center', textAlign: 'center' },
    mobile: { horizontal: 'center', textAlign: 'center' }
  },
  contentPosition = {
    paddingTop: '120px',
    paddingBottom: '60px',
    // Enhanced responsive positioning
    xl: { top: '120px', left: '60px' },
    lg: { top: '100px', left: '50px' },
    md: { paddingTop: '40px', paddingBottom: '40px' },
    sm: { paddingTop: '30px', paddingBottom: '30px' },
    mobile: { paddingTop: '100px' }
  },
  
  // Styling props with enhanced responsive options
  headingStyle = {
    responsive: {
      xl: { fontSize: '44px', maxWidth: '550px' },
      lg: { fontSize: '40px', maxWidth: '500px' },
      md: { fontSize: '36px', maxWidth: '100%' },
      sm: { fontSize: '28px', marginBottom: '16px' },
      xs: { fontSize: '24px' }
    }
  },
  subheadingStyle = {
    responsive: {
      xl: { fontSize: '24px', maxWidth: '800px' },
      lg: { fontSize: '22px', maxWidth: '700px' },
      md: { fontSize: '20px', maxWidth: '100%' },
      sm: { fontSize: '18px', marginBottom: '16px' },
      xs: { fontSize: '16px' }
    }
  },
  paragraphStyle = {
    responsive: {
      xl: { maxWidth: '700px' },
      lg: { fontSize: '15px', maxWidth: '600px' },
      md: { fontSize: '15px', maxWidth: '100%' },
      sm: { fontSize: '14px', marginBottom: '20px' },
      xs: { fontSize: '13px' }
    }
  },
  buttonsContainer = {
    lg: { gap: '14px' },
    md: { gap: '12px' },
    sm: { gap: '10px', direction: 'column', buttonWidth: '100%' },
    xs: { gap: '8px' },
    mobile: { direction: 'column', gap: '12px' }
  },
  
  // Custom props
  className,
  children,
  ...props
}) => {
  return (
    <BannerSection 
      height={height} 
      backgroundcolor={backgroundColor}
      className={className} 
      {...props}
    >
      {/* Background Image */}
      {backgroundImage && (
        <BackgroundImage 
          src={backgroundImage}
          alt={backgroundAlt}
        />
      )}
      
      {/* Overlay */}
      {overlay && <Overlay overlay={overlay} />}
      
      {/* Logo */}
      {showLogo && logoSrc && (
        <LogoContainer 
          showlogo={showLogo} 
          logoposition={logoPosition}
        >
          <Link href="/" style={{ display: 'block' }}>
  <Image
    src={logoSrc}
    alt={logoAlt}
    width={500} // You can adjust
    height={500} // You can adjust
    style={{ width: '100%', height: 'auto' }}
  />
</Link>

        </LogoContainer>
      )}
      
      {/* Main Content */}
      <ContentContainer 
        contentalignment={contentAlignment}
        contentposition={contentPosition}
      >
        {/* Title */}
        {title && (
          <MainHeading 
            variant="h1" 
            headingstyle={headingStyle}
          >
            {title}
          </MainHeading>
        )}
        
        {/* Subtitle */}
        {subtitle && (
          <SubHeading 
            variant="h2" 
            subheadingstyle={subheadingStyle}
          >
            {subtitle}
          </SubHeading>
        )}
        
        {/* Paragraph Subtitle */}
        {paragraphSubtitle && (
          <ParagraphSubtitle 
            variant="body1" 
            paragraphstyle={paragraphStyle}
          >
            {paragraphSubtitle}
          </ParagraphSubtitle>
        )}
        
        {/* Buttons */}
        {buttons.length > 0 && (
          <ButtonContainer buttonscontainer={buttonsContainer}>
            {buttons.map((button, index) => (
              <CustomButton
                key={index}
                variant={button.variant || 'primary'}
                onClick={button.onClick}
                disabled={button.disabled}
                type={button.type}
                className={button.className}
                sx={{
                  // Responsive button styling
                  '@media (max-width: 600px)': {
                    width: '100%',
                    maxWidth: '300px',
                  },
                  ...button.sx
                }}
                {...button.props}
              >
                {button.text || button.children}
              </CustomButton>
            ))}
          </ButtonContainer>
        )}
        
        {/* Custom children content */}
        {children}
      </ContentContainer>
    </BannerSection>
  );
};

export default CustomBanner;

// Enhanced Usage Examples with Responsive Features:

// Example 1: Fully Responsive Wedding Hero Banner
/*
<Banner
  title="Let's Make Shaadi Magic Together!"
  subtitle="From planning to 'I do', we've got your back!"
  paragraphSubtitle="We specialize in creating unforgettable wedding experiences that reflect your unique love story."
  backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  height="100vh"
  showLogo={true}
  logoSrc="/images/poornam-events-logo.png"
  logoPosition={{
    top: '20px',
    left: '40px',
    width: '120px',
    xl: { top: '15px', left: '35px', width: '110px' },
    lg: { top: '12px', left: '30px', width: '100px' },
    md: { top: '15px', left: '20px', width: '80px' },
    sm: { top: '10px', left: '15px', width: '70px' },
    xs: { top: '8px', left: '10px', width: '60px' }
  }}
  contentAlignment={{
    horizontal: 'flex-start',
    textAlign: 'left',
    md: { horizontal: 'center', textAlign: 'center' },
    sm: { horizontal: 'center', textAlign: 'center' }
  }}
  headingStyle={{
    fontSize: '52px',
    responsive: {
      xl: { fontSize: '48px' },
      lg: { fontSize: '44px' },
      md: { fontSize: '38px' },
      sm: { fontSize: '30px' },
      xs: { fontSize: '26px' }
    }
  }}
  subheadingStyle={{
    fontSize: '28px',
    responsive: {
      xl: { fontSize: '26px' },
      lg: { fontSize: '24px' },
      md: { fontSize: '22px' },
      sm: { fontSize: '20px' },
      xs: { fontSize: '18px' }
    }
  }}
  buttonsContainer={{
    gap: '20px',
    lg: { gap: '18px' },
    md: { gap: '16px' },
    sm: { direction: 'column', gap: '12px', buttonWidth: '100%' }
  }}
  buttons={[
    {
      text: "Plan My Wedding",
      variant: "primary",
      onClick: () => console.log('Plan wedding clicked')
    }
  ]}
/>
*/

