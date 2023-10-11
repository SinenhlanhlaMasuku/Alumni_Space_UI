import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

profile = {
  name:'',
  email:''
}


  saveProfile(){
    const formData = { name: this.profile.name, email: this.profile.email};

    //set name

    console.log(formData);
    
  }


}
