import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 p-5">
          <div className="row" style={{ height: "600px" }}>
            <div className="image col-lg-12" style={{ height: "600px" }}>
              <img
                // width={602}
                height={396}
                src="../../assets/images/mortgage.png"
                alt=""
                className="m-4"
              />
            </div>
          </div>
        </div>
        <div className="main_card col-lg-6 p-5">
          <div className="heading_main">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="text">
            <h4 className="sub_heading">Who Grants Mortgage Approval?</h4>
            <p className="mb-4">
              While you primarily interact with a mortgage lender, such as a
              bank, the ultimate decision on your mortgage approval lies in the
              hands of underwriters.
            </p>
          </div>
          <div className="text">
            <h4 className="sub_heading">What's the Average Time for Home Closing? </h4>
            <p className="mb-4">
            The typical timeframe for closing on a house ranges from 30 to 45 days, contingent on variables like the speed of the home inspection and whether you have pre-approval for your mortgage.
            </p>
          </div>
          <div className="text">
            <h4 className="sub_heading">How Much Should I Expect in Closing Costs for Home Purchase? </h4>
            <p className="mb-4">
            Closing costs encompass various expenses, including appraisal fees and legal fees for contract drafting. These costs can constitute as much as 2% to 5% of the home's purchase price and are typically payable at the time of closing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
