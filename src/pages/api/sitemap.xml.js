import { apiClient } from "@/lib/api-client";
import disclaimer from "../disclaimer";

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");
  const baseUrl = `https://${req.headers.host}`;
  const staticPages = ["", "aboutus", "contact", "blog","gallery","services","disclaimer","privacy-policy","terms"];

  let blogs;
  try {
    const blogResponse = await apiClient.get("/api/blogs/all/event?type=blog");
    const data = blogResponse.data.blogs;

    if (Array.isArray(data)) {
      const obj = {};
      blogs = data.map((item) => (obj.page = `blog/${item?.uid}`));
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  let portfolio;
  try {
    const portfolioResponse = await apiClient.get("api/portfolio/event");
    const portfolioData = portfolioResponse.data;
    if (Array.isArray(portfolioData)) {
      const obj = {};
      portfolio = portfolioData.map(
        (val) => (obj.page = `gallery/${val?.uid}`)
      );
    }
  } catch (error) {
    console.error("Error fetching portfolio:", error);
  }
  let subservices;
  try {
    const subservicesResponse = await apiClient.get("api/service/AllServicePages/event");
    const subservicesData = subservicesResponse.data;
    if (Array.isArray(subservicesData)) {
      const obj = {};
      subservices  = subservicesData.map(
        (val) => (obj.page = `services/${val.uid}`)
      );
    }
  } catch (error) {
    console.error("Error fetching subservices:", error);
  }
  const allUrls = staticPages.concat(blogs,subservices);

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
