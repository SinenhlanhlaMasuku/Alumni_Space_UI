import { Component} from '@angular/core';
import { MyNetworkComponent } from '../my-network.component';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';


import { ChatServiceService } from 'src/app/chat-service.service'; 
@Component({
  selector: 'app-my-network-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  newMessage: Message={date: new Date().toLocaleString(),room:"default",sender:"ChatBot",text:""};
  messageList: Message[] = [];
  date: string= new Date().toLocaleString();
  currentDate:string='';
  selectedUser='';
  room:string='dafault';
  user: User={id:0,name:"alumni"}
  filtedUsers:User[]=[]
  _filterText:string='';
  groupName:string="";


  
  get filterText(){
    return this._filterText;
  }

  set filterText(value:string){
    this._filterText=value;
    this.filtedUsers=this.filterContacts(value);
  }
  contacts: User[] =[
    {id:1,name:"Linda Zwane"},
    {id:2,name:"Sboniso Ngcobo"},
    {id:3,name:"Sizwe Shembe"},
    {id:4,name:"Lindo Zuma"},
    {id:5,name:"Yolanda Sbeko"},
    {id:6,name:"Dean Sgudu"},
    {id:7,name:"Sanele Mgo"},
    {id:8,name:"Lunga Mgomezulu"},


  ];
  gID:number=this.contacts.length+1;

  constructor(private chatService: ChatServiceService){

  }
  ngOnInit(){

    //Output message to DOM
    this.chatService.getNewMessage().subscribe((message: Message) => {
      message.room=this.room;
      message.date=this.getCurentDate();
      message.sender="messageYou";
      this.messageList.push(message);
    })
    this.filtedUsers=this.contacts;

    
  }

  getCurentDate():string{
    this.currentDate= new Date().toLocaleString().substring(12);
    return this.currentDate;

  }
  sendMessage() {
    this.newMessage.room=this.room;
    this.chatService.sendMessage(this.newMessage);
    this.newMessage.text='';
 
  }
  selectContact(name:string){

    const temp=document.getElementById("selected");
    if(temp){
      temp.textContent=name;
    this.chatService.leaveRoom(this.room);  
      this.room=name;
   this.chatService.joinRoom(this.room);
   this.messageList=[];

    }
  
  
  }
  filterContacts(filterTerm:string){
    if(this.contacts.length === 0 || this._filterText === '' ){
      return this.contacts;
    }else{
      return this.contacts.filter((user:User) =>
      {
        return user.name.toLowerCase().includes(filterTerm.toLowerCase())
      }
      )
    }

  }
  newGroup(){
    const modal = document.getElementById("group-modal");
    if(modal)
    modal.style.display="block";

  }
  cancelAdd(){
    const modal = document.getElementById("group-modal");
    if(modal)
    modal.style.display="none";
  }
  addGroup(){
    this.contacts.push({id:this.gID,name:this.groupName});
    this.groupName='';
    this.gID=this.contacts.length+1;
  }
}
