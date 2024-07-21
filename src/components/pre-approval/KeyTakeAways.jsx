import Link from "next/link";
import React from "react";

const KeyTakeAways = () => {
  return (
    <>
      <section className="keytakeaway_section pt30 pb30">
        <div className="container ">
          <div className="keytakeaway_container">
            <div className="keytakeaway_header">
              <h2 style={{ textAlign: 'left' }}>WAYS TO SAVE TIME</h2>
            </div>
            <div className="keytakeaway_list">
              <div className="keytakeaway_ul">
                <ul>
                  <li className="my-4">
                  Thorough Document Review: Mistakes can happen when filling out paperwork. Take the time to triple-check all documents to ensure they are accurately completed.
                  </li>
                  <li className="my-4">
                  Mortgage Lender Review: Even with multiple reviews, you might miss something important. Consider having your mortgage lender or a professional review your documents to ensure everything is correctly filled out.
                  </li>
                  <li className="my-4">
                  Complete All Sections: Incomplete sections can cause unnecessary delays in your mortgage application.
                  </li>
                  <li className="my-4">
                  Organize Your Files: Mortgage applications typically require a multitude of documents. Stay organized by keeping all your paperwork in a designated folder.
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
