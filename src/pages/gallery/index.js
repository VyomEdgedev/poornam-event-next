import Portfolio from "@/component/portfolio";
import { apiClient } from "@/lib/api-client";
import axios from "axios";
import React from "react";

const Gallery = ({ showThemes }) => {
  return (
    <>
      <Portfolio gallery={showThemes} />
    </>
  );
};

export default Gallery;
export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  try {
    const response = await axios.get(`${baseUrl}/api/portfolio/event`, {
      headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=120" },
    });
    const data = response.data;
    if (!data || Object.keys(data).length === 0) {
      return { notFound: true };
    }
    return {
      props: {
        showThemes: Array.isArray(data) ? data : [],
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
