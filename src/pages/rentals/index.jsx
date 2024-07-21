import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV4 from "../../components/listing-map-rentals";
import Head from "next/head";
import {  fetchAllRentals } from "../../utils/api";

const index = ({  rentals }) => {
  return (
    <>
      <Head>
        <title>TorontoCondomania | Condos for Rent in Toronto & The GTA</title>
        <meta name="title" content="Condos for Rent in Toronto &The GTA" />
        <meta name="description" content="Find your next apartment in Toronto & the Greater Toronto Area (GTA) on Torontocondomania. Use our detailed filters to find the perfect place, then get in touch with the property manager." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://torontocondomania.ca/" />
        <meta property="og:title" content="Condos for Rent in Toronto &The GTA" />
        <meta property="og:description" content="Find your next apartment in Toronto & the Greater Toronto Area (GTA) on Torontocondomania. Use our detailed filters to find the perfect place, then get in touch with the property manager." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://torontocondomania.ca/" />
        <meta property="twitter:title" content="Condos for Rent in Toronto &The GTA" />
        <meta property="twitter:description" content="Find your next apartment in Toronto & the Greater Toronto Area (GTA) on Torontocondomania. Use our detailed filters to find the perfect place, then get in touch with the property manager." />
        
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
