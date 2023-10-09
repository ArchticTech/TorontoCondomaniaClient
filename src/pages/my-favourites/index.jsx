import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyFavourites from "../../components/dashboard/my-favourites";
import { fetchAllFavProperties } from "../../utils/api";


const index = ({favProperties}) => {
  console.log(favProperties)
  return (
    <>
      <Seo pageTitle="My Favourites" />
      <MyFavourites favProperties={favProperties} />
    </>
  );
};

export async function getStaticProps() {
  const favorites = await fetchAllFavProperties();
  
  return {
    props: {
      'favProperties': favorites.data,
    },
    revalidate: 240,
  };
}

export default dynamic(() => Promise.resolve(index), { ssr: false });