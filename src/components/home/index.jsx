import MobileMenu from "../common/header/MobileMenu";
import WhyChoose from "../common/WhyChoose";
import PropertiesSlider from "./PropertiesSlider";
import FindProperties from "./FindProperties";
import Header from "./Header";
import RecentlyAddedProperties from "./RecentlyAddedProperties";
import FeaturedAssignments from "./FeaturedAssignments";
import Partners from "../common/Partners";
import CallToAction from "../common/CallToAction";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Blogs from "../common/Blogs";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";
import Link from "next/link";
import RentalSlider from "./RentalSlider";
import { useEffect } from "react";
import ClearAllFilters from "../common/listing/ClearAllFilters";
import { useDispatch } from "react-redux";

const index = ({ properties, assignments, rentals, cities }) => {

  // const dispatch = useDispatch;
  
  // useEffect(() => {
  //   ClearAllFilters(dispatch);
  // }, []);
  const dispatch = useDispatch();

  const clearHandler = () => {
    ClearAllFilters(dispatch);
  };

  useEffect(() => {
    // Call the clearHandler function when the home route is rendered
    clearHandler();
  }, []);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title mb40">
                <h2>Find Properties in these cities</h2>
                <p>
                  Handpicked properties by our team.
                  <Link className="float-end" href="/properties">
                    {/* <a  > */}
                    View All <span className="flaticon-next"></span>
                    {/* </a> */}
                  </Link>
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          <div className="row">
            <FindProperties cities={cities} />
          </div>
        </div>
      </section>

      {/* <!-- Feature Properties --> */}
      {(() => {
        if (properties.length >= 3) {
          return (
            <section
              id="feature-property"
              className="property-city pb30 bg-ptrn1"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="main-title text-center mb40">
                      <h2>Featured Properties</h2>
                      <p>Handpicked properties by our team.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_property_slider gutter-x15">
                      <PropertiesSlider properties={properties} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })()}

      {/* <!-- Why Chose Us --> */}
      <section id="why-chose" className="whychose_us bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose style="style2" />
          </div>
        </div>
      </section>

      {/* <!-- Recently Added Rentals --> */}
      {(() => {
        if (rentals.length >= 3) {
          return (
            <section
              id="feature-property"
              className="property-city pb30 bg-ptrn1"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="main-title text-center mb40">
                      <h2>New Rentals Recently added</h2>
                      <p>Rentals added recently.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_property_slider gutter-x15">
                      <RentalSlider rentals={rentals} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })()}

      {/* <!-- Featured Assignments --> */}
      {(() => {
        if (assignments.length >= 3) {
          return (
            <section
              id="feature-assignment"
              className="property-city pb30 bg-ptrn1"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="main-title text-center mb40">
                      <h2>Featured Assignments</h2>
                      <p>Handpicked properties by our team.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="feature_property_slider gutter-x15">
                      <PropertiesSlider properties={assignments} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })()}

      {/* <!-- Our Blog --> */}
      <section className="our-blog bg-ptrn2 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>

      {/* <!-- Our Partners --> */}
      <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
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
      <section className="footer_one home5">
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
