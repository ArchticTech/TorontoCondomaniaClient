import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addKeyword,
  addLocation,
  addPrice,
  addStatus,
  addType,
  addOccupencyYear,
  resetAmenities,
  addCity,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import ClearAllFilters from "./ClearAllFilters";

const FilteringItem = () => {
  const {
    keyword,
    type,
    location,
    status,
    bathrooms,
    bedrooms,
    occupencyYear,
    area,
    amenities
  } = useSelector((state) => state.properties);

  // input state
  const [getKeyword, setKeyword] = useState(keyword);
  const [getType, setType] = useState(type);
  const [getLocation, setLocation] = useState(location);
  const [getStatus, setStatus] = useState(status);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getOccupencyYear, setOccupencyYear] = useState(occupencyYear);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);

  // advanced state
  const [features] = useState([
    { id: uuidv4(), name: "Air Conditioning" },
    { id: uuidv4(), name: "Barbeque" },
    { id: uuidv4(), name: "Gym" },
    { id: uuidv4(), name: "Microwave" },
    { id: uuidv4(), name: "TV Cable" },
    { id: uuidv4(), name: "Lawn" },
    { id: uuidv4(), name: "Refrigerator" },
    { id: uuidv4(), name: "Swimming Pool" },
    { id: uuidv4(), name: "WiFi" },
    { id: uuidv4(), name: "Sauna" },
    { id: uuidv4(), name: "Dryer" },
    { id: uuidv4(), name: "Washer" },
    { id: uuidv4(), name: "Laundry" },
    { id: uuidv4(), name: "Outdoor Shower" },
    { id: uuidv4(), name: "Window Coverings" },
  ]);

  const dispatch = useDispatch();

  const Router = useRouter();

  // keyword
  useEffect(() => {
    dispatch(addKeyword(getKeyword));
  }, [dispatch, getKeyword]);

  // type
  useEffect(() => {
    dispatch(addType(getType));
  }, [dispatch, getType]);

  // location
  useEffect(() => {
    dispatch(addLocation(getLocation));
  }, [dispatch, getLocation]);

  // status
  useEffect(() => {
    dispatch(addStatus(getStatus));
  }, [dispatch, getStatus]);

  // bathroom
  useEffect(() => {
    dispatch(addBathrooms(getBathroom));
  }, [dispatch, getBathroom]);

  // bedroom
  useEffect(() => {
    dispatch(addBedrooms(getBedroom));
  }, [dispatch, getBedroom]);

  // built years
  useEffect(() => {
    dispatch(addOccupencyYear(getOccupencyYear));
  }, [dispatch, getOccupencyYear]);

  // area min
  useEffect(() => {
    dispatch(dispatch(addAreaMin(getAreaMin)));
  }, [dispatch, getAreaMin]);

  // area max
  useEffect(() => {
    dispatch(dispatch(addAreaMax(getAreaMax)));
  }, [dispatch, getAreaMax]);

const clearHandler = () => {
  setKeyword("");
    setType("");
    setLocation("");
    setStatus("");
    dispatch(addPrice({ min: -1, max: -1 }));
    setBathroom("");
    setBedroom("");
    setBedroom("");
    setOccupencyYear("");
    setAreaMin("");
    setAreaMax("");
    dispatch(resetAmenities());
    dispatch(addStatusType(""));
    dispatch(addFeatured(""));
    dispatch(addCity(""));
};

  return (
    <ul className="sasw_list mb0">
      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={getKeyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setType(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getType}
            >
              <option value="">Property Type</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Condo Townhomes">Condo Townhomes</option>
              <option value="Single Family">Single Family</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Location"
            value={getLocation}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="exampleInputEmail">
            <span className="flaticon-maps-and-flags"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getStatus}
            >
              <option value="">Status</option>
              <option value="Pre-Construction">Pre Construction</option>
              <option value="Under-Construction">Under-Construction</option>
              <option value="Ready to move">Ready To Move</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setOccupencyYear(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getOccupencyYear}
            >
              <option value="">Estimate Occupancy Year</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
        </div>
      </li>
      
      <li className="col-12">
        <div className="small_dropdown2">
          <div
            id="prncgs2"
            className="btn dd_btn"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <span>Price Range</span>
            <label htmlFor="prncgs2">
              <span className="fa fa-angle-down"></span>
            </label>
          </div>
          <div className="dd_content2 style2 dropdown-menu">
            <div className="pricing_acontent ">
              <PricingRangeSlider priceReducer={addPrice} min={1} max={2000000}/>
            </div>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div id="accordion" className="panel-group mt-2">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#panelBodyRating"
                  className="accordion-toggle link"
                  data-bs-toggle="collapse"
                  data-bs-parent="#accordion"
                >
                  <i className="flaticon-more"></i> Advanced features
                </a>
              </h4>
            </div>
            {/* End .panel-heading */}

            <div id="panelBodyRating" className="panel-collapse collapse">
              <div className="panel-body row">
                {/* End li */}

                <div className="col-12 d-flex mb-3">
                  <li className="min_area list-inline-item w-100">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputName2"
                        placeholder="Min Area"
                        value={getAreaMin}
                        onChange={(e) => setAreaMin(e.target.value)}
                      />
                    </div>
                  </li>
                  {/* End li */}

                  <li className="max_area list-inline-item w-100">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputName3"
                        placeholder="Max Area"
                        value={getAreaMax}
                        onChange={(e) => setAreaMax(e.target.value)}
                      />
                    </div>
                  </li>
                </div>
                {/* End li */}

                <div className="col-12 mb-3">
                  <div className="candidate_revew_select">
                    <select
                      onChange={(e) => setBathroom(e.target.value)}
                      className="selectpicker w100 show-tick form-select"
                      value={getBathroom}
                    >
                      <option value="">Bathrooms</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                {/* End li */}

                <div className="col-12 mb-3">
                  <div className="candidate_revew_select">
                    <select
                      onChange={(e) => setBedroom(e.target.value)}
                      className="selectpicker w100 show-tick form-select"
                      value={getBedroom}
                    >
                      <option value="">Bedrooms</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                {/* End li */}

                <div className="col-lg-12">
                  <ul className="ui_kit_checkbox selectable-list fn-400">
                    {features?.map((feature) => (
                      <li key={feature.id}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                            value={feature.name}
                            onChange={(e) =>
                              dispatch(addAmenities(e.target.value))
                            }
                            checked = {amenities.includes(feature.name)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_button">
          <button
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            Clear Filters
          </button>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
