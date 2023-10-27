

import { fetchAssignment } from "../../utils/api";
import SingleProperty from "../../components/single-property/index";
import Head from "next/head";
import Seo from "../../components/common/seo";
// import global from "../../config/env";

const PropertyView = ({assignment}) => {

  console.log('logging from main file ' + assignment.tentative_occ_date);

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Seo pageTitle="Latest Properties" />
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