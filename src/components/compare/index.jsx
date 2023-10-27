import { useEffect, useState } from "react";
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import ComparePricing from "./ComparePricing";
import { useRouter } from "next/router";
import DropdownListing from "./drop-down";
import { useDispatch } from "react-redux";
import { addKeyword } from "../../features/properties/propertiesSlice";

const Index = ({ properties }) => {
  const router = useRouter();

  const [compareID, setCompareID] = useState([]);
  const [compareProperty, setCompareProperty] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [inputVal, setInputVal] = useState("");

  const dispatch = useDispatch();

  const compareRouter = router.query.compare;

  useEffect(() => {
    try {
      const filteredProperties = properties.filter((property) =>
        compareID.includes(property.id)
      );
      setCompareProperty(filteredProperties);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [compareID]);

  useEffect(() => {
    try {
      const comparePropertyID = compareRouter
        ? Array.isArray(compareRouter)
          ? compareRouter.map(Number)
          : [Number(compareRouter)]
        : [];
      setCompareID(comparePropertyID);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [compareRouter]);

  const removeProperty = (id) => {
    // Remove the id from the compareID array
    const updatedCompareID = compareID.filter((item) => item !== id);

    // Create a new object for the query parameters
    const updatedQuery = { ...router.query };

    // Remove the 'id' from the query parameters
    delete updatedQuery.id;

    // Update the 'compare' query parameter with the updated array
    updatedQuery.compare = updatedCompareID;

    // Update the URL with the new query parameters
    router.push({ pathname: "/compare", query: updatedQuery }, undefined, {
      shallow: true,
    });

    setShowSearchBox(true);
  };

  const addProperty = (id) => {
    if (!compareID.includes(id)) {
      const currentQuery = { ...router.query };

      // Check if 'compare' is already an array, or convert it to an array
      currentQuery.compare = Array.isArray(currentQuery.compare)
        ? currentQuery.compare
        : [currentQuery.compare].filter(Boolean); // Filter out any falsy values

      // Check if the 'id' already exists in the 'compare' array
      const index = currentQuery.compare.indexOf(id);
      if (index !== -1) {
        // If the 'id' already exists, replace it
        currentQuery.compare[index] = id;
      } else {
        // If the array already has 3 values, replace the oldest one
        if (currentQuery.compare.length >= 3) {
          currentQuery.compare.shift(); // Remove the oldest value
        }

        // Add the new 'compare' value to the array
        currentQuery.compare.push(id);
      }

      // Update the URL with the new query parameters
      router.push({ pathname: "/compare", query: currentQuery }, undefined, {
        shallow: true,
      });

      if (currentQuery.compare.length === 3) {
        dispatch(addKeyword(""));
        setShowSearchBox(false);
      }
      if (currentQuery.compare.length === 2) {
        // setInputVal == '';
        dispatch(addKeyword(""));
      }
      if (currentQuery.compare.length === 1) {
        // setInputVal == '';
        dispatch(addKeyword(""));
      }
      setInputVal("");
    }
  };
  // console.log(compareProperty);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- Our Pricing Table --> */}
      <section className="our-pricing bgc-fa">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Compare Listings</h2>
                <p>We provide full service at every step</p>
              </div>
            </div>
          </div>

          {/* search box for second property  */}

          <div className="row mb-3">
            {showSearchBox && (
              <div className="col-lg-12">
                <div className="compareInput">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search property to compare"
                    value={inputVal}
                    onChange={(e) => {
                      dispatch(addKeyword(e.target.value));
                      setInputVal(e.target.value);
                    }}
                  />
                </div>
                <DropdownListing
                  properties={properties}
                  addProperty={(id) => addProperty(id)}
                  // selectedProperty={selectedProperty3}
                  // removeProperty={removeProperty3}
                  // key={resetDropdownKey}
                />
              </div>
            )}
            {/* <div className="col-lg-3">
              <button className="btn btn-thm">Reset</button>
            </div> */}
          </div>

          <div className="row">
            <div className="col-lg-12 main_container_compare">
              <div className="membership_container">
              <ul className="mc_parent_list">
                <li className="list-inline-item">
                  {compareRouter && 
                  <ul className="mc_child_list one">
                    <li>
                      <div className="membership_header dn"></div>
                    </li>
                    <li>City</li>
                    <li>Beds</li>
                    <li>Rooms</li>
                    <li>Vip/Featured</li>
                    <li>Year of build</li>
                    <li>Status</li>
                  </ul>
}
                </li>
                <ComparePricing
                  compareProperty={compareProperty}
                  removeProperty={(id) => removeProperty(id)}
                />
              </ul>
              {/* End .mc_parent_list */}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Index;
