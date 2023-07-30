// See for createSlice: https://redux-toolkit.js.org/api/createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: '',

    walletUSDT: 0,

    pairs: [],
    wallet: []
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId(state, action) {
            state.user = action.payload;
        },
        setPairs(state, action) {
            state.pairs = action.payload;
        },
        setWallet(state, action) {
            state.wallet = action.payload;
        }
    }
});

export const { setUserId, setPairs, setWallet } = UserSlice.actions;
export default UserSlice.reducer;