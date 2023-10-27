import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Compare from "../components/compare";
import { useRouter } from "next/router";
import { fetchAllProperties} from '../utils/api';
import { useState, useEffect } from "react";

const index = ({properties}) => {
       
  return (
    <>
      <Seo pageTitle="Compare" />
      <Compare properties={properties} />
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