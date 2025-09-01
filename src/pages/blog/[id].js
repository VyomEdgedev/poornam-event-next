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

export async function getServerSideProps({ params }) {
  const { id } = params || {};

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const url = `${baseUrl}/api/blogs/${id}/event`;

  try {
    const singleBlogResponse = await axios.get(url);
    
    if (!singleBlogResponse || Object.keys(singleBlogResponse).length === 0) {
      return { notFound: true };
    }
    return {
      props: {
        singleBlog: singleBlogResponse.data.blog || [],
      },
    };
  } catch (error) {
   console.error("err", error.message);
    return {
      notFound: true,
    };
  }
}
