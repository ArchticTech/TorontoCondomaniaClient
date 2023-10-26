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

const index = ({ properties, property1 }) => {
  const [selectedProperty1, setSelectedProperty1] = useState(null);
  const [selectedProperty2, setSelectedProperty2] = useState("");
  const [selectedProperty3, setSelectedProperty3] = useState("");
  const [showSearchBox2, setShowSearchBox2] = useState(true);
  const [showSearchBox3, setShowSearchBox3] = useState(false);
  // const [resetDropdownKey, setResetDropdownKey] = useState(0);

  const dispatch = useDispatch();
  const router = useRouter();

  const removeProperty2 = () => {
    setSelectedProperty2("");
    setShowSearchBox2(true);
  };
 
  const removeProperty3 = () => {
    setSelectedProperty3("");
    setShowSearchBox3(true);
  };

  console.log(selectedProperty1, selectedProperty2, selectedProperty3);
  const propertyIdFromQuery = router.query.property1;

  useEffect(() => {
    try {
      if (propertyIdFromQuery) {
        const foundProperty = properties.find(
          (property) => property.id == propertyIdFromQuery
        );

        if (foundProperty) {
          setSelectedProperty1(foundProperty);
        } else {
          console.error("Property not found in properties array.");
        }
      } else {
        console.error("No property ID found in router.query.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [propertyIdFromQuery, properties]);

  const handleSelectProperty2 = (property) => {
    setSelectedProperty2(property);
    setShowSearchBox2(false);
    setShowSearchBox3(true);
    // setResetDropdownKey((prevKey) => prevKey + 1);
  };

  const handleSelectProperty3 = (property) => {
    setSelectedProperty3(property);
    setShowSearchBox3(false);
    // setResetDropdownKey((prevKey) => prevKey + 1);
  };

  // console.log(selectedProperty1, selectedProperty2, selectedProperty3);

  // useEffect(() => {
  //   return () => {
  //     setSelectedProperty1(null);
  //     setSelectedProperty2("");
  //     setSelectedProperty3("");
  //     setShowSearchBox2(true);
  //     setShowSearchBox3(false);
  //   };
  // }, []);

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
          {showSearchBox2 && !showSearchBox3 && (
            <div className="row mb-3">
              <form className="contact_form" action="#">
                <div className="col-lg-6 offset-lg-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search property to compare"
                      onChange={(e) => dispatch(addKeyword(e.target.value))}
                    />
                    <DropdownListing
                      properties={properties}
                      onSelect={handleSelectProperty2}
                      selectedProperty={selectedProperty2}
                      removeProperty={removeProperty2}
                      // key={resetDropdownKey}
                    />
                  </div>
                </div>
              </form>
            </div>
          )}

          <div className="row mb-3">
            {showSearchBox3 && (
              <div className="col-lg-6 offset-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search property to compare"
                    onChange={(e) => dispatch(addKeyword(e.target.value))}
                  />
                  <DropdownListing
                    properties={properties}
                    onSelect={handleSelectProperty3}
                    selectedProperty={selectedProperty3}
                    removeProperty={removeProperty3}
                    // key={resetDropdownKey}
                  />
                </div>
              </div>
            )}
            {/* <div className="col-lg-3">
              <button className="btn btn-thm">Reset</button>
            </div> */}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="membership_container">
                <ul className="mc_parent_list">
                  <li className="list-inline-item">
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
                  </li>
                  <ComparePricing
                    selectedProperty1={selectedProperty1}
                    selectedProperty2={selectedProperty2}
                    selectedProperty3={selectedProperty3}
                    removeProperty2={removeProperty2}
                    removeProperty3={removeProperty3}
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

export default index;
