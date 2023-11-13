import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV4 from "../../components/listing-map";
import Head from "next/head";
import { fetchAllProperties } from "../../utils/api";

const Index = ({properties}) => {

  return (
    <>
      <Head>
        <title>TorontoCondomania | Search & Compare Pre-construction condos & Townhomes in Toronto & GTA (2023)</title>
        <meta name="title" content="Search & Compare Pre-construction condos & Townhomes in Toronto & GTA (2023)" />
        <meta name="description" content="Explore the latest pre-construction developments in Toronto and the Greater Toronto Area (GTA) for 2023. Discover upcoming real estate projects, new homes, and investment opportunities." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://torontocondomania.ca/" />
        <meta property="og:title" content="Search & Compare Pre-construction condos & Townhomes in Toronto & GTA (2023)" />
        <meta property="og:description" content="Explore the latest pre-construction developments in Toronto and the Greater Toronto Area (GTA) for 2023. Discover upcoming real estate projects, new homes, and investment opportunities." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://torontocondomania.ca/" />
        <meta property="twitter:title" content="Search & Compare Pre-construction condos & Townhomes in Toronto & GTA (2023)" />
        <meta property="twitter:description" content="Explore the latest pre-construction developments in Toronto and the Greater Toronto Area (GTA) for 2023. Discover upcoming real estate projects, new homes, and investment opportunities." />

        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Seo pageTitle="Latest Properties" />
      <ListingMapV4 properties={properties} isAssignment={false}/>
    </>
  );
};

export async function getStaticProps() {
  const properties = await fetchAllProperties();
  
  return {
    props: {
      properties: properties.data
    },
    revalidate: 240,
  };
}

export default dynamic(() => Promise.resolve(Index), { ssr: false });
