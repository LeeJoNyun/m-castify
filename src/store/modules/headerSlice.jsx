import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    menuState: false,
    loginPopup: false,
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setMenuState: (state, action) => {
            state.menuState = !state.menuState;
        },
        setLoginPopup: (state) => {
            state.loginPopup = !state.loginPopup;
        },
    },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
