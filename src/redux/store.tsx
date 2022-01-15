import {  combineReducers, createStore } from "@reduxjs/toolkit"
import { campaignReducer, CampaignStoreState } from "./campaigns/reducer"

import { AuthStoreState, authReducer } from "./auth/reducers"
export interface RootAppState {
    campaignStore: CampaignStoreState | undefined;
    authStore: AuthStoreState | undefined
}
const rootReducer = combineReducers<RootAppState>({
    campaignStore: campaignReducer,
    authStore: authReducer
})

export const AppStore = createStore(rootReducer);

