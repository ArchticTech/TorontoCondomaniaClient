import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home1 from "../components/home";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-1" />
      <Home1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
