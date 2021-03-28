import { Profile } from "./profile";

export interface IActivity {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    category: string;
    city: string;
    venue: string;
    hostUsername: string,
    isCancelled: boolean,
    attendees: Profile[],
    isGoing: boolean,
    isHost: boolean
    host?:Profile

}

export class IActivity implements IActivity{
    
    constructor(activity?: ActivityFormValues) {
        Object.assign(this, activity)
    }
}

export class ActivityFormValues{
    id?:string = undefined
    title:string = ""
    category:string = ""
    description:string = ""
    date: Date | null = null
    city:string = ""
    venue:string = ""

    constructor(activity?: ActivityFormValues){
        if(activity){
            this.id = activity.id;
            this.title = activity.title;
            this.category =  activity.category;
            this.description =  activity.description;
            this.date = activity.date;
            this.city = activity.city;
            this.venue = activity.venue;
        }
    }


}