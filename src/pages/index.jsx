import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../components/home-5";
import { fetchAllProperties } from '../utils/api';

const index = ({ properties }) => {
  return (
    <>
      <Seo pageTitle="TorontoCondomania | Find Your Dream Condo" />
      <HomeMain properties={properties}/>
    </>
  );
};

export async function getStaticProps() {
  const properties = await fetchAllProperties();

  return {
    props: {
      properties,
    },
    revalidate: 120,
  };
}

export default dynamic(() => Promise.resolve(index), { ssr: false });
