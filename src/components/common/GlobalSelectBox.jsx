import { addBathrooms, addBedrooms, addOccupencyYear, addStatus } from "../../features/properties/propertiesSlice";
import { useDispatch, useSelector } from "react-redux";

const GlobalSelectBox = () => {

  const {
    status,
    bathrooms,
    bedrooms,
    occupencyYear,
  } = useSelector((state) => state.properties);
  const dispatch = useDispatch()

  return (
    <>
      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select 
              onChange={(e) => dispatch(addBathrooms(e.target.value))}
              className="selectpicker w100 show-tick form-select"
              value={bathrooms}
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
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select 
              onChange={(e) => dispatch(addBedrooms(e.target.value))}
              className="selectpicker w100 show-tick form-select"
              value={bedrooms}
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
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select
              onChange={(e) => dispatch(addOccupencyYear(e.target.value))}
              className="selectpicker w100 show-tick form-select"
              value={occupencyYear}
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
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select
              onChange={(e) => dispatch(addStatus(e.target.value))}
              className="selectpicker w100 show-tick form-select"
              value={status}
            >
              <option value="">Status</option>
              <option value="Pre-Construction">Pre Construction</option>
              <option value="Under-Construction">Under-Construction</option>
              <option value="Ready to move">Ready To Move</option>
            </select>
        </div>
      </li>
    </>
  );
};

export default GlobalSelectBox;
