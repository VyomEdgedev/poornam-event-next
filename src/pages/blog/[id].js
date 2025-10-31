import SubBlog from "@/component/subBlog/SubBlog";
import axios from "axios";

const id = ({ singleBlog }) => {
  return (
    <>
      <SubBlog blog={singleBlog} />
    </>
  );
};

export default id;

// export async function getServerSideProps({ params }) {
//   const { id } = params || {};

//   const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
//   const url = `${baseUrl}/api/blogs/${id}/event`;

//   try {
//     const singleBlogResponse = await axios.get(url);
    
//     if (!singleBlogResponse || Object.keys(singleBlogResponse).length === 0) {
//       return { notFound: true };
//     }
//     return {
//       props: {
//         singleBlog: singleBlogResponse.data.blog || [],
//       },
//     };
//   } catch (error) {
//    console.error("err", error.message);
//     return {
//       notFound: true,
//     };
//   }
// }



export async function getStaticPaths() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const url = `${baseUrl}/api/blogs/all/event?type=blog&status=Published&page=1&limit=1000`;

  try {
    const response = await axios.get(url);
    const blogs = response.data.blogs || [];

    // Use uid instead of id for paths
    const paths = blogs.map((blog) => ({
      params: { id: blog.uid || blog.id?.toString() }, 
    })).filter(path => path.params.id); // Filter out any undefined/null ids

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    // Only log if it's not a 401 (unauthorized) - might be API auth issue
    if (error.response?.status !== 401) {
      console.error("Error fetching blogs:", error.message);
    }
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}


export async function getStaticProps({ params }) {
  const { id } = params || {};
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const url = `${baseUrl}/api/blogs/${id}/event`;

  try {
    const response = await axios.get(url);
    const singleBlog = response.data.blog || null;

    if (!singleBlog) {
      return { notFound: true };
    }

    return {
      props: {
        singleBlog,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching single blog:", error.message);
    return { notFound: true };
  }
}



// export async function getStaticPaths() {
//   const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
//   const url = `${baseUrl}/api/blogs`;

//   try {
//     const response = await axios.get(url);
//     const blogs = response.data.blogs || [];

//     const paths = blogs.map((blog) => ({
//       params: { id: blog.id.toString() }, // Make sure id is a string
//     }));

//     return {
//       paths,
//       fallback: "blocking", // "blocking" will server-render new paths not generated at build
//     };
//   } catch (error) {
//     console.error("Error fetching blogs:", error.message);
//     return {
//       paths: [],
//       fallback: "blocking",
//     };
//   }
// }

// // This function fetches blog data at build time
// export async function getStaticProps({ params }) {
//   const { id } = params || {};
//   const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
//   const url = `${baseUrl}/api/blogs/${id}/event`;

//   try {
//     const response = await axios.get(url);
//     const singleBlog = response.data.blog || null;

//     if (!singleBlog) {
//       return { notFound: true };
//     }

//     return {
//       props: {
//         singleBlog,
//       },
//       revalidate: 60, // optional: regenerate the page every 10 seconds
//     };
//   } catch (error) {
//     console.error("Error fetching single blog:", error.message);
//     return { notFound: true };
//   }
// }
