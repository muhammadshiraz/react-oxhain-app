// See for createSlice: https://redux-toolkit.js.org/api/createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTabIndex: 0,
    contentDataLength: 0
}

export const ClientInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveTabIndex(state, action) {
            state.activeTabIndex = action.payload;
        },
        setContentDataLength(state, action) {
            state.contentDataLength = action.payload;
        }
    }
});

export const { setActiveTabIndex, setContentDataLength } = ClientInfoSlice.actions;
export default ClientInfoSlice.reducer;