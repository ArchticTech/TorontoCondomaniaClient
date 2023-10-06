import GlobalFilter from "./GlobalFilter";
import { useSelector } from "react-redux";
import DropdownListing from "./listing/dropdown-listing";
import GlobalFilterRent from "./GlobalFilterRent";

const GlobalHeroFilter = ({ properties, className = "" }) => {
  const {keyword} = useSelector((state) => state.properties);

  return (
    <div className={`container px-4 col-lg-12 home_adv_srch_opt ${className}`}>
      <ul
        className="nav nav-pills"
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
          <DropdownListing properties={properties}/>
        </div>
        <div
          className="tab-pane fade fade"
          id="rent-search-box"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <GlobalFilterRent />
        </div>
        <div
          className="tab-pane fade fade"
          id="assignment-search-box"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <GlobalFilter isAssignment={true} />
        </div>
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
