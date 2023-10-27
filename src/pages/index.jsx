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
        <title>Explore New Developments All Across IN GTA | HOME – Torontocondomania</title>
        <meta name="title" content="Explore New Developments All Across IN GTA | HOME – Torontocondomania" />
        <meta name="description" content="Explore The Latest Preconstruction Projects In The GTA · New Development Projects In The Greater Toronto Area. Search By Project Name, Neighborhood, Occupancy etc" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://torontocondomania.ca/" />
        <meta property="og:title" content="Explore New Developments All Across IN GTA | HOME – Torontocondomania" />
        <meta property="og:description" content="Explore The Latest Preconstruction Projects In The GTA · New Development Projects In The Greater Toronto Area. Search By Project Name, Neighborhood, Occupancy etc" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://torontocondomania.ca/" />
        <meta property="twitter:title" content="Explore New Developments All Across IN GTA | HOME – Torontocondomania" />
        <meta property="twitter:description" content="Explore The Latest Preconstruction Projects In The GTA · New Development Projects In The Greater Toronto Area. Search By Project Name, Neighborhood, Occupancy etc" />s
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
