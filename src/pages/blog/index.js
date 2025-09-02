
import Blog from "@/component/blog";
import { apiClient } from "@/lib/api-client";


export async function getStaticProps() {
  try {
    const [blogsRes, categoriesRes] = await Promise.all([
      apiClient.get("/api/blogs/all/event"),
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
  return <Blog initialPosts={initialPosts} initialCategories={initialCategories} />;
}
