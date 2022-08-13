import { createSlice } from "@reduxjs/toolkit";

const ReportSlice = createSlice({
    name:"Report_data",
    initialState:{
        reportData:[]
    },
    reducers:{
       addReportData(state,action){
            state.reportData=[];
            state.reportData.push(
                {
                    firstName:action.payload.firstName,
                    lastName:action.payload.lastName,
                    email:action.payload.email,
                    phone:action.payload.phone,
                    city:action.payload.city,
                    type:action.payload.type,
                    injury:action.payload.injury,
                    address:action.payload.address,
                    image:action.payload.image
                }
            )
       }
    }
})
export const reportActions=ReportSlice.actions;
export default ReportSlice;