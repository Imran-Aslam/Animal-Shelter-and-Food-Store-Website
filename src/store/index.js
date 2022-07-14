import { configureStore } from "@reduxjs/toolkit";

import ReportSlice from "./Report-slice";
import CartSlice from "./Cart-slice";
import PetsSlice from "./Pets-slice";
import RouteSlice from "./Route-slice";
import AuthSlice from "./Auth-slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
};
const reducers = combineReducers({
    cart: CartSlice.reducer,
    report: ReportSlice.reducer,
    pet: PetsSlice.reducer,
    route: RouteSlice.reducer,
    auth: AuthSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
const Store = configureStore({
    reducer:
    // cart: CartSlice.reducer,
    // report: ReportSlice.reducer,
    // pet: PetsSlice.reducer,
    // route: RouteSlice.reducer,
    // auth: AuthSlice.reducer,
        persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const StorePersistor = persistStore(Store);
export default Store;