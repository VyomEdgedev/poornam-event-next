// components/Banner.js
import React, { useContext } from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "../button/CustomButton";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbsComponent from "../breadcrumbs/BreadcrumbsComponent";
import { usePathname } from "next/navigation";
import { loaderContext } from "@/contextApi/loaderContext";

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
  [theme.breakpoints.down("md")]: {
    height: height === "100vh" ? "70vh" : height === "450px" ? "350px" : height,
    minHeight: height || "300px",
  },
  [theme.breakpoints.down("sm")]: {
    height: height === "100vh" ? "60vh" : height === "450px" ? "380px" : height,
    minHeight: height || "320px",
  },
  [theme.breakpoints.down("xs")]: {
    height: height === "100vh" ? "60vh" : height === "450px" ? "300px" : height,
    minHeight: "440px",
  },
}));

const BackgroundImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,

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

const LogoContainer = styled(Box)(({ theme, showlogo }) => ({
  ...(showlogo && {
    position: "relative",
    top: -68,
    left: 0,
    zIndex: 6,
    width: "100px",
    height: "auto",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),
}));

const ContentContainer = styled(Container)(({ theme, contentalignment }) => ({
  height: "100%",
  position: "relative",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: contentalignment?.horizontal || "flex-start",
  justifyContent: contentalignment?.vertical || "center",
  textAlign: contentalignment?.textAlign || "left",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const MainHeading = styled(Typography)(({ theme, headingstyle }) => ({
  fontFamily: headingstyle?.fontFamily || "'Gloock', serif  !important",
  fontWeight: headingstyle?.fontWeight || "400",
  fontSize: headingstyle?.fontSize || "48px",
  letterSpacing: headingstyle?.letterSpacing || "0.03em",
  lineHeight: headingstyle?.lineHeight || "1.13",
  color: headingstyle?.color || "rgba(255, 255, 255, 1)",
  marginBottom: headingstyle?.marginBottom || "8px",

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
  fontFamily: subheadingstyle?.fontFamily || "'Akatab',Sans-serif !important",
  fontWeight: subheadingstyle?.fontWeight || "600",
  fontSize: subheadingstyle?.fontSize || "26px !important",
  letterSpacing: subheadingstyle?.letterSpacing || "0.02em",
  lineHeight: subheadingstyle?.lineHeight || "1.37",
  color: subheadingstyle?.color || "#FFFFFF",
  marginBottom: subheadingstyle?.marginBottom || "10px",

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
  fontFamily: paragraphstyle?.fontFamily || "'Akatab', sans-serif !important",
  fontWeight: paragraphstyle?.fontWeight || "400",
  fontSize: paragraphstyle?.fontSize || "16px",
  letterSpacing: paragraphstyle?.letterSpacing || "0.01em",
  lineHeight: paragraphstyle?.lineHeight || "1.5",
  color: paragraphstyle?.color || "rgba(255, 255, 255, 0.8)",
  marginBottom: paragraphstyle?.marginBottom || "32px",

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
    },
  },
  [theme.breakpoints.down("xs")]: {
    gap: buttonscontainer?.xs?.gap || "8px",
  },
}));

const BreadcrumbsWrapper = styled(Box)(({ theme, breadcrumbsPosition }) => ({
  position: "absolute",
  bottom: "0px",
  left: "20px",
  zIndex: 4,
}));

// Main Banner Component
const CustomBanner = ({
  // Content props
  headingtag = "h1",
  title,
  subtitle,
  paragraphSubtitle,
  buttons = [],
  breadcrumbs,
  breadcrumbsPosition = {
    top: "320px",
    left: "20px",
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
  },

  // Layout props
  height,
  contentAlignment = {
    horizontal: "flex-start",
    vertical: "center",
    textAlign: "left",
    xl: { horizontal: "flex-start", textAlign: "left" },
    lg: { horizontal: "flex-start", textAlign: "left" },
    xs: { horizontal: "center", textAlign: "center" },
    mobile: { horizontal: "center", textAlign: "center" },
  },

  // Styling props with enhanced responsive options
  headingStyle = {
    responsive: {
      xl: { fontSize: "48px" },
      lg: { fontSize: "44px" },
      md: { fontSize: "40px" },
      sm: { fontSize: "32px", marginBottom: "10px" },
      xs: { fontSize: "24px" },
    },
  },
  subheadingStyle = {
    responsive: {
      xl: { fontSize: "28px" },
      lg: { fontSize: "26px" },
      md: { fontSize: "24px" },
      sm: { fontSize: "20px", marginBottom: "14px" },
      xs: { fontSize: "18px" },
    },
  },
  paragraphStyle = {
    responsive: {
      xl: { fontSize: "16px", maxWidth: "700px" },
      md: { fontSize: "16px" },
      sm: { fontSize: "15px", marginBottom: "15px" },
      xs: { fontSize: "14px" },
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
  const bannerHeight = height || "450px";
  const {loading ,setLoading} = useContext(loaderContext);
  const pathName = usePathname();

  const handleNaviagate=(path)=>{
    if(pathName !== path){
      setLoading(true);
    }
  }
  return (
    <BannerSection
      height={bannerHeight}
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
      <ContentContainer contentalignment={contentAlignment}>
        {/* Logo */}
        {showLogo && logoSrc && (
          <Link href="/" style={{ display: "block" }}>
            <LogoContainer showlogo={showLogo.toString()} logoposition={logoPosition}>
              <Image
                onClick={()=>handleNaviagate("/")}
                src={logoSrc}
                alt={logoAlt}
                width={120}
                height={120}
                style={{ width: "100%", height: "auto" }}
              />
            </LogoContainer>
          </Link>
        )}

        {/* Title */}
        {title && (
          <MainHeading variant={`${headingtag}`} headingstyle={headingStyle}>
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

        {/* Custom children content */}
        {children}

        {/* Breadcrumbs */}
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
