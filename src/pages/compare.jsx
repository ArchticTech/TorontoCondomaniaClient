import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Compare from "../components/compare";
import { useRouter } from "next/router";

const index = () => {
    
  const router = useRouter();

  const { property1 } = router.query;
  return (
    <>
      <Seo pageTitle="Compare" />
      <Compare property1={property1} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });