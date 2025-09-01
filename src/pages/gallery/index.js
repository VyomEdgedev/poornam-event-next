import Portfolio from '@/component/portfolio'
import { apiClient } from '@/lib/api-client'
import React from 'react'

const Gallery = ({ showThemes }) => {
  return (
    <>
      <Portfolio gallery={showThemes}   />  
    </>
  )
}

export default Gallery
export async function getServerSideProps() {
  try {
    const response = await apiClient.get("/api/portfolio/event");
    const data = response.data;
  if (!data || Object.keys(data).length === 0) {
      return { notFound: true };
    }
    return {
      props: {
        showThemes: Array.isArray(data) ? data : [],
      },
    };
  } catch (error) {
   console.error("err", error.message);
    return {
      notFound: true,
    };
  }
}