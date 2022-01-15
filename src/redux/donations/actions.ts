import { AppStore } from '../store';
import { CreateDonationAction, LoadDonationsAction} from './actionTypes';
import { Campaign } from '../../core/interfaces/campaign';
import { LOAD_CAMPAIGN, CREATE_CAMPAIGN,LOAD_DONATION, CREATE_DONATION } from '../actions/types';

export const loadDonationsAction =async  (items: Campaign[]) => {
    return {
        type: LOAD_DONATION,
        payload: items
    };
}


export const createDonationAction = async (item: Campaign) => {
    let data: CreateDonationAction = {
        type: CREATE_DONATION,
        payload: item
    }
    AppStore.dispatch(data)
}




