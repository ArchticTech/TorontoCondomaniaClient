import MobileMenu from "../common/header/MobileMenu";
import WhyChoose from "../common/WhyChoose";
import PropertiesSlider from "../home/PropertiesSlider";
import FindProperties from "./FindProperties";
// import Header from "../home-6/Header";
import Header from "./Header";
import RecentlyAddedProperties from "./RecentlyAddedProperties";
import FeaturedAssignments from "./FeaturedAssignments";
import Partners from "../common/Partners";
import CallToAction from "../common/CallToAction";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Blogs from "../common/Blogs";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "../home-6/Hero";

const index = ({ properties }) => {
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
                  <a className="float-end" href="#">
                    View All <span className="flaticon-next"></span>
                  </a>
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          <div className="row">
            <FindProperties />
          </div>
        </div>
      </section>

      {/* <!-- Feature Properties --> */}
      {(() => {
        if (properties.length >= 3) {
          return <section id="feature-property" className="property-city pb30 bg-ptrn1">
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
        </section>;
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

       {/* <!-- Recently added Properties --> */}
       <section id="feature-property" className="property-city pb30 bb1">
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
                <RecentlyAddedProperties />
              </div>
            </div>
          </div>
        </div>
      </section>
       
       {/* <!-- Featured Assignments --> */}
       <section id="feature-property" className="property-city pb30 bb1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Featured Assignments</h2>
                <p>Featured Assignments.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedAssignments />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Testimonials --> */}
      {/* <section id="our-testimonials" className="our-testimonial home5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="color-white">Testimonials</h2>
                <p className="color-white">Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
