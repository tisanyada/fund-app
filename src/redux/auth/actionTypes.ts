import { UserProfile } from './../../core/interfaces/UserInterface';

import { LOG_IN, LOG_OUT } from '../actions/types';

export interface LoginActionType {
    type: typeof LOG_IN;
    payload: {
        user: UserProfile
    };
}


export interface LoggoutActionType {
    type: typeof LOG_OUT;
}


export type AppActions = LoggoutActionType | LoginActionType