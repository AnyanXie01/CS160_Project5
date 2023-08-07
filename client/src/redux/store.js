import { configureStore } from '@reduxjs/toolkit'
import resourcesBodyReducer from "../feature/resources-body/resourcesbodySlice";
import communitiesBodyReducer from "../feature/community-body/communitybodySlice"

export const store = configureStore({
    reducer: {
        resourceBody: resourcesBodyReducer,
        communitiesBody: communitiesBodyReducer,
    }
})