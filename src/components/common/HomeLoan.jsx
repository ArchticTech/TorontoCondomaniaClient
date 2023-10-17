import React from "react";

const HomeLoan = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="row" style={{ height: "600px" }}>
            <div className="image col-lg-12" style={{ height: "600px" }}>
              <img
                // width={602}
                height={396}
                src="../../assets/images/home/home-loan-2.png"
                alt=""
                className="m-4"
              />
            </div>
          </div>
        </div>
        <div className="main_card col-lg-6">
          <div className="cards">
            <div className="heading_main mb-5">
              <h2>
                Explore your home{" "}
                <span style={{ fontWeight: "900" }}>loan options</span>
              </h2>
            </div>
            <p className="mb-4">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
            </p>
            <button className="btn btn-thm">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoan;
