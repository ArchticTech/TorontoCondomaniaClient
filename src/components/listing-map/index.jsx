import Pagination from "../common/blog/Pagination";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import FilterTopBar2 from "../common/listing/FilterTopBar2";
import GridListButton from "../common/listing/GridListButton";
import ShowFilter from "../common/listing/ShowFilter";
import SidebarListing2 from "../common/listing/SidebarListing2";
import PopupSignInUp from "../common/PopupSignInUp";
import FeaturedItem from "./FeaturedItem";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import global from "../../config/env";
import { useDispatch, useSelector } from "react-redux";

mapboxgl.accessToken = global.mapboxAccessToken; 

const ListingMap = ({ properties, isAssignment }) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-80.042869, 43.718371],
      zoom: 7,
    });

    properties?.map((property) => {
      property.marker = setMarkerOnMap(
        map,
        property.latitude,
        property.longitude
      );
      property.marker.getElement().setAttribute('data-marker-id', property.slug);
    });

    // Clean up the map instance when the component unmounts
    return () => map.remove();
  }, []);

  const setMarkerOnMap = (map, latitude, longitude) => {
    const marker = new mapboxgl.Marker({
      color: "#ff3636", // Marker color
      draggable: false, // Allow the user to drag the marker
    })
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup())
      .addTo(map);
    return marker;
  };

  return (
    <div className="scroll-disabled">
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section
        id="feature-property"
        className="our-listing our-listing_map2 bgc-f7 pt0 pb0  mt85 md-mt0"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sidebar_switch mobile_style dn db-991 mt30 mb0">
                <ShowFilter />
              </div>

              {/* sidebar switch */}
              {/* {assignments} */}
              <div
                className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Advanced Search</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End .offcanvas-heade */}

                <div className="offcanvas-body">
                  <SidebarListing2 />
                </div>
              </div>
              {/* End mobile sidebar listing  */}
            </div>
            {/* End .col */}

            <div className="col-xxl-7 col-xl-6  p0 position-relative">
              <div className="sidebar_switch style2 text-right dn-991 visible-filter filter-let-top">
                <ShowFilter />
              </div>
              {/* filter switch */}
              <div
                id="mapbox"
                className="home_two_map style2 half_map_area"
              ></div>
              ;
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-xl-6 ">
              <div className="half_map_area_content mt30">
                <div className="listing_list_style listing-map-style m0 mb20">
                  <GridListButton />
                </div>
                {/* GridListButton */}

                <div className="col-md-12">
                  <div className="grid_list_search_result ">
                    <div className="row align-items-center">
                      <FilterTopBar2 length={useSelector((state) => state.properties.length)} />
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row">
                    <FeaturedItem properties={properties} isAssignment={isAssignment} />
                  </div>
                  {/* End .row */}

                  <div className="row">
                    <div className="col-lg-12 mt20">
                      <div className="mbp_pagination">
                        <Pagination />
                      </div>
                    </div>
                    {/* End paginaion .col */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End  page conent */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingMap;