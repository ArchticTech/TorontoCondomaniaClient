import { fetchProperty } from "../../utils/api";
import SingleProperty from "../../components/single-property/index";
import Head from "next/head";
import global from "../../config/env"

const PropertyView = ({property}) => {
  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <title>{property?.meta_title}</title>
        <meta name="title" content={property?.meta_title} />
        <meta name="description" content={property?.meta_description} />
        <meta name="keywords" content={property?.meta_keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://torontocondomania.ca/" />
        <meta property="og:title" content={property?.meta_title} />
        <meta property="og:description" content={property?.meta_description} />
        <meta property="og:image" content={global.apiURL + 'images/' + property?.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://torontocondomania.ca/" />
        <meta property="twitter:title" content={property?.meta_title} />
        <meta property="twitter:description" content={property?.meta_description} />
        <meta property="twitter:image" content={global.apiURL + 'images/' + property?.image} />
      </Head>
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
