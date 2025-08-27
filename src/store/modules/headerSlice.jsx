import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    menuState: false,
    loginPopup: false,
    joinPopup: false,
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setMenuState: (state, action) => {
            state.menuState = !state.menuState;
        },
        closeMenu: (state, action) => {
            state.menuState = false;
        },
        setLoginPopup: (state) => {
            state.loginPopup = !state.loginPopup;
        },
        setJoinPopup: (state) => {
            state.joinPopup = !state.joinPopup;
        },
        clickMenu: (state, action) => {
            if (state.menuState) {
                state.menuState = !state.menuState;
            }
        },
    },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
