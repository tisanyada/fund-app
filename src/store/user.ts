import { NewCampaign, Campaign } from "../core/interfaces/campaign"
import { makeAutoObservable, observable } from "mobx"
import { UserProfile } from "../core/interfaces/UserInterface"
export class UserManager {
    data: { user?: UserProfile } = {}
    constructor() {
        makeAutoObservable(this, {
            data: observable
        })
    }

    load = () => {

    }
    
    delete = () => {

    }

    update = () => {

    }
}