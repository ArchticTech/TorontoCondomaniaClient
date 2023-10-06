import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addKeyword,
  addType,
  addLocation,
  addPrice,
  addAmenities,
  addBathrooms,
  addBedrooms,
  addAvailabilityDate,
  addLaundry,
  addPetPolicy,
  addSmokingPolicy,
  addBasement,
  addParking,
  addCity,
  resetAmenities,
} from "../../../features/rentals/rentalsSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const FilteringItemRental = () => {
  const {
    keyword,
    type,
    location,
    price,
    amenities,
    bathrooms,
    bedrooms,
    availabilityDate,
    laundry,
    petPolicy,
    smokingPolicy,
    basement,
    parking,
  } = useSelector((state) => state.rentals);

  // input state
  const [getKeyword, setKeyword] = useState(keyword);
  const [getType, setType] = useState(type);
  const [getLocation, setLocation] = useState(location);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getAvailabilityDate, setAvailabilityDate] = useState(availabilityDate);
  const [getPrice, setPrice] = useState(price);
  const [getLaundry, setLaundry] = useState(laundry);
  const [getPetPolicy, setPetPolicy] = useState(petPolicy);
  const [getSmokingPolicy, setSmokingPolicy] = useState(smokingPolicy);
  const [getBasement, setBasement] = useState(basement);
  const [getParking, setParking] = useState(parking);

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

  // bathroom
  useEffect(() => {
    dispatch(addBathrooms(getBathroom));
  }, [dispatch, getBathroom]);

  // bedroom
  useEffect(() => {
    dispatch(addBedrooms(getBedroom));
  }, [dispatch, getBedroom]);

  // Availability Date
  useEffect(() => {
    dispatch(addAvailabilityDate(getAvailabilityDate));
  }, [dispatch, getAvailabilityDate]);

  // Availability Date
  useEffect(() => {
    dispatch(addPrice(getPrice));
  }, [dispatch, getPrice]);

  // Laundry
  useEffect(() => {
    dispatch(addLaundry(getLaundry));
  }, [dispatch, getLaundry]);

  // Pet Policy
  useEffect(() => {
    dispatch(addPetPolicy(getPetPolicy));
  }, [dispatch, getPetPolicy]);

  // Smoking Policy
  useEffect(() => {
    dispatch(addSmokingPolicy(getSmokingPolicy));
  }, [dispatch, getSmokingPolicy]);

  // Basement
  useEffect(() => {
    dispatch(addBasement(getBasement));
  }, [dispatch, getBasement]);

  // Parking
  useEffect(() => {
    dispatch(addParking(getParking));
  }, [dispatch, getParking]);

  // clear filter
  // const clearHandler = () => {
  //   ClearAllFilters(dispatch);
  // };

  const clearHandler = () => {
    setKeyword("");
    setType("");
    setLocation("");
    dispatch(addPrice({ min: -1, max: -1 }));
    setBathroom("");
    setBedroom("");
    setLaundry(false);
    setPetPolicy(false);
    setSmokingPolicy(false);
    setBasement(false);
    setParking(false);
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
              <option value="">Rent Type</option>
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
              onChange={(e) => setAvailabilityDate(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getAvailabilityDate}
            >
              <option value="">Availability Date</option>
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
      {/* End li  */}

      <div className="col-12 mb-3" >
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
              <PricingRangeSlider priceReducer={addPrice} min={1} max={20000}/>
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

                <div className="container mb-2">
                  <li>
                    <div className="row rental_features_badge">
                      <div className="col-8 ">
                        <h4 class="badge">Laundry Available</h4>
                      </div>
                      <div class="col-3 form-check form-switch form-check-reverse">
                        <input
                          onChange={(e) => setLaundry(e.target.checked)}
                          value={getLaundry}
                          checked={getLaundry}
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckReverse"
                        />
                      </div>
                    </div>
                  </li>
                  {/* End li */}

                  <li>
                    <div className="row rental_features_badge">
                      <div className="col-8">
                        <h4 class="badge ">Pets Allowed</h4>
                      </div>
                      <div class="col-3 form-check form-switch form-check-reverse">
                        <input
                          onChange={(e) => setPetPolicy(e.target.checked)}
                          value={getPetPolicy}
                          checked={getPetPolicy}
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckReverse"
                        />
                      </div>
                    </div>
                  </li>
                  {/* End li */}

                  <li>
                    <div className="row rental_features_badge">
                      <div className="col-8">
                        <h4 class="badge ">Smoking Allowed</h4>
                      </div>
                      <div class="col-3 form-check form-switch form-check-reverse">
                        <input
                          onChange={(e) => setSmokingPolicy(e.target.checked)}
                          value={getSmokingPolicy}
                          checked={getSmokingPolicy }
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckReverse"
                        />
                      </div>
                    </div>
                  </li>
                  {/* End li */}

                  <li>
                    <div className="row rental_features_badge">
                      <div className="col-8">
                        <h4 class="badge">Basement Available</h4>
                      </div>
                      <div class="col-3 form-check form-switch form-check-reverse">
                        <input
                          onChange={(e) => setBasement(e.target.checked)}
                          value={getBasement}
                          checked={getBasement}
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckReverse"
                        />
                      </div>
                    </div>
                  </li>
                  {/* End li */}

                  <li>
                    <div className="row rental_features_badge">
                      <div className="col-8">
                        <h4 class="badge ">Parking Available</h4>
                      </div>
                      <div class="col-3 form-check form-switch form-check-reverse">
                        <input
                          onChange={(e) => setParking(e.target.checked)}
                          value={getParking}
                          checked={getParking}
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckReverse"
                        />
                      </div>
                    </div>
                  </li>
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
                            checked={amenities.includes(feature.name)}
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

export default FilteringItemRental;
