import { useSelector } from "react-redux";
import ListingCard from "./ListingCard";

const DropdownListing = ({ properties }) => {
  const { keyword } = useSelector((state) => state.properties);

  const keywordHandler = (item) => {
    if (keyword.length != "") {
      return item.name.toLowerCase().includes(keyword?.toLowerCase());
    }
    return false;
  };

  const propertyList = properties
    ?.slice(0, 5)
    ?.filter(keywordHandler)
    ?.map((property) => {
      return (
        <>
          <ListingCard property={property} />
        </>
      );
    });

  return propertyList;
};

export default DropdownListing;
