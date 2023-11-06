import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/modules/alumni/profile/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  //variables
  message: string = '';
  selectedFile: File | null = null;

  isButtonSaveAR: boolean = false;
  isBtnSaveProfPic: boolean = false;
  isBtnSaveCertificate: boolean = false;
  AcademicRChosen: boolean = false;
  profilePicChosen: boolean = false;
  certificateChosen: boolean = false;
  skills: string[] = []; // array to hold skills
  newSkill: string = ''; // Input for new skills
  certificates: File[] = [];
  certificateNames: string[] = []
  fileTypeError: string = '';
  fileTypeError2: string = '';


  alumni = {
    Name: "",
    Location: "",
    Qualification: "",
    Skills: "",
    Experience: "",
    Employment_Status: "",
    Academic_Transcript: "",
    Interest: "",
    Bio: "",
  }


  ngOnInit() {
    const storedName = localStorage.getItem('Name');

    if (storedName) {
      // Update the 'name' property if 'name' is found in localStorage
      this.alumni.Name = storedName;
    }
  }

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private snackBar: MatSnackBar, private profileService: ProfileService) { }
  //using confirmation dialog to confirm user saving profile
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',

      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == false) {
        this.saveProfile(); // Call the saveProfile function when the dialog is confirmed
        this.showSnackbar('Profile saved successfully!');

      }
      else {
        // this.saveProfile(); // Call the saveProfile function when the dialog is confirmed
        this.showSnackbar('Not saved');
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

  open() {
    this.openDialog();
  }


  saveProfile() {

    //get user_id
    const user_id = localStorage.getItem('account_id');
      
    const formData = {user_id,skills: this.alumni.Skills,experience: this.alumni.Experience, interest:this.alumni.Interest, bio:this.alumni.Bio, location:this.alumni.Location,qualification: this.alumni.Qualification,employment_status: this.alumni.Employment_Status};
      
      

      //pass data into the server
      this.http.put('http://localhost:3000/api/userprofile/:user_id', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
     // console.log('.......saving..')
      
     
    });

    //this.openDialog();

  }
  //add new skill
  addNewSkill() {

    if (this.newSkill.trim() !== '') {
      // const arrayLength = this.skills.length;
      // this.skills.splice(1, arrayLength);
      this.skills.push(this.newSkill);
      this.newSkill = ''; // Reset the input field after adding the skill

    }
  }
  //function to handle academic record selection
  onAcademicRecChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.AcademicRChosen = true;

      //select file
      this.selectedFile = event.target.files[0];

      //save
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];
        this.profileService.uploadDocument(file);

        //this.router.navigate(['/alumni/profile/view-profile']);
      }
    }
    else {
      this.AcademicRChosen = false;
    }
  }

  //function to handle profile picture selection
  onProfilePicChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.profilePicChosen = true;

      //save
      
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        const image = inputElement.files[0];
        this.selectedFile = event.target.files[0];
        this.profileService.uploadImage(image);
        //this.profileService.uploadPicture(image);

        // Navigate to the image view component
        //this.router.navigate(['/alumni/profile/view-profile']);
      }
    } else {
      this.profilePicChosen = false;
    }
    const file: File = event.target.files[0];
    const fileType = file.type;
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (!allowedTypes.includes(fileType)) {
      this.fileTypeError = 'Invalid file type. Please select a JPG, JPEG, or PNG file.';
      // Reset the file input if needed
      event.target.value = null;
    } else {
      this.fileTypeError = ''; // Reset the error message if the file type is valid
      // File type is valid, proceed with the file upload or other actions
      // Your code here
    }
  }
  //function to handle certificate selection
  onCertificateChange(event: any, index: number) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0] as File;
      this.certificates[index] = file;
      this.certificateChosen = true;
      this.certificateNames[index] = file.name;

      //save
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];
        this.profileService.uploadCertificates(file);

        this.router.navigate(['/alumni/profile/view-profile']);
      }
    } else {
      this.certificateChosen = false;
    }

    const file: File = event.target.files[0];
    const fileType = file.type;
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (!allowedTypes.includes(fileType)) {
      this.fileTypeError2 = 'Invalid file type. Please select a DOCX or PDF file.';
      // Reset the file input if needed
      event.target.value = null;
    } else {
      this.fileTypeError2 = 'correct file!'; // Reset the error message if the file type is valid
      // File type is valid, proceed with the file upload or other actions
      // Your code here
    }
  }
  //adding new certifacate
  addCertificateField() {
    this.certificates.push(new File([], ''));
    this.certificateNames.push('');

  }

  cancelEdit() {
    this.alumni = {
      Name: "",
      Location: "",
      Qualification: "",
      Skills: "",
      Experience: "",
      Employment_Status: "",
      Academic_Transcript: "",
      Interest: "",
      Bio: "",

    }

    this.isButtonSaveAR = false;
    this.isBtnSaveProfPic = false;
    this.isBtnSaveCertificate = false;
    this.AcademicRChosen = false;
    this.profilePicChosen = false;
    this.certificateChosen = false;
    console.log('editing profile cancelled!')
    this.message = '....cancelled!';

  }
  saveAcademicRecord() {
    console.log('academic record saved successfully!')
    this.isButtonSaveAR = true;
    if (this.selectedFile) {
      this.profileService.uploadDoc(this.selectedFile).subscribe((response) => {
        // Handle the response from the server
      });
    }
  }

  saveProfilePic() {
    console.log('profile picture saved successfully!')
    this.isBtnSaveProfPic = true;
    if (this.selectedFile) {
      this.profileService.uploadPicture(this.selectedFile).subscribe((response) => {
        // Handle the response from the server
      });
    }
  }

  saveCertificate() {
    console.log('certificate saved successfully!')
    this.isBtnSaveCertificate = true;
  }
  returnHome() {
    this.router.navigate(['/alumni/home']);
  }


}
