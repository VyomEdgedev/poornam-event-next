// components/Banner.js
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "../button/CustomButton";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbsComponent from "../breadcrumbs/BreadcrumbsComponent";
// Custom styled components
const BannerSection = styled(Box)(({ theme, height, backgroundcolor }) => ({
  position: "relative",
  width: "100%",
  height: height || "450px",
  backgroundColor: backgroundcolor || "rgba(0, 13, 31, 1)",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",

  // Responsive height adjustments
  [theme.breakpoints.down("lg")]: {
    height: height === "100vh" ? "80vh" : height === "450px" ? "400px" : height,
  },
  [theme.breakpoints.down("md")]: {
    height: height === "100vh" ? "70vh" : height === "450px" ? "350px" : height,
    minHeight: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    height: height === "100vh" ? "60vh" : height === "450px" ? "380px" : height,
    minHeight: "320px",
  },
  // [theme.breakpoints.down("xs")]: {
  //   height: height === "100vh" ? "60vh" : height === "450px" ? "300px" : height,
  //   minHeight: "440px",
  // },
}));

const BackgroundImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,

  // Responsive adjustments for background image
  [theme.breakpoints.down("md")]: {
    objectPosition: "center center",
  },
}));

const Overlay = styled(Box)(({ theme, overlay }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: overlay?.width || "85%",
  height: "100%",
  zIndex: 2,
  background:
    overlay?.background ||
    "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",

  // Responsive overlay adjustments
  [theme.breakpoints.down("lg")]: {
    width: overlay?.responsive?.lg?.width || "85%",
    background:
      overlay?.responsive?.lg?.background ||
      overlay?.background ||
      "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",
  },
  [theme.breakpoints.down("md")]: {
    width: overlay?.responsive?.md?.width || "100%",
    background:
      overlay?.responsive?.md?.background ||
      overlay?.background ||
      "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",
  },
  [theme.breakpoints.down("sm")]: {
    background:
      overlay?.responsive?.sm?.background ||
      overlay?.background ||
      "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",
  },
}));

