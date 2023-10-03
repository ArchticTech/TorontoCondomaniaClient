import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV4 from "../../components/listing-map";
import Head from "next/head";
import {  fetchAllAssignments } from "../../utils/api";

const index = ({  assignments }) => {
  return (
    <>
      <Head>
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
