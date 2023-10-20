import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyFavourites from "../../components/dashboard/my-favourites";
import { fetchAllFavoriteProperties } from "../../utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "./layout";

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await fetchAllFavoriteProperties();
        if(response.error == 'Unauthenticated')
        {
            console.error('You are Unauthenticated');
            router.push('/');
        }
        else {
          setFavorites(response.data);
        }
      } catch (error) {
        router.push('/');
      }
    };

    getFavorites();
  }, []);

  return (
    <>
      <Seo pageTitle="My Favourites" />
      <DashboardLayout>
        <MyFavourites favProperties={favorites} />
      </DashboardLayout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Favorites), { ssr: false });