const LogoContainer = styled(Box)(({ theme, showlogo, logoposition }) => ({
  ...(showlogo && {
    position: "relative",
    top: -46,
    left: 0,
    zIndex: 6,

    zIndex: 3,

    width: "100px",
    height: "auto",

    // Enhanced responsive logo positioning
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),
}));

const ContentContainer = styled(Container)(
  ({ theme, contentalignment, contentposition }) => ({
    position: "relative",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: contentalignment?.horizontal || "flex-start",
    justifyContent: contentalignment?.vertical || "center",
    textAlign: contentalignment?.textAlign || "left",

    // Enhanced responsive positioning
    [theme.breakpoints.down("xl")]: {},

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const MainHeading = styled(Typography)(({ theme, headingstyle }) => ({
  fontFamily: headingstyle?.fontFamily || "'Gloock', serif",
  fontWeight: headingstyle?.fontWeight || "400",
  fontSize: headingstyle?.fontSize || "48px",
  letterSpacing: headingstyle?.letterSpacing || "0.03em",
  lineHeight: headingstyle?.lineHeight || "1.13",
  color: headingstyle?.color || "rgba(255, 255, 255, 1)",
  marginBottom: headingstyle?.marginBottom || "8px",
  // maxWidth: headingstyle?.maxWidth || '950px',

  // Enhanced responsive typography

  [theme.breakpoints.down("lg")]: {
    fontSize:
      (headingstyle?.responsive?.lg?.fontSize || "30px") + " !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize:
      (headingstyle?.responsive?.md?.fontSize || "24px") + " !important",
    marginBottom: headingstyle?.responsive?.md?.marginBottom || "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize:
      (headingstyle?.responsive?.sm?.fontSize || "18px") + " !important",
    lineHeight: headingstyle?.responsive?.sm?.lineHeight || "1",
    marginBottom: headingstyle?.responsive?.sm?.marginBottom || "4px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize:
      (headingstyle?.responsive?.xs?.fontSize || "17px") + " !important",
    lineHeight: headingstyle?.responsive?.xs?.lineHeight || "1",
  },
}));

const SubHeading = styled(Typography)(({ theme, subheadingstyle }) => ({
  fontFamily: subheadingstyle?.fontFamily || "'Akatab',Sans-serif",
  fontWeight: subheadingstyle?.fontWeight || "600",
  fontSize: subheadingstyle?.fontSize || "26px !important",
  letterSpacing: subheadingstyle?.letterSpacing || "0.02em",
  lineHeight: subheadingstyle?.lineHeight || "1.37",
  color: subheadingstyle?.color || "#FFFFFF",
  marginBottom: subheadingstyle?.marginBottom || "10px",
  // maxWidth: subheadingstyle?.maxWidth || "900px",

  // Enhanced responsive typography
  [theme.breakpoints.down("xl")]: {
    fontSize:
      (subheadingstyle?.responsive?.xl?.fontSize || "24px") + " !important",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize:
      (subheadingstyle?.responsive?.lg?.fontSize || "22px") + " !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize:
      (subheadingstyle?.responsive?.md?.fontSize || "20px") + " !important",
    marginBottom: subheadingstyle?.responsive?.md?.marginBottom || "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize:
      (subheadingstyle?.responsive?.sm?.fontSize || "24px") + " !important",
    lineHeight: subheadingstyle?.responsive?.sm?.lineHeight || "1.2",
    marginBottom: subheadingstyle?.responsive?.sm?.marginBottom || "14px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize:
      (subheadingstyle?.responsive?.xs?.fontSize || "20px") + " !important",
  },
}));

const ParagraphSubtitle = styled(Typography)(({ theme, paragraphstyle }) => ({
  fontFamily: paragraphstyle?.fontFamily || "'Akatab', sans-serif",
  fontWeight: paragraphstyle?.fontWeight || "400",
  fontSize: paragraphstyle?.fontSize || "16px",
  letterSpacing: paragraphstyle?.letterSpacing || "0.01em",
  lineHeight: paragraphstyle?.lineHeight || "1.5",
  color: paragraphstyle?.color || "rgba(255, 255, 255, 0.8)",
  marginBottom: paragraphstyle?.marginBottom || "32px",
  // maxWidth: paragraphstyle?.maxWidth || "800px",

  // Enhanced responsive typography
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize:
      (paragraphstyle?.responsive?.lg?.fontSize || "15px") + " !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize:
      (paragraphstyle?.responsive?.md?.fontSize || "15px") + " !important",
    marginBottom: paragraphstyle?.responsive?.md?.marginBottom || "24px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize:
      (paragraphstyle?.responsive?.sm?.fontSize || "14px") + " !important",
    lineHeight: paragraphstyle?.responsive?.sm?.lineHeight || "1.6",
    marginBottom: paragraphstyle?.responsive?.sm?.marginBottom || "20px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize:
      (paragraphstyle?.responsive?.xs?.fontSize || "13px") + " !important",
    lineHeight: paragraphstyle?.responsive?.xs?.lineHeight || "1.65",
  },
}));

const ButtonContainer = styled(Box)(({ theme, buttonscontainer }) => ({
  display: "flex",
  alignItems: "center",
  gap: buttonscontainer?.gap || "16px",
  flexDirection: buttonscontainer?.direction || "row",
  flexWrap: "wrap",

  // Enhanced responsive button layout
  [theme.breakpoints.down("lg")]: {
    gap: buttonscontainer?.lg?.gap || "14px",
    flexDirection: buttonscontainer?.lg?.direction || "row",
  },
  [theme.breakpoints.down("md")]: {
    gap: buttonscontainer?.md?.gap || "12px",
    flexDirection:
      buttonscontainer?.md?.direction ||
      buttonscontainer?.mobile?.direction ||
      "row",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    gap: buttonscontainer?.sm?.gap || buttonscontainer?.mobile?.gap || "10px",
    flexDirection:
      buttonscontainer?.sm?.direction ||
      buttonscontainer?.mobile?.direction ||
      "column",
    width: "100%",
    "& > *": {
      width: buttonscontainer?.sm?.buttonWidth || "100%",
      // maxWidth: "300px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    gap: buttonscontainer?.xs?.gap || "8px",
  },
}));

const BreadcrumbsWrapper = styled(Box)(({ theme, breadcrumbsPosition }) => ({
  position: "absolute",
  top: breadcrumbsPosition.top,
  left: breadcrumbsPosition.left,
  zIndex: 4, // Higher than overlay but below logo if needed
  [theme.breakpoints.down("lg")]: {
    top: breadcrumbsPosition.lg?.top || breadcrumbsPosition.top,
    left: breadcrumbsPosition.lg?.left || breadcrumbsPosition.left,
  },
  [theme.breakpoints.down("md")]: {
    top: breadcrumbsPosition.md?.top || breadcrumbsPosition.top,
    left: breadcrumbsPosition.md?.left || breadcrumbsPosition.left,
  },
  [theme.breakpoints.down("sm")]: {
    top: breadcrumbsPosition.sm?.top || breadcrumbsPosition.top,
    left: breadcrumbsPosition.sm?.left || breadcrumbsPosition.left,
  },
  [theme.breakpoints.only("xs")]: {
    top: breadcrumbsPosition.xs?.top || breadcrumbsPosition.top,
    left: breadcrumbsPosition.xs?.left || breadcrumbsPosition.left,
  },
}));

// Main Banner Component
const CustomBanner = ({
  // Content props
  title,
  subtitle,
  paragraphSubtitle,
  buttons = [],
  breadcrumbs,
  breadcrumbsPosition = {
    top: "20px",
    left: "20px",
    // Responsive positions
    lg: { top: "15px", left: "15px" },
    md: { top: "10px", left: "10px" },
    sm: { top: "10px", left: "10px" },
  },
  breadcrumbsSx = {},

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
    top: "10px",
    left: "37px",
    width: "120px",
    height: "120px",

    // Enhanced responsive logo positions
    xl: { top: "12px", left: "60px", width: "100px" },
    lg: { top: "10px", left: "50px", width: "90px" },
    md: { top: "15px", left: "20px", width: "70px" },
    sm: { top: "10px", left: "15px", width: "60px" },
    xs: { top: "8px", left: "10px", width: "50px" },
    mobile: { top: "20px", left: "20px", width: "60px" },
  },

  // Layout props
  height = "450px",
  contentAlignment = {
    horizontal: "flex-start",
    vertical: "center",
    textAlign: "left",
    // Enhanced responsive alignment
    xl: { horizontal: "flex-start", textAlign: "left" },
    lg: { horizontal: "flex-start", textAlign: "left" },
    md: { horizontal: "center", textAlign: "center" },
    sm: { horizontal: "center", textAlign: "center" },
    xs: { horizontal: "center", textAlign: "center" },
    mobile: { horizontal: "center", textAlign: "center" },
  },
  contentPosition = {
    paddingTop: "120px",
    paddingBottom: "60px",
    // Enhanced responsive positioning
    // xl: { top: '120px', left: '60px' },
    lg: { top: "123px", left: "50px" },
    md: { paddingTop: "40px", paddingBottom: "40px" },
    sm: { paddingTop: "30px", paddingBottom: "30px" },
    mobile: { paddingTop: "100px" },
  },

  // Styling props with enhanced responsive options
  headingStyle = {
    responsive: {
      xl: { fontSize: "44px" },
      lg: { fontSize: "40px" },
      md: { fontSize: "36px" },
      sm: { fontSize: "28px", marginBottom: "10px" },
      xs: { fontSize: "24px" },
    },
  },
  subheadingStyle = {
    responsive: {
      xl: { fontSize: "24px" },
      lg: { fontSize: "22px" },
      md: { fontSize: "20px" },
      sm: { fontSize: "18px", marginBottom: "14px" },
      xs: { fontSize: "16px" },
    },
  },
  paragraphStyle = {
    responsive: {
      xl: { maxWidth: "700px" },
      // lg: { fontSize: "15px", maxWidth: "600px" },
      // md: { fontSize: "15px", maxWidth: "100%" },
      sm: { fontSize: "13px", marginBottom: "15px" },
      xs: { fontSize: "12px" },
    },
  },
  buttonsContainer = {
    lg: { gap: "14px" },
    md: { gap: "12px" },
    sm: { gap: "10px", direction: "column", buttonWidth: "100%" },
    xs: { gap: "8px" },
    mobile: { direction: "column", gap: "12px" },
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
        <BackgroundImage src={backgroundImage} alt={backgroundAlt} />
      )}

      {/* Overlay */}
      {overlay && <Overlay overlay={overlay} />}

      {/* Main Content */}
      <ContentContainer
        contentalignment={contentAlignment}
        contentposition={contentPosition}
      >
        {/* Logo */}
        {showLogo && logoSrc && (
          <Link href="/" style={{ display: "block" }}>
            <LogoContainer showlogo={showLogo} logoposition={logoPosition}>
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={120} // You can adjust
                height={120} // You can adjust
                style={{ width: "100%", height: "auto" }}
              />
            </LogoContainer>
          </Link>
        )}

        {/* Title */}
        {title && (
          <MainHeading variant="h1" headingstyle={headingStyle}>
            {title}
          </MainHeading>
        )}

        {/* Subtitle */}
        {subtitle && (
          <SubHeading variant="h2" subheadingstyle={subheadingStyle}>
            {subtitle}
          </SubHeading>
        )}

        {/* Paragraph Subtitle */}
        {paragraphSubtitle && (
          <ParagraphSubtitle variant="body1" paragraphstyle={paragraphStyle}>
            {paragraphSubtitle}
          </ParagraphSubtitle>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <ButtonContainer buttonscontainer={buttonsContainer}>
            {buttons.map((button, index) => (
              <CustomButton
                key={index}
                variant={button.variant || "primary"}
                onClick={button.onClick}
                disabled={button.disabled}
                type={button.type}
                className={button.className}
                sx={{
                  // Responsive button styling
                  "@media (max-width: 600px)": {
                    width: "100%",
                    maxWidth: "300px",
                  },
                  ...button.sx,
                }}
                {...button.props}
              >
                {button.text || button.children}
              </CustomButton>
            ))}
          </ButtonContainer>
        )}
        {/* Breadcrumbs - Added this new section */}

        {/* Custom children content */}
        {children}
        {breadcrumbs && (
          <BreadcrumbsWrapper
            breadcrumbsPosition={breadcrumbsPosition}
            sx={breadcrumbsSx}
          >
            <BreadcrumbsComponent items={breadcrumbs} />
          </BreadcrumbsWrapper>
        )}
      </ContentContainer>
    </BannerSection>
  );
};

export default CustomBanner;
