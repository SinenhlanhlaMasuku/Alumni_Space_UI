import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  /*constructor(@Inject(UserProfileService) private service : UserProfileService){

  }
  viewProfile(view: HTMLButtonElement){
    this.service.viewProfile();
  }*/

  //variables
  alumni = {
          Name: "",
          Location: "",
          Qualification:"" ,
          Skills: "",
          Experience: "",
          Employment_Status: "",
          Academic_Transcript: "",
          Interest: "",
          Bio : "",
  }

  ngOnInit() {
    const storedName = localStorage.getItem('name');
    
    if (storedName) {
      // Update the 'name' property if 'name' is found in localStorage
      this.alumni.Name = storedName;
    }
  }

  constructor(private http: HttpClient, private router: Router) {}

  saveProfile(){
    //get user_id
    const user_id = localStorage.getItem('account_id');
      
    const formData = {user_id,skills: this.alumni.Skills,experience: this.alumni.Experience,};
      
      

      //pass data into the server
      this.http.put('http://localhost:3000/api/userprofile/:user_id', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      //this.email = '';
      //this.password = '';

      /*if(response.message === 'Login successful!' ){
        console.log(response.result[0].name);
        console.log(response.account_id);
        //store user details to localStorage
        localStorage.setItem('name',response.result[0].name.toString());
        localStorage.setItem('account_id',response.account_id);

        this.router.navigate(['/homepage']);
      }else{
        this.router.navigate(['/forgot-password']);
      }*/
      
    });


      
      console.log(formData);
      console.log(user_id);
  }
}
