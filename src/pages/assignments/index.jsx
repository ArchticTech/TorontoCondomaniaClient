import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV4 from "../../components/listing-map";
import Head from "next/head";
import {  fetchAllAssignments } from "../../utils/api";

const index = ({  assignments }) => {
  return (
    <>
      <Head>
        <title>Discover Best assignment deals available for sale in Toronto & GTA</title>
        <meta name="title" content="Discover Best assignment deals available for sale in Toronto & GTA" />
        <meta name="description" content="Explore Best Assignment deals in Toronto & GTA on Torontocondomania. Use our detailed filters to find the perfect place, then get in touch with the property manager." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://torontocondomania.ca/" />
        <meta property="og:title" content="Discover Best assignment deals available for sale in Toronto & GTA" />
        <meta property="og:description" content="Explore Best Assignment deals in Toronto & GTA on Torontocondomania. Use our detailed filters to find the perfect place, then get in touch with the property manager." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://torontocondomania.ca/" />
        <meta property="twitter:title" content="Discover Best assignment deals available for sale in Toronto & GTA" />
        <meta property="twitter:description" content="Explore Best Assignment deals in Toronto & GTA on Torontocondomania. Use our detailed filters to find the perfect place, then get in touch with the property manager." />
        
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Seo pageTitle="Latest Properties" />
      <ListingMapV4 properties={assignments} isAssignment={true}/>
    </>
  );
};

export async function getServerSideProps() {
  var assignments = await fetchAllAssignments();

  return {
    props: {
      assignments: assignments.data
    },
  };
}

export default dynamic(() => Promise.resolve(index), { ssr: false });
