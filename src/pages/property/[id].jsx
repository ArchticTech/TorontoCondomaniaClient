
import { fetchProperty } from "../../utils/api";
import SingleProperty from "../../components/single-property/index";
import Head from "next/head";
import Seo from "../../components/common/seo";

const PropertyView = ({property}) => {
  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Seo pageTitle="Latest Properties" />
      <SingleProperty property={property}  />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  var property = await fetchProperty(id);

  return {
    props: {
      'property': property.data,
    },
  };
}

export default PropertyView;


