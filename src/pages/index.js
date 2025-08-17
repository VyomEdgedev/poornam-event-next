import Home from "../component/home/home";
import axios from "axios";

export default function HomePage({ categories }) {
  console.log(categories, "fffffffffffffffff");
  return <Home  categorie={categories}/>;
}

export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL; 
  const url = `${baseUrl}/api/category/getuserpanel/event`;

  console.log("Fetching from:", url);

  try {
    const categoryResponse = await axios.get(url);
    return {
      props: {
        categories: categoryResponse.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return {
      props: {
        categories: [],
      },
    };
  }
}
