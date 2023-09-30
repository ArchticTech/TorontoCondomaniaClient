import Image from "next/image";

const FloorPlans = ({ floorPlan }) => {
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
                  <ul className="mb0 d-flex align-items-cener flex-wrap">
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
              {plan.image}
              <div className="card-body text-center">
                <Image
                  width={619}
                  height={465}
                  className="img-fluid w-100 h-100 cover"
                  // src={`/images/${plan.image}`}
                  src={`/images/${plan.image}`} 
                  alt={`Suite ${plan.suite_no}`} 
                />
                <p>
                  Plan description. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                  minim veniam, quis nostrud exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FloorPlans;
