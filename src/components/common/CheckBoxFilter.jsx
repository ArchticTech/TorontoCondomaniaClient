import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// import { addAmenities } from "../../features/properties/propertiesSlice";

const CheckBoxFilter = ({addAmenities, amenities=null}) => {
  
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

  return (
    <>
    <div>
      <ul className="ui_kit_checkbox selectable-list row">
        {features?.map((feature) => (
          <li className="col-xxs-6 col-sm col-lg col-xl" key={feature.id}>
            <div className="form-check custom-checkbox">
            <input
              type="checkbox"
              className="form-check-input"
              id={feature.id}
              value={feature.name}
              onChange={(e) =>
                dispatch(addAmenities(e.target.value))
              }
              checked = {(amenities != null) ? 
                amenities.includes(feature.name): false
              }
              
            />
            <label className="form-check-label" htmlFor={feature.id} >
              {feature.name}
            </label>
            </div>
          </li>
        ))}
        </ul>
      </div>
      {/* End .col */}
    </>
  );
};

export default CheckBoxFilter;
