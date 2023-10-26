import { useSelector } from "react-redux";
import Link from "next/link";
import global from "../../config/env";
import { useState } from "react";

const DropdownListing = ({ properties, addProperty }) => {
  const { keyword } = useSelector((state) => state.properties);

  const keywordHandler = (item) => {
    if (keyword.length != "") {
      return item.name.toLowerCase().includes(keyword?.toLowerCase());
    }
    return false;
  };

  //   const handlePropertySelect = (property) => {
  //     onSelect(property);
  //   };

  const propertyList = properties
    ?.slice(0, 5)
    ?.filter(keywordHandler)
    ?.map((property) => {
      const priceFrom = property?.price_from;
      const priceTo = property?.price_to;

      const formattedPriceFrom = priceFrom?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      const formattedPriceTo = priceTo?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return (
        <div
          key={property?.id}
          onClick={() => addProperty(property.id)}
          className="d-inline-block"
        >
          <div className="feat_property dropdown list">
            <div className="thumb">
              <img
                width={200}
                height={130}
                className="img-whp"
                src={global.apiURL + "images/" + property?.image}
                alt={property?.name}
              />
              <div className="thmb_cntnt">
                <Link href={`/property/${property?.slug}`} className="fp_price">
                  {formattedPriceFrom} - {formattedPriceTo}
                </Link>
              </div>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">{property?.type}</p>
                <h4>
                  <Link href={`/property/${property?.slug}`}>
                    {property?.name}
                  </Link>
                </h4>
                <p>
                  <span className="flaticon-placeholder"></span>
                  {property?.address}
                </p>
              </div>
              {/* End .tc_content */}
            </div>
          </div>
          {/* <button
            className="btn btn-thm"
            onClick={() => handlePropertySelect(property)}
          >
            Select Property
          </button> */}
        </div>
      );
    });

  return propertyList;
};

export default DropdownListing;
