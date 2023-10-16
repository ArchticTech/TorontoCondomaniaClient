import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../components/home";
import { fetchAllProperties ,fetchAllAssignments, fetchCityCount, fetchAllRentals } from '../utils/api';
import mainCities from '../data/cityPropertiesCount'
import { useEffect } from "react";
import { useState } from "react";

const Index = ({properties, assignments, citiesCount, rentals }) => {

  return (
    <>
      <Seo pageTitle="TorontoCondomania | Find Your Dream Condo" />
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

//primary #c03030
//secondary #19232f
//gray #282828

export default dynamic(() => Promise.resolve(Index), { ssr: false });
