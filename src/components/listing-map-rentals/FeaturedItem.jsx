import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../features/properties/propertiesSlice";
import global from "../../config/env";

const FeaturedItem = ({ rentals }) => {
  const {
    keyword,
    type,
    location,
    price,
    amenities,
    bathrooms,
    bedrooms,
    availabilityDate,
    laundry,
    petPolicy,
    smokingPolicy,
    basement,
    parking,
  } = useSelector((state) => state.rentals);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );
  const [activeMarker, setActiveMarker] = useState(null);

  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) => 
    item.name.toLowerCase().includes(keyword?.toLowerCase()) ||
    item.address.toLowerCase().includes(keyword?.toLowerCase());

  // type handler
  const typeHandler = (item) => {
    if (type == "") return true;
    else return item.type.toLowerCase() == type.toLowerCase();
  };

  // location handler
  const locationHandler = (item) => {
    return item.address.toLowerCase().includes(location.toLowerCase());
  };
  
  // city handler
  const cityHandler = (item) => {
    return item.city.toLowerCase().includes(city.toLowerCase());
  };


  // area handler
  // const areaHandler = (item) => {
  //   if (area.min !== 0 && area.max !== 0) {
  //     if (area.min !== "" && area.max !== "") {
  //       return (
  //         parseInt(item.areaMin) <= area.max &&
  //         parseInt(item.areaMax) >= area.min
  //       );
  //     }
  //   }
  //   return true;
  // };

  const availabilityDateHandler = (item) => {
    if (item.availability_date == "") return true;
    else return item.availability_date.toLowerCase() == availabilityDate.toLowerCase();
  };

  // price handler
  const priceHandler = (item) => {
    if ((price == 0 ) ) return true;
    else return item.monthly_rent.toLowerCase() == price.toLowerCase();
  };

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms > 0) {
      return item.baths == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms >0) {
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
  let content = rentals
    ?.slice(0, 8)
    ?.filter(keywordHandler)
    .map((item) => {
      const monthlyRent = item?.monthly_rent;
      // const priceTo = item?.price_to;

      const formattedMonthlyRent = monthlyRent.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      // const formattedPriceTo = priceTo.toLocaleString("en-US", {
      //   style: "currency",
      //   currency: "USD",
      //   minimumFractionDigits: 0,
      //   maximumFractionDigits: 0,
      // });

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
                {/* <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li> */}
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.type}
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
                  href={`/${item.slug}`}
                  className="fp_price"
                >
                  {formattedMonthlyRent} / <small>mo</small>
                </Link>
              </div>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">{item.type}</p>
                <h4>
                  <Link href={`/rental/${item.slug}`}>
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
                {/* <ul className="fp_meta float-start mb0">
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
                    <Link href="/">{item.agent.name}</Link>
                  </li>
                </ul> */}
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