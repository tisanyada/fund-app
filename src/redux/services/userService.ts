
import { UserProfile } from '../../core/interfaces/UserInterface';
import { toast } from 'material-react-toastify';
import { SignupDataSchema } from '../auth/actions';
import globalConfig from "./globals"



export const LOCALSTORAGE_USER_TOKEN_KEY = "user_token"

export class UserService {


    async getUserProfile(): Promise<UserProfile> {

        try {
            // get profile
            let response = await fetch(`${globalConfig.ROOT_API_URL}/api/users/profile`, {
                method: "GET", headers: this.getRequestHeader(this.getUserToken())
            })

            if (response.status == 200) {
                let user: UserProfile = await response.json();
                return user;
            }

            throw "Unexpected error in user service reques"
        } catch (e) {
            console.log("error occured")
            console.log(e)
            throw e;
        }
    }


    async signinUser(username: string, password: string): Promise<string| undefined> {
        let response = await fetch(`${globalConfig.ROOT_API_URL}/api/users/login`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password })
            })
        if (response.status == 200) {
            
            let userToken: string = await response.json();
            return userToken
        }
        if (response.status == 400) {
            toast("Provide valid username and password", { type: "error" })
            throw "Could not login successfully"
        }

        toast("Something went wrong", { type: "error" })
        throw "Could not login successfully"
    }

    async signupUser(data: SignupDataSchema): Promise<string | undefined> {

        let response = await fetch(`${globalConfig.ROOT_API_URL}/api/users/signup`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST", body: JSON.stringify(data)
        });

        console.log(response);
    
        if (response.status == 200) {
            toast(`Created account successfully`)
            // create user success fully. Start login action afterwords
            let data = await response.json()
            return data.token;
        }
    
        if (response.status == 400) {
            let data = await response.json();
            toast(`Can't create account for the following. ${JSON.stringify(data)}`)
        }

    }


    async updateUserProfile(profile: UserProfile): Promise<Boolean> {
        let response = await fetch(`${globalConfig.ROOT_API_URL}/api/users/profile`, {
            method: "POST", body: JSON.stringify(profile),
            headers: this.getRequestHeader(this.getUserToken()),
        })

        if (response.status == 200) {
            // create user success fully. Start login action afterwords
            let newProfile: UserProfile = await response.json()
            return true;
        } else {
            // could not create user
        }

        return false;
    }




    getUserToken(): string {
        let token = localStorage.getItem(LOCALSTORAGE_USER_TOKEN_KEY);
        if (token == null || token == undefined || token == "") {
            throw "User must be logged in to retrieve profile"
        }
        return token;
    }


    getRequestHeader(token: string) {
        return {
            "Authorization": `${token}`,
            'Content-Type': 'application/json'
        }
    }

}