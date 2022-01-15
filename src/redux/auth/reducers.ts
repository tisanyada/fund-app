import { UserProfile } from './../../core/interfaces/UserInterface';
import { LOG_IN, LOG_OUT } from './../actions/types';

import { AppActions } from "./actionTypes"

export interface AuthStoreState {
    auth: {
        user: UserProfile | null;
    };
}
let initialState: AuthStoreState = {
    auth: { user: null },
}

export const authReducer = (state = initialState, actions: AppActions):AuthStoreState => {
    console.log(`received action ${actions.type}`)
    switch (actions.type) {
        case LOG_IN:
            console.log("sent auth login to redux")
            return {
                auth: {user: actions.payload.user}
            }; break;
        case LOG_OUT:
            state.auth.user= null;
            return state; break;
        default: return state;
    }
}