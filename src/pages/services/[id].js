import ServicesSubPage from '@/component/ServicesSubPage/ServicesSubPage'
import axios from 'axios'
import React from 'react'

const id = ({singleService}) => {
  return (
    <ServicesSubPage singleService={singleService}/>
  )
}

export default id



export async function getServerSideProps({ params }) {
  const { id } = params || {};
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const url = `${baseUrl}/api/service/getServicePageById/${id}/event`;

  try {
    const singleServiceResponse = await axios.get(url);
     if (!singleServiceResponse || Object.keys(singleServiceResponse).length === 0) {
      return { notFound: true };
    }
    return {
      props: {
        singleService: singleServiceResponse.data || [],
      },
    };
  } catch (error) {
    console.error("err", error.message);
    return {
      notFound: true,
    };
  }
}


