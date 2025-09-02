import FilterGallery from '@/component/portfolio/FilterGallery'
import { apiClient } from '@/lib/api-client'
import React from 'react'

const id = ({galleryFilter}) => {
  return (
    <FilterGallery galleryFilter={galleryFilter}/>
  )
}

export default id

export async function getServerSideProps() {
  try {
        const response = await apiClient.get("/api/portfolio/event");
        const data = response.data;
      if (!data || Object.keys(data).length === 0) {
      return { notFound: true };
      }
    return {
      props: {
        galleryFilter: Array.isArray(data) ? data : [],
      },
    };
  } catch (error) {
    console.error("Error fetching gallery data:", error.message);
    return {
      props: {
        galleryFilter: [],
      },
    };
  }
}