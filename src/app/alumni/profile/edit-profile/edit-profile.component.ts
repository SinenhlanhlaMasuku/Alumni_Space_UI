import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  message: string ='';
 
  isButtonSaveAR: boolean = false;
  isBtnSaveProfPic: boolean = false;
  isBtnSaveCertificate: boolean = false;
  AcademicRChosen: boolean = false;
  profilePicChosen: boolean = false;
  certificateChosen: boolean = false;
  skills: string[] = []; // array to hold skills
  newSkill: string = ''; // Input for new skills
  certificates: File[] = [];
  certificateNames: string[] =[]
  

  
  alumni = {
          Name: "",
          Location: "",
          Qualification:"" ,
          Skills:  "",
          Experience: "",
          Employment_Status: "",
          Academic_Transcript: "",
          Interest: "",
          Bio : "",
  }
 

  ngOnInit() {
    const storedName = localStorage.getItem('Name');
    
    if (storedName) {
      // Update the 'name' property if 'name' is found in localStorage
      this.alumni.Name = storedName;
    }
  }

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private snackBar: MatSnackBar) {}
  //using confirmation dialog to confirm user saving profile
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
     width: '400px',
     
     data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveProfile(); // Call the saveProfile function when the dialog is confirmed
        this.showSnackbar('Profile saved successfully!');
      }
      
    });

  }
  //snackbar for displaying success / error messages

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000, // Duration the snackbar is shown in milliseconds
      verticalPosition: 'top', // Set the vertical position to 'top'
      horizontalPosition: 'center', // Set the horizontal position to 'center'
      panelClass: ['snackbar'], // Add your custom class for styling
    });
  }
  


  saveProfile(){

              //open confirmatiom dialog
               this.openDialog();
              //get user_id
         const user_id = localStorage.getItem('account_id');
      
         const formData = {user_id,skills: this.alumni.Skills,experience: this.alumni.Experience, interest:this.alumni.Interest, bio:this.alumni.Bio, location:this.alumni.Location,qualification: this.alumni.Qualification,employment_status: this.alumni.Employment_Status};
         //pass data into the server
           this.http.put('http://localhost:3000/api/userprofile/:user_id', formData).subscribe((response: any) => {
           console.log('Data sent to server:', response); });
           console.log(formData);
           console.log(user_id);
          this.message = 'profile saved!';

     }
     //add new skill
     addNewSkill() {
      if (this.newSkill !== '') {
        this.skills.push(this.newSkill);
        this.newSkill = ''; // Reset the input field after adding the skill
      }
    }
      //function to handle academic record selection
        onAcademicRecChange(event: any)
         {
            if (event.target.files && event.target.files.length > 0) 
               {
                 this.AcademicRChosen = true;
               }  
             else {
                 this.AcademicRChosen = false;
                  }
          }

     //function to handle profile picture selection
         onProfilePicChange(event: any) 
         {
           if (event.target.files && event.target.files.length > 0) {
                 this.profilePicChosen = true;
             } else {
                 this.profilePicChosen = false;
                    }
         }
        //function to handle certificate selection
            onCertificateChange(event: any, index: number) 
            {
                if (event.target.files && event.target.files.length > 0) {
                   const file = event.target.files[0] as File;
                   this.certificates[index] = file;
                   this.certificateChosen = true;
                   this.certificateNames[index] = file.name;
                 } else {
                  this.certificateChosen = false;
                 }
            }
            //adding new certifacate
            addCertificateField() {
              this.certificates.push(new File([], ''));
              this.certificateNames.push('');
             
            }

            cancelEdit()
            {
              this.alumni = {
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
              
              this.isButtonSaveAR = false;
                this.isBtnSaveProfPic  = false;
                this.isBtnSaveCertificate = false;
                this.AcademicRChosen  = false;
                this.profilePicChosen = false;
                this.certificateChosen = false;
                console.log('editing profile cancelled!')
                this.message ='....cancelled!';
    
            }
            saveAcademicRecord()
            {
                  console.log('academic record saved successfully!')
                  this.isButtonSaveAR = true;

            }

            saveProfilePic()
            {
                console.log('profile picture saved successfully!')
                this.isBtnSaveProfPic = true;
            }
   
            saveCertificate()
            {
              console.log('certificate saved successfully!')
              this.isBtnSaveCertificate = true;
            }
            returnHome(){
              this.router.navigate(['/home']);
            }


}
