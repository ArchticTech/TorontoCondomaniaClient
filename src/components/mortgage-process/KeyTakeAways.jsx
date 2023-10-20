import Link from "next/link";
import React from "react";

const KeyTakeAways = () => {
  return (
    <>
      <section className="keytakeaway_section pt30 pb30">
        <div className="container ">
          <div className="keytakeaway_container">
            <div className="keytakeaway_header">
              <h2>Key Takeaways</h2>
            </div>
            <div className="keytakeaway_list">
              <div className="keytakeaway_ul">
                <ul>
                  <li className="my-4">
                    The mortgage process is complicated but can be broken into a
                    number of steps: pre-approval, house shopping, mortgage
                    application, loan processing, underwriting, and closing.
                  </li>
                  <li className="my-4">
                    {" "}
                    It’s a good idea to get pre-approval for a mortgage before
                    you start looking for a property, so you know what you can
                    afford.
                  </li>
                  <li className="my-4">
                    {" "}
                    Once you’ve found a property and put in an offer, expect the
                    mortgage closing process to take up to 45 days to complete.
                  </li>
                  <li className="my-4">
                    Check all of your paperwork carefully. You will be paying
                    for your mortgage for a long time, so the small print can
                    end up costing you a lot of money.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyTakeAways;
