import Head from 'next/head';
import { useRouter } from "next/router";

const SEO = ({
  metaTitle,
  metaDescription = '',
  keywords = '',
  // url = '',
  canonical = '',
  ogTitle,
  ogDescription,
  // ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = 'index, follow',
  favicon = '/favicon.ico',
  breadcrumbItems = [],
  orgaizationName = "Poornam Events",
  orgaizationLogo = "https://www.poornamevents.com/logo.png",
  pageName = "",
}) => {

  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.poornamevents.com";

  const path = router.asPath === "/" ? "" : router.asPath;
  const url = `${baseUrl}${path}`;
  const finalOgImage = "https://www.poornamevents.com/logo.png";


  // Validate required fields
  if (!metaTitle) {
    console.warn('SEO component: "metaTitle" is required but missing.');
    return null;
  }
  // Build breadcrumb list - ALWAYS include at least 2 items
  const breadcrumbList = [];

  // Always add Home as first item
  breadcrumbList.push({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: "https://www.poornamevents.com/",
  });

  // If custom breadcrumb items provided, use them
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    breadcrumbItems.forEach((item, index) => {
      breadcrumbList.push({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url.startsWith("http")
          ? item.url
          : `https://www.poornamevents.com${item.url}`,
      });
    });
  } else if (router.asPath !== "/") {
    // If not homepage and no custom items, add current page
    const currentPageName =
      pageName || decodeURIComponent(router.asPath.split("/").filter(Boolean).pop()) || "Page";
    breadcrumbList.push({
      "@type": "ListItem",
      position: 2,
      name: currentPageName.replace(/-/g, " "),
      item: url,
    });
  } else {
    // On homepage, add a generic second item
    breadcrumbList.push({
      "@type": "ListItem",
      position: 2,
      name: "Wedding Experiences",
      item: "https://www.poornamevents.com/#experiences",
    });
  }
  // Structured Data with all schemas
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://www.poornamevents.com/#organization",
        name: "Poornam Events",
        alternateName: "Poornam Events",
        url: "https://www.poornamevents.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.poornamevents.com/#logo",
          url: "https://www.poornamevents.com/logo.png",
          contentUrl: "https://www.poornamevents.com/logo.png",
          caption: "Poornam Logo",
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: "https://www.poornamevents.com/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "Your trusted wedding planner in Indore, Bhopal & Ujjain. Luxury destination, themed & intimate weddings planned since 2017.",
        email: " eventspoornam@gmail.com",
        telephone: "+919519066885",
        founder: {
          "@type": "Person",
          name: "Richi Jain",
          jobTitle: "Founder",
          email: "  eventspoornam@gmail.com",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9519066885",
          contactType: "Customer Support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "202, 2nd Floor, Kothari Manjur, Janjeerwala Square, Near Janjeerwala Square ,Diamond Colony, New Palasia,",
          addressLocality: "Indore",
          addressRegion: "MP",
          postalCode: "452001",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/poornamevents",
          "https://www.linkedin.com/company/poornam-events/",
          "https://www.instagram.com/poornamevents?igsh=MXc5cTd3Z2x3ejRsaw==",
          "https://x.com/",
          "https://www.youtube.com/@poornam-wedding-planner",
        ],
      },
      // Website Schema
      {
        "@type": "WebSite",
        "@id": "https://www.poornamevents.com//#website",
        url: "https://www.poornamevents.com/",
        name: "Poornam Events",
        description:
          "Your trusted wedding planner in Indore, Bhopal & Ujjain. Luxury destination, themed & intimate weddings planned since 2017.",
        publisher: {
          "@id": "https://www.poornamevents.com/#organization",
        },
        inLanguage: "en-IN",
      },
      // BreadcrumbList Schema - Always include
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        name: "Breadcrumbs",
        itemListElement: breadcrumbList,
      },
    ],
  };

  // const finalOgImage = 'https://res.cloudinary.com/dtidgvjlt/image/upload/v1753038213/logo_kjfvsf.png';
  return (
    <Head>
      {/* General Meta */}
      <title>{metaTitle}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical || url} />

      {/* Favicon */}
      <link rel="icon" href={favicon} type="image/x-icon" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle || metaTitle} />
      <meta property="og:description" content={ogDescription || metaDescription} />
      <meta property="og:image" content={finalOgImage} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={twitterTitle || metaTitle} />
      <meta name="twitter:description" content={twitterDescription || metaDescription} />
      {twitterImage && <meta name="twitter:image" content={finalOgImage} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

    </Head>
  );
};

export default SEO;









