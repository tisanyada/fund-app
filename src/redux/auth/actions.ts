import { AppStore } from './../store';
import { UserProfile } from './../../core/interfaces/UserInterface';

import { LOG_IN, LOG_OUT } from '../actions/types';

import { LoginActionType, LoggoutActionType } from "./actionTypes"
import { toast } from 'material-react-toastify';
import { UserService, LOCALSTORAGE_USER_TOKEN_KEY } from '../services/userService';
let  ROOT_API = "https://livestars-crowdfunding.herokuapp.com";
ROOT_API="localhost:3000";
const LOCALSTORAGE_USER_PROFILE_KEY = "savelives-user-profile";

let userService = new UserService()

async function loadLoggedInUser(token: string) {
    localStorage.setItem(LOCALSTORAGE_USER_TOKEN_KEY, token)
    let profile = await userService.getUserProfile()

    localStorage.setItem(LOCALSTORAGE_USER_PROFILE_KEY, JSON.stringify(profile))

    let action: LoginActionType = {
        type: LOG_IN,
        payload: {
            user: profile
        }
    }
    AppStore.dispatch(action)
}


export async function LoginAction(username: string, password: string) {
    try {
        let token = await userService.signinUser(username, password)
        if (token != undefined) loadLoggedInUser(token);
    } catch (e) {
    }
}


export function initUserAuth() {
    //
    console.log("initing user")
    let token = localStorage.getItem(LOCALSTORAGE_USER_TOKEN_KEY)

    if (token == null) {
        console.log("User not logged in")
        return
    } else {
        console.log("loading current user")
        loadLoggedInUser(token)
    }
}


export interface SignupDataSchema {
    fullname?: string, username?: string, email?: string,
    phone?: string,
    password?: string,
    confirm_password?: string
}
export async function createUserAccountAction(
    data: SignupDataSchema) {
    let newUserToken = await userService.signupUser(data)
    if (newUserToken != undefined) loadLoggedInUser(newUserToken);
}


export function signoutUser() {
    localStorage.clear()
    
    let action:LoggoutActionType={
        type:LOG_OUT
    }
    AppStore.dispatch(action)
}