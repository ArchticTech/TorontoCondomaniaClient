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

const index = ({ properties, comparePropertyID }) => {
  const [compareID, setCompareID] = useState(comparePropertyID);
  const [compareProperty, setCompareProperty] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();

  const removeProperty = (id) => {
    const removeProperty = compareID.filter(item => item !== id);
    setCompareID(removeProperty)
    setShowSearchBox(true);
  };
  
  const addProperty = (id) => {
    if(compareID.length >= 3){
    const addProperty = compareID.concat(id)
    setCompareID(addProperty); 
    }
    // setShowSearchBox2(true);
  }; 

  const filteredProperties = properties.filter(property => compareID.includes(property.id));

  useEffect(() => {
    try {
      setCompareProperty(filteredProperties);
      
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [compareID]);

  console.log(compareProperty);


  // const handleSelectProperty2 = (property) => {
  //   setSelectedProperty2(property);
  //   setShowSearchBox2(false);
  //   setShowSearchBox3(true);
  //   // setResetDropdownKey((prevKey) => prevKey + 1);
  // };

  const handleSelectProperty = (property) => {
    // setSelectedProperty3(property);
    // addProperty(property);
    // setShowSearchBox3(false);
    // setResetDropdownKey((prevKey) => prevKey + 1);
  };

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
                    addProperty={(id) => addProperty(id)}
                    // selectedProperty={selectedProperty3}
                    // removeProperty={removeProperty3}
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
                    compareProperty={compareProperty}
                    removeProperty={(id) => removeProperty(id)}
                    // selectedProperty3={selectedProperty3}
                    // removeProperty2={removeProperty2}
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
