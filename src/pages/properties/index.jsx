import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV4 from "../../components/listing-map";
import Head from "next/head";
import { fetchAllProperties } from "../../utils/api";

const Index = ({properties}) => {

  return (
    <>
      <Head>
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
