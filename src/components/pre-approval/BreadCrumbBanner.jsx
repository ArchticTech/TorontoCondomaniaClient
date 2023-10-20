// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'slick-carousel';

const BreadCrumbBanner = () => {
  // useEffect(() => {
  //   $('.slider').slick({
  //     dots: true,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //   });
  // }, []);
  return (
    <section className="pre_approval_section">
      {/* <div className="slider">
        <div><img src="/image1.jpg" alt="Slide 1" /></div>
        <div><img src="/image2.jpg" alt="Slide 2" /></div>
        <div><img src="/image3.jpg" alt="Slide 3" /></div>
      </div> */}
      <div className="container">
        {/* <div className="row">
          <div className="col-xl-6"> */}
        <div className="pre_approval_header_content">
          <h1 className="pre_approval_header">
            Pre-Approval <br/>Your Path to Homeownership
          </h1>
          <button className="btn btn-thm btn_mortgage mt-2">
            Try Calculator
          </button>
        </div>
      </div>
      {/* End .col */}
      {/* </div>
      </div> */}
    </section>
  );
};

export default BreadCrumbBanner;
