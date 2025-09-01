export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");

  const robotsTxt = `
# robots.txt for Poornam Events 

User-agent: *
Disallow: /admin/
Disallow: /login/
Disallow: /cart/
Disallow: /checkout/
Disallow: /cgi-bin/
Allow: /

# Block session or duplicate URLs
Disallow: /*?sessionid=
Disallow: /*?replytocom=

# Sitemap location
Sitemap: https://www.poornamevents.com/sitemap.xml
`;

  res.status(200).send(robotsTxt.trim());
}
