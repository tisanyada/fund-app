export interface Campaign {
    approved?:    boolean;
    _id?:         string;
    user?:        string;
    title?:       string;
    category?:    string;
    description?: string;
    imageUrl?:    string;
    videoUrl?:    string;
    fundingGoal?: string;
    startDate?:   string;
    endDate?:     string;
    country?:     string;
    createdAt?:   Date;
    updatedAt?:   Date;
    __v?:         number;
}


export interface NewCampaign {
    approved?:    boolean;
    _id?:         string;
    user?:        string;
    title?:       string;
    category?:    string;
    description?: string;
    image?:    File;
    videoUrl?:    string;
    fundingGoal?: string;
    startDate?:   string;
    endDate?:     string;
    country?:     string;
    createdAt?:   Date;
    updatedAt?:   Date;
    __v?:         number;
}
