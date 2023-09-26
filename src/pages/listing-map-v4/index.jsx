import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV4 from "../../components/listing-half-map/listing-map-v4";

const index = ({ properties }) => {
  return (
    <>
      <Seo pageTitle="Listing - Map V4" />
      <ListingMapV4 properties={properties}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
