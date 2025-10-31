
import Blog from "@/component/blog";
import { apiClient } from "@/lib/api-client";
import Head from "next/head";
import { useRouter } from "next/router";


export async function getStaticProps() {
  try {
    const [blogsRes, categoriesRes] = await Promise.all([
      apiClient.get("/api/blogs/all/event?type=blog&status=Published&page=1&limit=10"),
      apiClient.get("/api/category/getuserpanel/event"),
    ]);
    return {
      props: {
        initialPosts: blogsRes.data.blogs || [],
        initialCategories: categoriesRes.data || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        initialPosts: [],
        initialCategories: [],
      },
      revalidate: 60,
    };
  }
}

export default function BlogsPage({ initialPosts, initialCategories }) {
  const router = useRouter();
  const baseUrl = "https://www.poornamevents.com";
  const url = `${baseUrl}${router.asPath === "/" ? "" : router.asPath}`;
  const metaTitle = "Wedding Planning Tips & Real Weddings Blog";
  const metaDescription =
    "Read expert wedding planning tips, real Indian weddings & destination ideas. For couples in MP & across India.";

  const blogPosts = initialPosts || [];
  const isBlogList = true; // since this is your blog list page

  // ✅ Create CollectionPage Schema (only if blogPosts exist)
  const schemaData =
    isBlogList && blogPosts.length > 0
      ? [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${url}#collectionpage`,
          url: url,
          name: metaTitle,
          description: metaDescription,
          inLanguage: "en-IN",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.poornamevents.com/#website",
          },
          about: {
            "@type": "Organization",
            "@id": "https://www.poornamevents.com/#organization",
          },
          publisher: {
            "@type": "Organization",
            name: "Poornam Events",
            logo: {
              "@type": "ImageObject",
              url: "https://www.poornamevents.com/logo.png",
            },
            url: "https://www.poornamevents.com",
          },
          hasPart: blogPosts.map((blog) => ({
            "@type": "BlogPosting",
            headline: blog.title,
            url: `https://www.poornamevents.com/blogs/${blog.uid}`,
            datePublished: blog.createdAt
              ? blog.createdAt.includes("T")
                ? blog.createdAt
                : `${blog.createdAt}T00:00:00+05:30`
              : new Date().toISOString(),
            author: {
              "@type": "Organization",
              name: "Poornam Events",
              url: "https://www.poornamevents.com",
            },
            description: blog.description || "",
            image:
              blog.featuredImage?.url ||
              "https://www.poornamevents.com/logo.png",
          })),
        },
      ]
      : [];

  return (
    <>
      <Head>
        {schemaData.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData[0]) }}
          />
        )}
      </Head>

      <Blog initialPosts={initialPosts} initialCategories={initialCategories} />;
    </>
  )
}
