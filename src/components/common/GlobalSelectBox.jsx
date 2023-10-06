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
      <li className="col-md-3 list-inline-item mx-0 px-2 mb-2">
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

      <li className="col-md-3 list-inline-item mx-auto px-2">
        <div className="candidate_revew_select w-100">
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
    </>
  );
};

export default GlobalSelectBox;
