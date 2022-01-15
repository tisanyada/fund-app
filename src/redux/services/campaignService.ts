
import { UserProfile } from '../../core/interfaces/UserInterface';
import { toast } from 'material-react-toastify';
import { SignupDataSchema } from '../auth/actions';
import { Campaign, NewCampaign } from '../../core/interfaces/campaign';
import globalConfig from "./globals"

export const LOCALSTORAGE_USER_TOKEN_KEY = "user_token"

export class CampaignService {
    async createCampaign(campaign: NewCampaign): Promise<Campaign | undefined> {
        delete campaign._id;
        delete campaign.__v;
        delete campaign.createdAt;
        delete campaign.approved;
        delete campaign.user;

        let response = await fetch(`${globalConfig.ROOT_API_URL}/api/campaigns`,
            {
                method: "POST",
                headers: {
                    ...this.getRequestHeader(this.getUserToken()),
                    // 'Content-Type': 'multipart/form-data'
                },
                body: JSON.stringify(campaign)
            })

        if (response.status == 200) {
            let list: Campaign = await response.json();
            return list
        }

        if (response.status == 400) {
            let error = await response.json()
            console.log(error)
            toast("All required fields must be provided", { type: "error" })
            throw "Could not login successfully"
        }
        return undefined;
    }

    async getUserCampaigns(): Promise<Campaign[]> {
        let response = await fetch(`${globalConfig.ROOT_API_URL}/api/campaigns`,
            {
                headers: this.getRequestHeader(this.getUserToken())
            })
        if (response.status == 200) {
            let list: Campaign[] = await response.json();
            return list
        }

        if (response.status == 400) {
            toast("Provide valid username and password", { type: "error" })
            throw "Did not load campaigns"
        }
        return []
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
    getRequestMeth(token: string) {
        return {
            "Authorization": `${token}`,
            'Content-Type': 'application/json'
        }
    }

}