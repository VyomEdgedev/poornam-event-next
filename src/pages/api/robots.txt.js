export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");

  const robotsTxt = `
User-agent: *
Disallow:

Sitemap: https://${req.headers.host}/sitemap.xml
`;

  res.status(200).send(robotsTxt.trim());
}
