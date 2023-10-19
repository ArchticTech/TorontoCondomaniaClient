import React from "react";

const BreadCrumbBanner = () => {
  return (
    <section className="customer_support_section">
      <div className="container">
        <div className="customer_support_header_content">
          <h1 className="customer_support_header">How can we help?</h1>
          <div className="header_input">
            {/* <i className="fa fa-magnifying-glass"></i> */}
            <input
              placeholder="What can we help you with"
              className="form-control customer_support_btn mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
