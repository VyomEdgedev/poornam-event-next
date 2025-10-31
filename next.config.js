/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots.txt",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
      {
        source: "/llms.txt",
        destination: "/api/llms.txt",
      },
    ];
  },
};

module.exports = nextConfig;
