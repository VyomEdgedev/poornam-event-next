import Home from "../component/home/home";
import axios from "axios";

export default function HomePage({ categories, services }) {
  return <Home categorie={categories} services={services} />;
}

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  const categoryUrl = `${baseUrl}/api/category/getuserpanel/event`;
  const serviceUrl = `${baseUrl}/api/service/AllServicePages/event`;

  try {
    const [categoryResponse, serviceResponse] = await Promise.all([
      axios.get(categoryUrl),
      axios.get(serviceUrl),
    ]);

    return {
      props: {
        categories: categoryResponse.data || [],
        services: serviceResponse.data || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        categories: [],
        services: [],
      },
      revalidate: 60,
    };
  }
}
