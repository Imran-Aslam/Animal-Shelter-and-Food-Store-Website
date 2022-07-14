import { createSlice } from "@reduxjs/toolkit";
const PetsSlice = createSlice({
    name:"pets",
    initialState:{
        petsData:[],
        medicalHistory:[],
        previousOwner:[]
    },
    reducers:{
        addPetsData(state,action){
            state.petsData=[]
            const newPetsData=action.payload;
            state.petsData.push(
                {
            id:newPetsData.id,
            name:newPetsData.name,
            age:newPetsData.age,
            size:newPetsData.size,
             weight:newPetsData.weight,
            color:newPetsData.color,
            city:newPetsData.city,
            breed:newPetsData.breed
        }
            )

            // state.medicalHistory=[];
            // state.medicalHistory.push({
            // petAllergies:action.payload.petAllergies,
            // petIllnes:action.payload.petIllness,
            // petSurgeries:action.payload.petSurgeries,
            // petVaccinated:action.payload.petVaccinated,
            // })

            // state.previousOwner=[];
            // state.previousOwner.push({
            // ownerName:action.payload.ownerName,
            // ownerCity:action.payload.ownerCity,
            // ownerAdoptionDuration:action.payload.ownerAdoptionDuration,
            // })
        
        }
    }
})
export const petActions=PetsSlice.actions;
export default PetsSlice;