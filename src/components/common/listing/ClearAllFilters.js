
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  addType,
  addOccupencyYear,
  resetAmenities,
  addCity,
} from "../../../features/properties/propertiesSlice";

const ClearAllFilters = (dispatch) => {


    dispatch(addKeyword(""));
    dispatch(addType(""));
    dispatch(addLocation(""));
    dispatch(addStatus(""));
    dispatch(addPrice({ min: -1, max: -1 }));
    dispatch(addBathrooms(""));
    dispatch(addBedrooms(""));
    dispatch(addOccupencyYear(""));
    dispatch(addAreaMin(""));
    dispatch(addAreaMax(""));
    dispatch(resetAmenities());
    dispatch(addCity(""));
}

export default ClearAllFilters
