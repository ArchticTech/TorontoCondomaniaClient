import Link from "next/link";
import GlobalFilter from "./GlobalFilter";
import { useSelector } from "react-redux";
import DropdownListing from "./listing/dropdown-listing";

const GlobalHeroFilter = ({ properties, className = "" }) => {
  const {keyword} = useSelector((state) => state.properties);

  return (
    <div className={`container px-4 col-lg-12 home_adv_srch_opt ${className}`}>
      <ul
        className="nav nav-pills"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
        <Link
              className="nav-link active"
              id="pills-home-tab"
              href="/buy" >
              Buy   
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            id="pills-profile-tab"
            // data-bs-toggle="pill"
            href="/rent"
            // role="tab"
            // aria-controls="pills-profile"
            // aria-selected="false"
          >
            Rent
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            id="pills-profile-tab"
            // data-bs-toggle="pill"
            href="/assignments"
            // role="tab"
            // aria-controls="pills-profile"
            // aria-selected="false"
          >
            Assignment
          </Link>
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
          <DropdownListing properties={properties}/>
        </div>
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
