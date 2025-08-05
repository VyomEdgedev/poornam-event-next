import { apiClient } from "@/lib/api-client";

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");
  const baseUrl = `https://${req.headers.host}`;
  const staticPages = ["", "about", "contact", "portfolio"];

  let blogs;
  try {
    const blogResponse = await apiClient.get("/api/blogs/event");
    const data = blogResponse.data.blogs;

    if (Array.isArray(data)) {
      const obj = {};
      blogs = data.map((item) => (obj.page = `/blog/${item?._id}`));
    }
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }

  let portfolio;
  try {
    const portfolioResponse = await apiClient.get("api/portfolio/event");
    const portfolioData = portfolioResponse.data;
    if (Array.isArray(portfolioData)) {
      const obj = {};
      portfolio = portfolioData.map(
        (val) => (obj.page = `gallery/${val?._id}`)
      );
    }
  } catch (error) {
    console.log("Error fetching portfolio:", error);
  }
  const allUrls = staticPages.concat(blogs, portfolio);

  const urls = allUrls.map((page) => {
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
