import { createSlice } from "@reduxjs/toolkit";
const RouteSlice = createSlice({
    name:"route_id",
    initialState:{
        routeId:""
    },
    reducers:{
        addRouteId(state,action){
        state.routeId=action.payload.id;
        }
    }
})
export const routeActions = RouteSlice.actions;
export default RouteSlice;