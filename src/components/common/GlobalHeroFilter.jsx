import Link from "next/link";
import GlobalFilter from "./GlobalFilter";

const GlobalHeroFilter = ({ className = "" }) => {
  return (
    <div className={`home_adv_srch_opt ${className}`}>
      <ul
        className="nav nav-pills"
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: 'space-between',
          alignItems: "center",
          width: "100%",
        }}
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
        <Link 
            
              className="nav-link active"
              id="pills-home-tab"
              // data-bs-toggle="pill"
              href="/buy"
              
              // role="tab"
              // aria-controls="pills-home"
              // aria-selected="true"
            >
              Buy   
          </Link>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-profile-tab"
            // data-bs-toggle="pill"
            href="/rent"
            // role="tab"
            // aria-controls="pills-profile"
            // aria-selected="false"
          >
            Rent
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-profile-tab"
            // data-bs-toggle="pill"
            href="/assignments"
            // role="tab"
            // aria-controls="pills-profile"
            // aria-selected="false"
          >
            Assignment
          </a>
        </li>
      </ul>
      {/* End nav-pills */}

      <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <GlobalFilter />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <GlobalFilter />
        </div>
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
