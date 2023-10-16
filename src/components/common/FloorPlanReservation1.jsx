import React from "react";
import { useState } from "react";

const FloorPlanReservation1 = ({ handleSubmitClick, purchaser, setPurchaser, closeNextModal }) => {
  const [currentModal, setCurrentModal] = useState(1);
  const [errorMessage, setErrorMessage] = useState(false);

  const openNextModal = () => {
    // if (currentModal === 1) {
    //   setCurrentModal(2);

    // if (currentModal === 1) {
    //   // Check if any of the fields in the first modal are empty
    //   const isFirstModalEmpty = Object.values(purchaser).some(
    //     (value) => value === ""
    //   );

    //   if (!isFirstModalEmpty) {
    //     // If not empty, proceed to the second modal
    //     setCurrentModal(2);
    //     setErrorMessage(false);
    //   } else {
    //     setErrorMessage(true)
    //   }
    // } else {
      if (currentModal === 1) {
        // Check specific fields for validation
        if (purchaser.first_name_1 === "" || purchaser.last_name_1 === "" || purchaser.email_1 === "" || purchaser.phone_number_1 === ""
        || purchaser.street_address_1 === "" || purchaser.city_1 === "" || purchaser.postal_code_1 === "" || purchaser.occupation_1 === "") {
          setErrorMessage(true);
          return; // Exit early if validation fails
        } else {
          setErrorMessage(false); // Clear error message
        }
  
        // Proceed to the second modal
        setCurrentModal(2);
      } else {
      // Handle when all modals have been shown or if there are only two.
      // You can also close the modal here.
    }
  };

  // const closeNextModaldata = () => {
  //   alert("Floor plan reserved");
  // };
  return (
    <>
      {currentModal === 1 && (
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="btn btn-close"
              onClick={closeNextModal}
              style={{ border: "1px solid blue" }}
            ></button>
          </div>
          {/* End .modal-header */}

          <div className="col-lg-12 my-3">
                <h2 className="text-center ">
                  Step 1: First Purchaser Details
                </h2>
              </div>
              <div>
              {errorMessage && <p className="text-danger">Please Fill all the fields first!</p>}
              </div>
          <div className="col-md-12 col-sm-12 text-start">
            <div className="row p-3">
              <div className="col-md-6 my-2">
                <label htmlFor="first_name_1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name_1"
                  className="form-control"
                  name="first_name_1"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.first_name_1}
                  onChange={(e) => {setPurchaser('first_name_1', e.target.value)}}
                  required
                />
              </div>
              <div className="col-md-6 my-2">
                <label htmlFor="last_name_1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name_1"
                  name="last_name_1"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.last_name_1}
                  onChange={(e) => {setPurchaser('last_name_1', e.target.value)}}
                  required
                />
              </div>
              <div className="col-md-12 my-2">
                <label htmlFor="email_1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email_1"
                  name="email_1"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.email_1}
                  onChange={(e) => {setPurchaser('email_1', e.target.value)}}
                  required
                />
              </div>
              <div className="col-md-12 my-2">
                <label htmlFor="phone_number_1" className="form-label">
                  Phone No
                </label>
                <input
                  type="text"
                  id="phone_number_1"
                  name="phone_number_1"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.phone_number_1}
                  onChange={(e) => {setPurchaser('phone_number_1', e.target.value)}}
                  required
                />
              </div>
              <div className="col-md-12 my-2">
                <label htmlFor="street_address_1" className="form-label">
                  Street Address
                </label>
                <input
                  type="text"
                  id="street_address_1"
                  name="street_address_1"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.street_address_1}
                  onChange={(e) => {setPurchaser('street_address_1', e.target.value)}}
                  required
                />
              </div>
              <div className="col-md-6 my-2">
                <label htmlFor="city_1" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="city_1"
                  name="city_1"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.city_1}
                  onChange={(e) => {setPurchaser('city_1', e.target.value)}}
                  required
                />
              </div>
              <div className="col-md-6 my-2">
                <label htmlFor="postal_code_1" className="form-label">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal_code_1"
                  name="postal_code_1"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.postal_code_1}
                  onChange={(e) => {setPurchaser('postal_code_1', e.target.value)}}
                  required
                />
              </div>
              <div className="col-md-12 my-2">
                <label htmlFor="occupation_1" className="form-label">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation_1"
                  name="occupation_1"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.occupation_1}
                  onChange={(e) => {setPurchaser('occupation_1', e.target.value)}}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 my-2 text-white ">
                <button onClick={openNextModal} className="btn btn-primary">
                  Next
                </button>
              </div>
        </div>
      )}

      {currentModal === 2 && (
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="btn btn-close"
              onClick={closeNextModal}
              style={{ border: "1px solid blue" }}
            ></button>
          </div>
          {/* End .modal-header */}

          <div className="modal-body container pb20">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center">
                  Step 2: Second Purchaser Details
                </h2>
              </div>
              <div className="col-md-12 col-sm-12 text-start">
            <div className="row p-3">
              <div className="col-md-6 my-2">
                <label htmlFor="first_name_2" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name_2"
                  className="form-control"
                  name="first_name_2"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.first_name_2}
                  onChange={(e) => {setPurchaser('first_name_2', e.target.value)}}
                />
              </div>
              <div className="col-md-6 my-2">
                <label htmlFor="last_name_2" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name_2"
                  name="last_name_2"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.last_name_2}
                  onChange={(e) => {setPurchaser('last_name_2', e.target.value)}}
                />
              </div>
              <div className="col-md-12 my-2">
                <label htmlFor="email_2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email_2"
                  name="email_2"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.email_2}
                  onChange={(e) => {setPurchaser('email_2', e.target.value)}}
                />
              </div>
              <div className="col-md-12 my-2">
                <label htmlFor="phone_number_2" className="form-label">
                  Phone No
                </label>
                <input
                  type="text"
                  id="phone_number_2"
                  name="phone_number_2"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.phone_number_2}
                  onChange={(e) => {setPurchaser('phone_number_2', e.target.value)}}
                />
              </div>
              <div className="col-md-12 my-2">
                <label htmlFor="street_address_2" className="form-label">
                  Street Address
                </label>
                <input
                  type="text"
                  id="street_address_2"
                  name="street_address_2"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.street_address_2}
                  onChange={(e) => {setPurchaser('street_address_2', e.target.value)}}
                />
              </div>
              <div className="col-md-6 my-2">
                <label htmlFor="city_2" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="city_2"
                  name="city_2"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.city_2}
                  onChange={(e) => {setPurchaser('city_2', e.target.value)}}
                />
              </div>
              <div className="col-md-6 my-2">
                <label htmlFor="postal_code_2" className="form-label">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal_code_2"
                  name="postal_code_2"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.postal_code_2}
                  onChange={(e) => {setPurchaser('postal_code_2', e.target.value)}}
                />
              </div>
              <div className="col-md-12 my-2">
                <label htmlFor="occupation_2" className="form-label">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation_2"
                  name="occupation_2"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  value={purchaser.occupation_2}
                  onChange={(e) => {setPurchaser('occupation_2', e.target.value)}}
                />
              </div>
            </div>
          </div>

              <div className="col-lg-12 mt-5 text-white ">
                <button onClick={(e) => handleSubmitClick(e)} className="btn btn-info">
                  Reserve
                </button>
              </div>
            </div>
            {/* End .row */}
          </div>
        </div>
      )}
    </>
  );
};

export default FloorPlanReservation1;
