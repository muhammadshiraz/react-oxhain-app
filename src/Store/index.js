import { configureStore } from "@reduxjs/toolkit";
import tradeReducer from './Slices/TradeSlice';
import userReducer, { setUserId } from './Slices/UserSlice';
import clientInfoReducer from './Slices/ClientInfoSlice';

export const store = configureStore({
    reducer: {
        trade: tradeReducer,
        user: userReducer,
        clientInfo: clientInfoReducer
    }
});