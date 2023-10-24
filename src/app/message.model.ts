import { User } from "./user.model";

export interface Message {
    id:number;
    text:string;
    date:string;
    roomId:string;
    sender:User;
    receiver:User;
}
