import Service from "@/component/service";
import axios from "axios";
import React from "react";

const services = ({ services }) => {
  return (
    <>
      <Service services={services} />
    </>
  );
};

export default services;

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const url = `${baseUrl}/api/service/AllServicePages/event`;
  try {
    const categoryResponse = await axios.get(url, {
      headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=120" },
    });
    return {
      props: {
        services: categoryResponse.data || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching services:", error.message);
    return {
      props: {
        services: [],
      },
      revalidate: 60,
    };
  }
}
