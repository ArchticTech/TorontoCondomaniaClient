import dynamic from "next/dynamic";
import Head from "next/head";
import Seo from "../components/common/seo";
import HomeMain from "../components/home";
import { fetchAllProperties ,fetchAllAssignments, fetchCityCount, fetchAllRentals } from '../utils/api';
import mainCities from '../data/cityPropertiesCount'

const Index = ({properties, assignments, citiesCount, rentals }) => {

  return (
    <>
      <Head>
        <title>Explore New Pre-construction Condos in Toronto & GTA</title>
        <meta name="title" content="Explore New Pre-construction Condos in Toronto & GTA" />
        <meta name="description" content="Discover TorontoCondoMania - Your Ultimate GTA Pre-Construction, Rentals, and Builder Marketplace. Explore the Latest Condo and Townhome Communities in Toronto and Surrounding Neighborhoods. Access Exclusive Pricing and Floorplans Today." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://torontocondomania.ca/" />
        <meta property="og:title" content="Explore New Pre-construction Condos in Toronto & GTA" />
        <meta property="og:description" content="Discover TorontoCondoMania - Your Ultimate GTA Pre-Construction, Rentals, and Builder Marketplace. Explore the Latest Condo and Townhome Communities in Toronto and Surrounding Neighborhoods. Access Exclusive Pricing and Floorplans Today." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://torontocondomania.ca/" />
        <meta property="twitter:title" content="Explore New Pre-construction Condos in Toronto & GTA" />
        <meta property="twitter:description" content="Discover TorontoCondoMania - Your Ultimate GTA Pre-Construction, Rentals, and Builder Marketplace. Explore the Latest Condo and Townhome Communities in Toronto and Surrounding Neighborhoods. Access Exclusive Pricing and Floorplans Today." />
      </Head>
      <HomeMain properties={properties} assignments={assignments} rentals={rentals} cities={citiesCount}/>
    </>
  );
};

export async function getStaticProps() {
  
  const properties = await fetchAllProperties();
  const assignments = await fetchAllAssignments();
  const rentals = await fetchAllRentals();
  const cityPromises = mainCities.map(async (city) => {
    city.count = await fetchCityCount(city.name);
    return city;
  });
  return {
    props: {
      'properties': properties.data,
      'assignments': assignments.data,
      'rentals': rentals.data,
      'citiesCount': await Promise.all(cityPromises)
    },
    revalidate: 240,
  };
}

// primary #c03030
// secondary #19232f
// gray #282828

export default dynamic(() => Promise.resolve(Index), { ssr: false });
