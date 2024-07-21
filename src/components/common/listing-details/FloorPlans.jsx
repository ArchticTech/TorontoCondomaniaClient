import global from "../../../config/env";
import { useState } from "react";
import FloorPlanReservationModal from "../FloorPlanReservationModal";
import { useRef } from "react";
import Cookies from "js-cookie";

const FloorPlans = ({ floorPlan }) => {
  const [loginStatus] = useState(Cookies.get('loginStatus') == 'true')
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const overlayRef = useRef(null);

  // Function to open the modal
  const openModal = (floorPlanData) => {
    setSelectedFloorPlan(floorPlanData);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to close the modal when clicking outside
  const handleOverlayClick = (e) => {
    if (overlayRef.current && e.target === overlayRef.current) {
    }
  };
  return (
    <>
      <div className="accordion" id="accordionExample">
        {floorPlan?.map((plan, index) => (
          <div className="card floor_plan" key={index}>
            <div id={`heading${index}`}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  <ul className="mb0 d-flex align-items-cener flex-wrap h-auto ">
                    <li className="d-inline-flex list-inline-item">
                      {plan.terrace_balcony}
                    </li>
                    <li className="d-inline-flex list-inline-item">
                      <p>Name:</p> <span>{plan.suite_name}</span>
                    </li>
                    <li className="d-inline-flex list-inline-item">
                      <p>Plan Sq. Ft:</p> <span>{plan.sq_ft}</span>
                    </li>
                    <li className="d-inline-flex list-inline-item">
                      <p>Baths:</p> <span>{plan.bath}</span>
                    </li>
                    <li className="d-inline-flex list-inline-item">
                      <p>Beds:</p> <span>{plan.bed}</span>
                    </li>
                    <li className="d-inline-flex list-inline-item">
                      <span>
                        {plan.availability ? "Available" : "Not Available"}
                      </span>
                    </li>
                  </ul>
                </button>
              </h2>
            </div>
            <div
              id={`collapse${index}`}
              className="collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div
                className={`card-body text-center ${!loginStatus ? "locked-floor-plan" : ""}`}>
                <img
                  className="floor_plane_image"
                  src={`${global.apiURL}images/${plan.image}`}
                  alt={`Suite ${plan.suite_no}`}
                />
              </div>
              <div style={{ textAlign: "center" }} className="mb-3">
              {loginStatus ? 
                <>
                  <a href="#" className="btn btn-thm" onClick={() => openModal(plan)} >
                    <span className="">Reserve now</span>
                  </a>

                  {/* Background overlay */}
                  {isModalOpen && <div
                  className="overlay"
                  ref={overlayRef}
                  onClick={handleOverlayClick} style={{ 
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, .8)',
                    backdropFilter: 'blur(15px)',
                    zIndex: '999',

                  }} />}

                  {/* Modal */}
                  {isModalOpen && selectedFloorPlan &&(
                    <div
                      className="modal fade bd-example-modal-floorplan-lg show"
                      tabIndex="-1"
                      role="dialog"
                      style={{ display: "block" }}
                    >
                      <div
                        className="modal-dialog modal-dialog-centered modal-lg"
                        role="document"
                      >
                        <div className="modal-content">
                          <FloorPlanReservationModal data={selectedFloorPlan} closeModal={closeModal} />
                        </div>
                      </div>
                    </div>
                  )}
                </>
                :
                <p className="floor-plan-reservation-locked">Login to Reserve this Floor Plan</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FloorPlans;
