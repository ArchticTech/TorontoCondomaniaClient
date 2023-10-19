import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../home/Header";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import Form from "../contact/Form";
import AddressSidebar from "../contact/AddressSidebar";
import Image from "next/image";

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

       {/* <!-- main text section --> */}
       <section className="text_row_section">
        <div className="container">
          <div className="row main_row_container">
            <div className="col-lg-6 gap-5 left_container">
            <LeftContainer />
            </div>
            <div className="col-lg-6 gap-5  left_container">
            <RightContainer />
            </div>
          </div>
        </div>
      </section>
       
       {/* <!-- Our Contact --> */}
       <section className="our-contact pt50 pb60 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h4 className="mb5">Send Us An Email</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida quis libero eleifend ornare. Maecenas mattis enim at
                  arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio,
                  malesuada eu libero sit amet, congue aliquam leo. In hac
                  habitasse platea dictumst.
                </p>
                <Form />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              <AddressSidebar />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

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
