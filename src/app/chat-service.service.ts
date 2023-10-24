import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { Message } from 'src/app/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  public message$: BehaviorSubject<Message> = new BehaviorSubject({date:'',room:'',sender:'',text:'Welcome to Alumni Space Chat. Search your contacts on Networks. create new groups by clicking on New Group. And click on a contact or group to chat.'});
  constructor() {}

   socket = io('http://localhost:3000');

  public sendMessage(message: Message) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message:Message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };

  public joinRoom(room:string){
    this.socket.emit('joinRoom',room);
  }

  public leaveRoom(room:string){
    this.socket.emit('leaveRoom',room);
  }

}
