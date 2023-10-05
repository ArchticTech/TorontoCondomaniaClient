import Link from "next/link";
import GlobalFilter from "./GlobalFilter";

const GlobalHeroFilter = ({ className = "" }) => {
  return (
    <div className={`px-4 col-lg-12 home_adv_srch_opt ${className}`}>
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

        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            href="#buy-search-box"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            role="tab"
            aria-controls="pills-profile"
            // aria-selected="true"
          >
          Buy
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            role="tab"
            href="#rent-search-box"
            aria-controls="pills-profile"
            // aria-selected="false"
          >
            Rent
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            role="tab" 
            href="#assignment-search-box"
            aria-controls="pills-profile"
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
          id="buy-search-box"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <GlobalFilter />
        </div>
        <div
          className="tab-pane fade fade"
          id="rent-search-box"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <GlobalFilter />
        </div>
        <div
          className="tab-pane fade fade"
          id="assignment-search-box"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <GlobalFilter />
        </div>
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
