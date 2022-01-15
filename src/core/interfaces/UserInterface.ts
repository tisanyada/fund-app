export interface UserProfile {
    social:     Social;
    _id:        string;
    user:       string;
    fullname:   string;
    email:      string;
    phone:      string;
    location:   string;
    activities: Activity[];
    createdAt:  Date;
    updatedAt:  Date;
    __v:        number;
}
export interface Activity {
    _id:   string;
    title: string;
    date:  Date;
}

export interface Social {
    youtube: string;
    twitter: string;
}
