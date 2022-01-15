import { CREATE_CAMPAIGN, UPDATE_CAMPAIGN, DELETE_CAMPAIGN, LOAD_CAMPAIGN } from './../actions/types';
import { Campaign } from './../../core/interfaces/campaign';

import { AppActions } from "./actionTypes"


export interface CampaignStoreState {
    campaigns: Campaign[];
}
let initialState: CampaignStoreState = {
    campaigns: []
}

export const campaignReducer = (state = initialState, actions: AppActions): CampaignStoreState => {
    console.log(`received action ${actions.type}`)
    switch (actions.type) {
        case CREATE_CAMPAIGN:
            let campaigns= [...state.campaigns];
            campaigns.push(actions.payload);
            return {campaigns:campaigns};
        case UPDATE_CAMPAIGN: return state;
        case DELETE_CAMPAIGN:
            return state;
            return {
                campaigns: state.campaigns.filter(v => true)
            };
        case LOAD_CAMPAIGN:
            return { campaigns: actions.payload }

        default: return state;
    }
}