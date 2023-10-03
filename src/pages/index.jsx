import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../components/home";
import { fetchAllProperties ,fetchAllAssignments, fetchCityCount } from '../utils/api';
import mainCities from '../data/cityPropertiesCount'

const index = ({ properties , assignments, citiesCount }) => {
  return (
    <>
      <Seo pageTitle="TorontoCondomania | Find Your Dream Condo" />
      <HomeMain properties={properties} assignments={assignments} cities={citiesCount}/>
    </>
  );
};

export async function getStaticProps() {
  const properties = await fetchAllProperties();
  const assignments = await fetchAllAssignments();
  const cityPromises = mainCities.map(async (city) => {
    city.count = await fetchCityCount(city.name);
    return city;
  });
  return {
    props: {
      'properties': properties.data,
      'assignments': assignments.data,
      'citiesCount': await Promise.all(cityPromises)
    },
  };
}

//primary #c03030
//secondary #19232f
//gray #282828

export default dynamic(() => Promise.resolve(index), { ssr: false });
