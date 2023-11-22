import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent implements OnInit{
     name: string = '';
     surname: string = '';
     email: string = '';
     job_title: string = '';
     job_description: string = '';

  applicant = {
    name: '',
    email: ''
  };

  constructor(private dataService: DataServiceService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    // Fetch data from the database and populate the form fields
    /*this.dataService.getUserData().subscribe(
      (userData: any) => {
        this.applicant.name = userData.name;
        this.applicant.email = userData.email;
      },
      error => {
        console.error('Error fetching user data:', error);
      }
    );*/

    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    const email = localStorage.getItem('email');

    if (name && surname) {
      this.name = name + ' ' + surname;
    }

    if (email) {
      this.email = email;
    }
    
  }

 /* submitForm(form: NgForm) {
    // Handle form submission
    if (form.valid) {
      console.log('Form submitted:', this.applicant);
      // Add logic to submit the form data to the server or perform other actions
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }*/

  handleFileInput(event: any) {
    // Handle file input changes
    console.log('File selected:', event.target.files);
    // Add logic to handle file uploads
  }

  

  submitForm(form: NgForm) {
    
    if(this.email.length == 0 || this.name.length ==  0){
      this.showSnackbar('Please fill in the missing field(s)');
 }else{
    this.showSnackbar('Application submitted successfully!');
    //this.router.navigate(['/alumni/profile/view-profile']);
 }

 
    if (form.valid) {
      const alumni_id = 'applicationData'; // Replace with the actual alumni_id or fetch it from somewhere
      const applicationData = {
        alumni_id: alumni_id,
        job_title: this.job_title,
        job_description: this.job_description
        
      };
    
      this.dataService.submitApplication(applicationData).subscribe(
        (response: any) => {
          console.log('Application submitted successfully:', response);
          // Add any additional logic or redirection after successful submission
          if(response.message === 'Application successful!' ){
            // alert('Login Successfully!');
            console.log(response.result[0].name);
            console.log(response.account_id);
            //store user details to localStorage
            localStorage.setItem('name',response.result[0].name.toString());
            localStorage.setItem('surname', response.result[0].surname.toString());
            localStorage.setItem('email', response.result[0].surname.toString());
            
    
            // this.router.navigate(['/alumni/home']);
            //this.page();
            this.router.navigate(['/alumni/job']);
          }else{
            //alert("Invalid Details")
            this.router.navigate(['/alumni/home']);
          }
        });
        }else{
          this.router.navigate(['/alumni/apply-page']);
        }
      
  }

  showSnackbar(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 2000, // Duration the snackbar is shown in milliseconds
      verticalPosition: 'top', // Set the vertical position to 'top'
      horizontalPosition: 'center', // Set the horizontal position to 'center'
      panelClass: ['snackbar'], // Add your custom class for styling
    });

    this.router.navigate(['/alumni/home']);
  }

  
}