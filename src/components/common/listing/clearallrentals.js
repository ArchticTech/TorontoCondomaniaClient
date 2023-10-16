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
  
  const clearallrentals = (dispatch) => {
  
      dispatch(addKeyword(""));
      dispatch(addType(""));
      dispatch(addLocation(""));
      dispatch(addAmenities(""));
      dispatch(addPrice({ min: -1, max: -1 }));
      dispatch(addBathrooms(""));
      dispatch(addBedrooms(""));
      dispatch(addAvailabilityDate(""));
      dispatch(resetAmenities());
      dispatch(addCity(""));
      dispatch(addLaundry(false));
      dispatch(addPetPolicy(false));
      dispatch(addSmokingPolicy(false));
      dispatch(addBasement(false));
      dispatch(addParking(false));
  }
  
  export default clearallrentals
  