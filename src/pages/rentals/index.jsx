import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV4 from "../../components/listing-map-rentals";
import Head from "next/head";
import {  fetchAllRentals } from "../../utils/api";

const index = ({  rentals }) => {
  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Seo pageTitle="Latest Rentals" />
      <ListingMapV4 rentals={rentals} />
    </>
  );
};

export async function getServerSideProps() {
  var rentals = await fetchAllRentals();

  return {
    props: {
      rentals: rentals.data
    },
  };
}

export default dynamic(() => Promise.resolve(index), { ssr: false });
