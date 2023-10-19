import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../home/Header";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Parargraph from "./Parargraph";
import KeyTakeAways from "./KeyTakeAways";
import PreApproval from "./PreApproval";
import QualifyingforMortgage from "./QualifyingforMortgage";

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

      <PreApproval />

      <KeyTakeAways />

<QualifyingforMortgage/>
      {/* <section id="faq_mortgage_process" className="faq_mortgage_process">
        <div className="container">
          <FAQ />
        </div>
      </section> */}

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
