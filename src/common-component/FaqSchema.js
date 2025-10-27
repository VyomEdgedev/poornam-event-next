import Head from "next/head";

const FaqSchema = ({
  faqData,
  pageName = "Frequently Asked Questions - Poornam Events",
  pageUrl = "https://www.poornamevents.com",
}) => {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    "url": pageUrl,
    name: "Frequently Asked Questions - Poornam Events",
    AlternateName: "FAQs - Poornam Events",
    mainEntity: faqData?.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default FaqSchema;