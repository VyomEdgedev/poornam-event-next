import  SubBlog  from "@/component/subBlog/SubBlog";
import axios from "axios";



const id = ({singleBlog}) => {
  console.log("singleBlog", singleBlog);
  return (
    <>
   <SubBlog blog={singleBlog} />
    </>
  )
}

export default id;

export async function getServerSideProps({ params }) {
  const { id } = params || {};
  console.log("id", id);
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const url = `${baseUrl}/api/blogs/${id}/event`;
  console.log("Fetching from:", url);
  

  try {
    const singleBlogResponse = await axios.get(url);
    console.log("singleBlogResponse", url);

    return {
      props: {
        singleBlog: singleBlogResponse.data.blog || [],
      },
    };
  } catch (error) {
    console.error("err", error.message);
    return {
      props: {
        singleBlog: [],
      },
    };
  }
}