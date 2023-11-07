import React from "react";

const HomeLoan = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="row">
            <div className="image col-lg-12">
              <img
                src="../../assets/images/home/home-loan.jpg"
                alt=""
                className="m-4"
              />
            </div>
          </div>
        </div>
        <div className="main_card col-lg-6">
          <div className="cards">
            <div className="head mb-4 mb-md-5">
              <h6 className="heading">
                Explore your home{" "}
                <span style={{ fontWeight: "600" }}>loan options</span>
              </h6>
            </div>
            <p className="mb-4 mb-md-5">
              Unlock the door to your dream home by exploring a world of mortgage options. Your journey to homeownership begins with the right choice. Whether you&apos;re a first-time buyer or a seasoned homeowner seeking to refinance, delving into various home loan options is the key. From lower interest rates to flexible terms, you can tailor a mortgage to fit your unique financial situation. Don&apos;t settle for a one-size-fits-all approach; find the mortgage that opens the doors to your dream home and turns it into a reality.
            </p>
            <button className="btn btn-thm">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoan;
