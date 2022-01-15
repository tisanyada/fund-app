import { CREATE_DONATION, LOAD_DONATION } from './../actions/types';

import { Campaign } from '../../core/interfaces/campaign';

import { AppActions } from "./actionTypes"

export interface CampaignStoreState {
    donations: Campaign[];
}
let initialState: CampaignStoreState = {
    donations: []
}

export const campaignReducer = (state = initialState, actions: AppActions): CampaignStoreState => {
    console.log(`received action ${actions.type}`)
    switch (actions.type) {
        case CREATE_DONATION:
            let donations= [...state.donations];
            donations.push(actions.payload);
            return {donations:donations};
        case LOAD_DONATION:
            return { donations: actions.payload }

        default: return state;
    }
}