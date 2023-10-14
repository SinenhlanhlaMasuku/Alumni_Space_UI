import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FileService } from '../../../file.service';

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
  selectedFile: File | null = null; 

  ngOnInit() {
    const storedName = localStorage.getItem('name');
    
    if (storedName) {
      // Update the 'name' property if 'name' is found in localStorage
      this.alumni.Name = storedName;
    }
  }

  constructor(private http: HttpClient, private router: Router,private fileService: FileService) {}

  saveProfile(){
    //get user_id
    const user_id = localStorage.getItem('account_id');
      
    const formData = {user_id,skills: this.alumni.Skills,experience: this.alumni.Experience, interest:this.alumni.Interest, bio:this.alumni.Bio, location:this.alumni.Location,qualification: this.alumni.Qualification,employment_status: this.alumni.Employment_Status};
      
      

      //pass data into the server
      this.http.put('http://localhost:3000/api/userprofile/:user_id', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      

      
    });


      
      console.log(formData);
      console.log(user_id);
  }

  onFileSelected(event: any) {
    // Capture the selected file(s) and store them in a property
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      // Create a FormData object and append the file
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Send the FormData to the service for uploading to the server
      this.fileService.uploadFile(formData).subscribe(response => {
        // Handle the response from the server
      });
    } else {
      // Handle the case where no file is selected
      console.log('No file selected.');
    }
  }
}
