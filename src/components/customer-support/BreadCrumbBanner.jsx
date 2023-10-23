import React from "react";

const BreadCrumbBanner = () => {
  return (
    <section className="customer_support_section">
      <div className="container">
        <div className="customer_support_header_content">
          <h1 className="customer_support_header">How can we help?</h1>
          <div className="header_input">
            {/* <i className="fa fa-magnifying-glass"></i> */}
            {/* <input
            type="search"
              placeholder="What can we help you with"
              className="form-control customer_support_btn mt-2"
            /> */}

            <button className="btn btn-thm text-lg-center mt-2">What can we help you with</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
