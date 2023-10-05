import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    type: "",
    location: "",
    price: " ",
    amenities: [],
    bathrooms: '',
    bedrooms: '',
    availabilityDate: "",
    length: 0,
    city: '',
    laundry: '',
    petPolicy: '',
    smokingPolicy: '',
    basement: '',
    parking: '',
};

export const rentalsSlice = createSlice({
    name: "rentals",
    initialState,
    reducers: {
        addKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        addType: (state, action) => {
            state.type = action.payload;
        },
        addLocation: (state, action) => {
            state.location = action.payload;
        },
        addPrice: (state, action) => {
            state.price = action.payload;
        },
        addAmenities: (state, action) => {
            const isExist = state.amenities.some(
                (item) => item === action.payload
            );
            if (!isExist) {
                state.amenities.push(action.payload);
            } else {
                state.amenities = state.amenities.filter(
                    (item) => item !== action.payload
                );
            }
        },
        resetAmenities: (state, action) => {
            state.amenities = [];
        },
        // addStatus: (state, action) => {
        //     state.status = action.payload;
        // },
        addBathrooms: (state, action) => {
            state.bathrooms = action.payload;
        },
        addBedrooms: (state, action) => {
            state.bathrooms = action.payload;
        },
        addAvailabilityDate: (state, action) => {
            state.availabilityDate = action.payload;
        },
        addLength: (state, action) => {
            state.length = action.payload;
        },
        addCity: (state, action) => {
            state.city = action.payload;
        },
        addLaundry: (state, action) => {
            state.laundry = action.payload;
        },
        addPetPolicy: (state, action) => {
            state.petPolicy = action.payload;
        },
        addSmokingPolicy: (state, action) => {
            state.smokingPolicy = action.payload;
        },
        addBasement: (state, action) => {
            state.basement = action.payload;
        },
        addParking: (state, action) => {
            state.parking = action.payload;
        },
    },
});

export const {
    addKeyword,
    addType,
    addLocation,
    addPrice,
    addAmenities,
    addStatus,
    addBathrooms,
    addBedrooms,
    addAvailabilityDate,
    addLaundry,
    addPetPolicy,
    addSmokingPolicy,
    addBasement,
    addParking,
    addLength,
    addCity,
    resetAmenities,
} = rentalsSlice.actions;
export default rentalsSlice.reducer;