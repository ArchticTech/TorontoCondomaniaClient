import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../home/Header";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
// import Testimonial from "../home-7/Testimonials";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Team from "./Team";
import OurMission from "./OurMission";
import Parargraph from "./Parargraph";
import KeyTakeAways from "./KeyTakeAways";
import PreApproval from "./PreApproval";
import OurServices from "./OurServices";
import HowitWorks from "./HowitWorks";
import OwnersMessage from "./OwnersMessage";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";

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

      <Parargraph />

      <KeyTakeAways />

      <PreApproval />

      <section id="faq_mortgage_process" className="faq_mortgage_process">
        <div className="container">
          <FAQ />
        </div>
      </section>

      {/* <HowitWorks/>

      <OwnersMessage/> */}

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
