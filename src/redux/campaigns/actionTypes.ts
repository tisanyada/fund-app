import { Campaign } from './../../core/interfaces/campaign';
import { CREATE_CAMPAIGN, DELETE_CAMPAIGN, UPDATE_CAMPAIGN, LOAD_CAMPAIGN } from './../actions/types';

export interface CreateCampaignAction {
    type: typeof CREATE_CAMPAIGN;
    payload: Campaign;
}

export interface DeleteCampaignAction {
    type: typeof DELETE_CAMPAIGN;
    payload: string;
}

export interface UpdateCampaignAction {
    type: typeof UPDATE_CAMPAIGN;
    payload: Campaign;
}

export interface LoadCampaignAction {
    type: typeof LOAD_CAMPAIGN;
    payload: Campaign[];
}




export type AppActions = LoadCampaignAction | UpdateCampaignAction | DeleteCampaignAction | CreateCampaignAction