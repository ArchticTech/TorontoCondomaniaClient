import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../components/home-5";
import { fetchAllAssignments, fetchAllProperties } from '../utils/api';

const index = ({ properties, assignments }) => {
  return (
    <>
      <Seo pageTitle="TorontoCondomania | Find Your Dream Condo" />
      <HomeMain properties={properties} assignments={assignments}/>
    </>
  );
};

export async function getStaticProps() {
  const properties = await fetchAllProperties();
  const assignments = await fetchAllAssignments();

  return {
    props: {
      'properties': properties.data,
      'assignments': assignments.data,
    },
    revalidate: 120,
  };
}

export default dynamic(() => Promise.resolve(index), { ssr: false });
