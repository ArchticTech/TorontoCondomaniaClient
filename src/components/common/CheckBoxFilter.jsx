import {useEffect, useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addAmenities } from "../../features/properties/propertiesSlice";

const CheckBoxFilter = () => {
  
  const [features, setFeatures] = useState([
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

  const featureHandler = (id) => {
    const data = features.map((feature) => {
      if (feature.id === id) {
        if (feature.isChecked) {
          feature.isChecked = false;
        } else {
          feature.isChecked = true;
        }
      }
      return feature;
    });

    dispatch(addAmenities(data));
  };

  return (
    <>
    <div className="col-xxs-6 col-sm col-lg col-xl">
      <ul className="ui_kit_checkbox selectable-list">
        {features?.map((feature) => (
          <li key={feature.id}>
            <div className="form-check custom-checkbox">
            <input
              type="checkbox"
              className="form-check-input"
              id={feature.id}
              value={feature.name}
              checked={feature.isChecked || false}
              onChange={(e) =>
                dispatch(addAmenities(e.target.value))
              }
              // onClick={() => featureHandler(feature.id)}
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
