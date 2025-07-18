import Head from 'next/head';

const SEO = ({
  metaTitle,
  metaDescription = '',
  keywords = '',
  url = '',
  canonical = '',
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = 'index, follow',
  favicon = '/favicon.ico',
}) => {
  // Validate required fields
  if (!metaTitle) {
    console.warn('SEO component: "metaTitle" is required but missing.');
    return null;
  }

const finalOgImage = ogImage || `${baseUrl}/og-image.jpg`;
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
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
    </Head>
  );
};

export default SEO;







    
  
