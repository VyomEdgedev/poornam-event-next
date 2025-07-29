export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");
  const baseUrl = `https://${req.headers.host}`;

  const staticPages = [
    "", 
    "about",
    "contact",
    "portfolio",
  ];
  const urls = staticPages.map((page) => {
    return `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${urls.join("")}
</urlset>`;

  res.status(200).send(sitemap.trim());
}
