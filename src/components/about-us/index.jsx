import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "./Header";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
// import Testimonial from "../home-7/Testimonials";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Team from "./Team";
import OurMission from "./OurMission";
import Stats from "./Stats";
import OurVisionMission from "./OurVisionMission";
import OurMission2 from "./OurMission2";
import OurServices from "./OurServices";
import HowitWorks from "./HowitWorks";
import OwnersMessage from "./OwnersMessage";
import Testimonial from "./Testimonial";

const index = () => {
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

      <Stats />

      <OurVisionMission/>

      <OurMission2/>

      <OurServices/>

      <HowitWorks/>

      <OwnersMessage/>

       {/* <!-- Our Testimonials --> */}
      <section className="our-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb20">
                <h2>Testimonials</h2>
                <p>Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider style2 gutter-x15">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Text Content --> */}
      {/* <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0">We bring it all together</h2>
              </div>
            </div>
          </div> */}

          {/* <div className="row">
            <OurMission />
          </div> */}
          {/* End .row */}

          {/* <div className="row mt80">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div> */}

          {/* <div className="row">
            <WhyChoose />
          </div> */}
        {/* </div>
      </section> */}

      {/* <!-- Our Team --> */}
      {/* <section className="our-team bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Team</h2>
                <p>We bring it all together.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team_slider gutter-x15">
                <Team />
              </div>
            </div>
          </div>
        </div>
      </section> */}

     

      {/* <!-- Our Partners --> */}
      {/* <section id="our-partners" className="our-partners">
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
      </section> */}

      {/* <!-- Start Call to Action --> */}
      {/* <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
        </div>
      </section> */}

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
