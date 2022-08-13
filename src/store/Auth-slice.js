import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        email: "",
        name: "",
        image: "",
    },
    reducers: {
        setAuth(state, action) {
            const user = action.payload;
            state.isAuth = user.auth;
            state.email = user.email;
            state.name = user.name;
            state.image = user.image;
        },
    },
});
export const AuthActions = AuthSlice.actions;
export default AuthSlice;