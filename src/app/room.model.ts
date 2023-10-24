import { Message } from "./message.model"
import { User } from "./user.model"

export interface Room {
    id:number
    participants:User[]
    name:string
    messageHistory:Message[];
}
