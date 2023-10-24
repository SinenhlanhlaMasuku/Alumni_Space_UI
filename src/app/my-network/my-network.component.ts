import { Component } from '@angular/core';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { ChatComponent } from './chat/chat.component';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.css']
})
export class MyNetworkComponent {
 title="My Network";

  users: User[] = [
    { id: 1, name: 'Linda' },
    { id: 2, name: 'Sbo' },
    { id: 3, name: 'Sizwe' },
    { id: 4, name: 'Lunga' },
    { id: 5, name: 'Siyanda' }
  ];



   myFunction(){


    var input, ul, li, a, i, txtValue;
  
    input = document.getElementById("myInput");
    if(input){
   var filter= input.textContent?.toUpperCase().toString();
   if(filter){
    ul = document.getElementById("contactsList");
    if(ul){
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().includes(filter,0)) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
    }
   }
  

  
    }
     

}
selectContact(name:string){

  var fname = document.getElementById("selected");
  if(fname){
    fname.textContent=name;
  }
}

  }

