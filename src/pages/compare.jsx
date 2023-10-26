import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Compare from "../components/compare";
import { useRouter } from "next/router";
import { fetchAllProperties} from '../utils/api';


const index = ({properties}) => {
    
  const router = useRouter();

  const compare = router.query.compare;

  // If "numbers" is not defined or is an empty array, set it to an empty array
  const comparePropertyID = compare ? (
    Array.isArray(compare) ? compare.map(Number) : [Number(compare)]
  ) : [];
  return (
    <>
      <Seo pageTitle="Compare" />
      <Compare properties={properties} comparePropertyID={comparePropertyID} />
    </>
  );
};

export async function getStaticProps() {
    const properties = await fetchAllProperties();
    return {
      props: {
        'properties': properties.data
      },
      revalidate: 240,
    };
  }

export default dynamic(() => Promise.resolve(index), { ssr: false });