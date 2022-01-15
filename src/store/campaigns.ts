import { NewCampaign, Campaign } from "../core/interfaces/campaign"
import { makeAutoObservable, observable } from "mobx"
export class CampaignManager {
    campaigns: Campaign[] = []
    constructor() {
        makeAutoObservable(this, {
            campaigns: observable
        })
    }

    load = () => {

    }

    add = (newCampaign: NewCampaign) => {

    }

    delete = () => {

    }

    update = () => {

    }
}