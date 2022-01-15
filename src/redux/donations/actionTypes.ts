import { CREATE_DONATION, LOAD_DONATION } from './../actions/types';
import { Campaign } from '../../core/interfaces/campaign';

export interface CreateDonationAction {
    type: typeof CREATE_DONATION;
    payload: Campaign;
}

export interface LoadDonationsAction {
    type: typeof LOAD_DONATION;
    payload: Campaign[];
}

export type AppActions = LoadDonationsAction |  CreateDonationAction