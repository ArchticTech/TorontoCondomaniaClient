import { fetchAssignment } from "../../utils/api";
import SingleProperty from "../../components/single-property/index";
import Head from "next/head";
import global from "../../config/env";

const PropertyView = ({assignment}) => {

  console.log('logging from main file ' + assignment.tentative_occ_date);

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <title>{assignment?.meta_title}</title>
        <meta name="title" content={assignment?.meta_title} />
        <meta name="description" content={assignment?.meta_description} />
        <meta name="keywords" content={assignment?.meta_keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://torontocondomania.ca/" />
        <meta property="og:title" content={assignment?.meta_title} />
        <meta property="og:description" content={assignment?.meta_description} />
        <meta property="og:image" content={global.apiURL + 'images/' + assignment?.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://torontocondomania.ca/" />
        <meta property="twitter:title" content={assignment?.meta_title} />
        <meta property="twitter:description" content={assignment?.meta_description} />
        <meta property="twitter:image" content={global.apiURL + 'images/' + assignment?.image} />
      </Head>
      <SingleProperty assignmentVal={assignment} property={assignment.property} assignment={true} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  var assignment = await fetchAssignment(id);

  return {
    props: {
      'assignment': assignment.data,
    },
  };
}

export default PropertyView;