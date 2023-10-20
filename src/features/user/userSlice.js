import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    loginStatus: false,
    expiresAt: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserData: (state, action) => {
            state.firstname = action.payload.firstname || 'No Name';
            state.lastname = action.payload.lastname || 'No Name';
            state.email = action.payload.email || '';
            state.loginStatus = action.payload.loginStatus;
        },
        clearAuthData: (state) => {
            state.firstname = '';
            state.lastname = '';
            state.email = '';
            state.loginStatus = false;
        }
    },
});

export const {
    addUserData,
    clearAuthData
} = userSlice.actions;
export default userSlice.reducer;