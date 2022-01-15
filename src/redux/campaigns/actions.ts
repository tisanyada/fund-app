import { AppStore } from './../store';
import { LoadCampaignAction, CreateCampaignAction, UpdateCampaignAction, DeleteCampaignAction } from './actionTypes';
import { Campaign, NewCampaign } from './../../core/interfaces/campaign';
import { LOAD_CAMPAIGN, CREATE_CAMPAIGN, UPDATE_CAMPAIGN, DELETE_CAMPAIGN } from './../actions/types';
import { CampaignService } from '../services/campaignService';

let campaignService = new CampaignService()


export const loadCampaignAction = async () => {

    let campaigns = await campaignService.getUserCampaigns();

    let action: LoadCampaignAction = {
        type: "LOAD_CAMPAIGN",
        payload: campaigns
    }

    AppStore.dispatch(action)
}


export const createCampaignAction = async (item: NewCampaign) => {

    console.log("starting create campaign")
    let newCampaign = await campaignService.createCampaign(item)

    console.log(newCampaign)
    if (newCampaign == undefined) {
        console.log("did not create campaign")
        return
    }

    let action: CreateCampaignAction = {
        type: "CREATE_CAMPAIGN",
        payload: newCampaign
    }

    AppStore.dispatch(action)
}

export const updateCampaignAction = (item: Campaign): UpdateCampaignAction => {

    return {
        type: UPDATE_CAMPAIGN,
        payload: item
    };
}

export const deleteCampaignAction = (item: Campaign): DeleteCampaignAction => {
    return {
        type: DELETE_CAMPAIGN,
        payload: ""
    };
}


