import Router from "next/router";
import {
  addKeyword,
  addType,
  addLocation,
  addPrice,
  addAmenities,
  addLaundry,
  addPetPolicy,
  addSmokingPolicy,
  addBasement,
  addParking,
} from "../../features/rentals/rentalsSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

const GlobalFilterRent = ({ className = "" }) => {
  const dispatch = useDispatch();
  // submit handler
  const submitHandler = () => {
    Router.push("/rentals");
  };

  const { amenities, laundry, petPolicy, smokingPolicy, basement, parking } =
    useSelector((state) => state.rentals);
  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker w100 form-select show-tick"
                onChange={(e) => dispatch(addType(e.target.value))}
              >
                <option value="">Rental Type</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Condo Townhomes">Condo Townhomes</option>
                <option value="Single Family">Single Family</option>
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            />
            <label>
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Monthly Rent</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider
                  priceReducer={addPrice}
                  min={1}
                  max={30000}
                />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Advanced <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu">
                <div className=" p15 pt0-xsd">
                  {/* <div className="col-lg-12 col-xl-12"> */}
                  <ul className="row mb0">
                    <GlobalSelectBox />

                    <li className="col-md-3 list-inline-item mx-0 px-2 mb-2">
                      <div className="">
                        <input
                          type="date"
                          className="form-control"
                          onChange={(e) =>
                            dispatch(addLocation(e.target.value))
                          }
                        />
                        {/* <label>
                            
                          </label> */}
                      </div>
                    </li>
                    {/* End li */}
                    <li className="col-md-3 list-inline-item mx-0 px-2 mb-2">
                      <div className="row rental_features_badge w-100 mx-auto">
                        <div className="col-md-8 col-sm-3">
                          <h4 class="badge d-flex">Laundry Available</h4>
                        </div>
                        <div class="col-3 form-check form-switch form-check-reverse">
                          <input
                            onChange={(e) =>
                              dispatch(addLaundry(e.target.checked))
                            }
                            value={laundry}
                            checked={laundry}
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckReverse"
                          />
                        </div>
                      </div>
                    </li> 
                    {/* End li */}
                    <li className="col-md-3 list-inline-item mx-0 px-2 mb-2">
                      <div className="row rental_features_badge w-100 mx-auto">
                        <div className="col-md-8 col-sm-3">
                          <h4 class="badge d-flex">Pets Allowed</h4>
                        </div>
                        <div class="col-3 form-check form-switch form-check-reverse">
                          <input
                            onChange={(e) =>
                              dispatch(addPetPolicy(e.target.checked))
                            }
                            value={petPolicy}
                            checked={petPolicy}
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckReverse"
                          />
                        </div>
                      </div>
                    </li>
                    {/* End li */}
                    

                    <li className="col-md-3 list-inline-item mx-0 px-2 mb-2">
                      <div className="row rental_features_badge w-100 mx-auto">
                        <div className="col-md-8 col-sm-3">
                          <h4 class="badge d-flex">Smoking Allowed</h4>
                        </div>
                        <div class="col-3 form-check form-switch form-check-reverse">
                          <input
                            onChange={(e) =>
                              dispatch(addSmokingPolicy(e.target.checked))
                            }
                            value={smokingPolicy}
                            checked={smokingPolicy}
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckReverse"
                          />
                        </div>
                      </div>
                    </li>
                    {/* End li */}

                    <li className="col-md-3 list-inline-item mx-0 px-2 mb-2">
                      <div className="row rental_features_badge w-100 mx-auto">
                        <div className="col-md-8 col-sm-3">
                          <h4 class="badge d-flex">Basement Available</h4>
                        </div>
                        <div class="col-3 form-check form-switch form-check-reverse">
                          <input
                            onChange={(e) =>
                              dispatch(addBasement(e.target.checked))
                            }
                            value={basement}
                            checked={basement}
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckReverse"
                          />
                        </div>
                      </div>
                    </li>
                    {/* End li */}

                    <li className="col-md-3 list-inline-item mx-0 px-2 mb-2">
                      <div className="row rental_features_badge w-100 mx-auto">
                        <div className="col-md-8 col-sm-3">
                          <h4 class="badge d-flex">Parking Available</h4>
                        </div>
                        <div class="col-3 form-check form-switch form-check-reverse">
                          <input
                            onChange={(e) =>
                              dispatch(addParking(e.target.checked))
                            }
                            value={parking}
                            checked={parking}
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckReverse"
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* </div> */}
                </div>
                {/* End .row */}

                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>

                  <CheckBoxFilter
                    addAmenities={addAmenities}
                    amenities={amenities}
                  />
                </div>

                <div className="container mb-2">
                  {/* <li>
                    <div className="row mx-1 rental_features_badge">
                      <div className="col-8 ">
                        <h4 class="badge d-flex">Laundry Available</h4>
                      </div>
                      <div class="col-3 form-check form-switch form-check-reverse">
                        <input
                          onChange={(e) =>
                            dispatch(addLaundry(e.target.checked))
                          }
                          value={laundry}
                          checked={laundry}
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckReverse"
                        />
                      </div>
                    </div>
                  </li>
                  End li */}
                </div>
                {/* End li */}
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilterRent;
