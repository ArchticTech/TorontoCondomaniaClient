import global from "../../config/env";
import { useState } from "react";
import FloorPlanReservation1 from "./FloorPlanReservation1";

const FloorPlanReservationModal = ({ data, closeModal }) => {
  // const [isNextModalOpen, setNextModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("initial");

  // const openNextModal = () => {
  //   setNextModalOpen(true);
  // };

  // const closeNextModal = () => {
  //   setNextModalOpen(false);
  // };

  const openNextModal = () => {
    setCurrentModal("next");
  };

  const closeNextModal = () => {
    setCurrentModal("initial");
  };
  const [purchaser, setPurchaser] = useState({
    first_name_1: "",
    last_name_1: "",
    email_1: "",
    phone_number_1: "",
    street_address_1: "",
    city_1: "",
    postal_code_1: "",
    occupation_1: "",
    first_name_2: "",
    last_name_2: "",
    email_2: "",
    phone_number_2: "",
    street_address_2: "",
    city_2: "",
    postal_code_2: "",
    occupation_2: "",
  });

  const handleStateChange = (stateName, newValue) => {
    setPurchaser({
      ...purchaser,
      [stateName]: newValue,
    });
  };
  return (
    <>
      {currentModal === "initial" && (
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="btn btn-close"
              onClick={closeModal}
              style={{ border: "1px solid blue" }}
            ></button>
          </div>
          {/* End .modal-header */}

          <div className="modal-body container pb20">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center ">Floor Plans Reservation</h2>
              </div>
              <div className="col-lg-12">
                <div className="floor_reservation_image">
                  <img
                    className="floor_plane_image w-100  h-100 "
                    src={`${global.apiURL}images/${data.image}`}
                    alt={`Suite ${data.suite_no}`}
                  />
                </div>
              </div>
              <div className="col-lg-12 floor_reservation_data text-start p-4">
                <ul className="list-item row">
                  <li className="col-sm-6">
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      Terrace/Balcony :{" "}
                      <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
                        {data.terrace_balcony}
                      </span>
                    </p>
                  </li>
                  <li className="col-sm-6">
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      Name :{" "}
                      <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
                        {data.suite_name}
                      </span>
                    </p>
                  </li>
                  <li className="col-sm-6">
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      Square ft. :{" "}
                      <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
                        {data.sq_ft}
                      </span>
                    </p>
                  </li>
                  <li className="col-sm-6">
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      No of Baths :{" "}
                      <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
                        {data.bath}
                      </span>
                    </p>
                  </li>
                  <li className="col-sm-6">
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      No of Beds :{" "}
                      <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
                        {data.terrace_balcony}
                      </span>
                    </p>
                  </li>
                  <li className="col-sm-6">
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      Availability :{" "}
                      <span style={{ fontSize: "1rem", fontWeight: "normal" }}>
                        {data.availability ? "Available" : "Not Available"}
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                {purchaser.first_name_1}
                {purchaser.last_name_1}
                {purchaser.email_1}
                {purchaser.phone_number_1}
                {purchaser.street_address_1}
                {purchaser.city_1}
                {purchaser.postal_code_1}
                {purchaser.occupation_1}
                {purchaser.first_name_2}
                {purchaser.last_name_2}
                {purchaser.email_2}
                {purchaser.phone_number_2}
                {purchaser.street_address_2}
                {purchaser.city_2}
                {purchaser.postal_code_2}
                {purchaser.occupation_2}
              </div>

              <div className="col-lg-12 mt-5">
                <button className="btn btn-primary" onClick={openNextModal}>
                  Next
                </button>
              </div>
            </div>
            {/* End .row */}
          </div>
        </div>
      )}
      {currentModal === "next" && (
        <FloorPlanReservation1
          purchaser={purchaser}
          setPurchaser={handleStateChange}
          closeNextModal={closeNextModal}
        />
      )}
    </>
  );
};

export default FloorPlanReservationModal;
