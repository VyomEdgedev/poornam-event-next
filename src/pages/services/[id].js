import ServicesSubPage from "@/component/ServicesSubPage/ServicesSubPage";
import axios from "axios";
import React from "react";

const id = ({ singleService }) => {
  return <ServicesSubPage singleService={singleService} />;
};

export default id;

export async function getStaticPaths() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const url = `${baseUrl}/api/service/AllServicePages/event`;

  try {
    const response = await axios.get(url, {
      headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=120" },
    });
    const services = response.data || [];

    // Use uid instead of id for paths
    const paths = services
      .map((blog) => ({
        params: { id: blog.uid || blog.id?.toString() },
      }))
      .filter((path) => path.params.id); // Filter out any undefined/null ids

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
  const url = `${baseUrl}/api/service/getServicePageById/${id}/event`;

  try {
    const singleServiceResponse = await axios.get(url);
    if (
      !singleServiceResponse ||
      Object.keys(singleServiceResponse).length === 0
    ) {
      return { notFound: true };
    }
    return {
      props: {
        singleService: singleServiceResponse.data || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("err", error.message);
    return {
      notFound: true,
    };
  }
}
