import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    type: "",
    location: "",
    price: {
        min: -1,
        max: -1,
    },
    amenities: [],
    status: "",
    bathrooms: 0,
    bedrooms: 0,
    garages: "",
    occupencyYear: "",
    area: {
        min: "",
        max: "",
    },
    length: 0,
    city: '',
};

export const propertiesSlice = createSlice({
    name: "properties",
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
            state.price.min = action.payload.min;
            state.price.max = action.payload.max;
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
        addStatus: (state, action) => {
            state.status = action.payload;
        },
        addBathrooms: (state, action) => {
            state.bathrooms = action.payload;
        },
        addBedrooms: (state, action) => {
            state.bathrooms = action.payload;
        },
        addGarages: (state, action) => {
            state.garages = action.payload;
        },
        addOccupencyYear: (state, action) => {
            state.occupencyYear = action.payload;
        },
        addAreaMin: (state, action) => {
            state.area.min = action.payload;
        },
        addAreaMax: (state, action) => {
            state.area.max = action.payload;
        },
        addLength: (state, action) => {
            state.length = action.payload;
        },
        addCity: (state, action) => {
            state.city = action.payload;
        },
    },
});

export const {
    addKeyword,
    addType,
    addLocation,
    addPropertyType,
    addPrice,
    addAmenities,
    addStatus,
    addBathrooms,
    addBedrooms,
    addGarages,
    addOccupencyYear,
    addAreaMin,
    addAreaMax,
    addLength,
    addCity,
    resetAmenities,
} = propertiesSlice.actions;
export default propertiesSlice.reducer;