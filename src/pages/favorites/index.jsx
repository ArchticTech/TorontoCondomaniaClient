import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyFavourites from "../../components/dashboard/my-favourites";
import { fetchAllFavProperties } from "../../utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const Favorites = () => {

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await fetchAllFavProperties();
        if(response.error == 'Unauthenticated')
        {
            router.push('/');
        }
        else {
          setFavorites(response.data);
          setLoading(false); 
        }
      } catch (error) {
        // router.push('/');
      }
    };

    getFavorites();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <>
      <Seo pageTitle="My Favourites" />
      <MyFavourites favProperties={favorites} />
    </>
  );
};

export default dynamic(() => Promise.resolve(Favorites), { ssr: false });