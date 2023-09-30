import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../features/properties/propertiesSlice";
import global from "../../config/env";

const FeaturedItem = ({ properties }) => {
  const {
    keyword,
    type,
    location,
    status,
    price,
    bathrooms,
    bedrooms,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );
  const [activeMarker, setActiveMarker] = useState(null);

  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) =>
    item.name.toLowerCase().includes(keyword?.toLowerCase()) ||
    item.address.toLowerCase().includes(keyword?.toLowerCase()) ||
    item.code.toLowerCase().includes(keyword?.toLowerCase());

  // type handler
  const typeHandler = (item) => {
    if (type == "") return true;
    else return item.type.toLowerCase() == type.toLowerCase();
  };

  // location handler
  const locationHandler = (item) => {
    return item.address.toLowerCase().includes(location.toLowerCase());
  };

  // status handler
  // const statusHandler = (item) =>
  //   item.type.toLowerCase().includes(status.toLowerCase());
  // status handler
  const statusHandler = (item) => {
    if (status == "") return true;
    else return item.status.toLowerCase() == status.toLowerCase();
  };

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.areaMin) <= area.max &&
          parseInt(item.areaMax) >= area.min
        );
      }
    }
    // console.log(item.areaMin);
    return true;
  };

  // built years handler
  // const builtYearsHandler = (item) =>
  //   yearBuilt !== "" ? item?.built == yearBuilt : true;
  // const incomingObjectArray = item;
  // const [{ est_occupancy_year }] = incomingObjectArray;
  // built years handler
  const builtYearsHandler = (item) => {
    if (yearBuilt == "") return true;
    else return item.yearBuilt.toLowerCase() == yearBuilt.toLowerCase();
  };

  // price handler
  const priceHandler = (item) => {
    if ((price?.min < 0) || (price?.max < 0)) return true;
    else return item.price_from <= price?.max && item.price_to >= price?.min;
  };

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.baths == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.beds == bedrooms;
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.some((searchedFeature) =>
        item.features.find((feature) => feature.toLowerCase().includes(searchedFeature.toLowerCase())));
    }
    // return true;
    // if (amenities.length !== 0) {
    //   return amenities.find((item2) => {
        // if (typeof item2 === "string" && typeof item.amenities === "string") {
          // console.log(item2);
          // return item2.toLowerCase().includes(item.features.toLowerCase());
        // }
        // return false;
      // });
    // }
// console.log(typeof(amenities));
     return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item.featured === featured;
    }
    return true;
  };

  useEffect(() => {

    const markers = document.querySelectorAll('.mapboxgl-marker');
    markers.forEach(marker => {
      marker.classList.remove('marker-active');
    });

    if (activeMarker) {
      const markerElement = activeMarker.getElement();
      markerElement.classList.add('marker-active');
    }
  }, [activeMarker])

  // status handler
  let content = properties
    ?.slice(0, 8)
    ?.filter(keywordHandler)
    ?.filter(typeHandler)
    ?.filter(locationHandler)
    ?.filter(statusHandler)
    ?.filter(areaHandler)
    ?.filter(builtYearsHandler)
    ?.filter(priceHandler)
    ?.filter(bathroomHandler)
    ?.filter(bedroomHandler)
    ?.filter(advanceHandler)
    .map((item) => {
      const priceFrom = item?.price_from;
      const priceTo = item?.price_to;

      const formattedPriceFrom = priceFrom.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      const formattedPriceTo = priceTo.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      return (
      <div
        className={`${
          isGridOrList ? "col-12 list_map feature-list" : "col-md-6 col-lg-6"
        } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
          onMouseEnter={() => setActiveMarker(item.marker)}
          onMouseLeave={() => setActiveMarker(null)}
        >
          <div className="thumb">
            <img
              width={316}
              height={220}
              className="img-whp w-100 h-100 cover"
              src={global.apiURL + 'images/' + item.image}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.vip_feature_promotion}
                  </a>
                </li>
              </ul>
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

                <Link
                  href={`/property/${item.id}`}
                  className="fp_price"
                >
                  {formattedPriceFrom} - {formattedPriceTo}
                </Link>
              </div>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">{item.type}</p>
                <h4>
                  <Link href={`/property/${item.id}`}>
                    {item.name}
                  </Link>
                </h4>
                <p>
                  <span className="flaticon-placeholder"></span>
                  {item.address}
                </p>

                <ul className="prop_details mb0"></ul>
              </div>
              {/* End .tc_content */}

              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <Link href="/agent-v2">
                      <img
                        width={40}
                        height={40}
                        src={
                          global.apiURL + "profile-pictures/" + item.agent.image
                        }
                        alt="pposter1.png"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/agent-v2">{item.agent.name}</Link>
                  </li>
                </ul>
                <div className="fp_pdate float-end">{item.postedYear}</div>
              </div>
              {/* End .fp_footer */}
            </div>
          </div>
        </div>
      );
    });

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, content]);

  return <>{content}</>;
};

export default FeaturedItem;