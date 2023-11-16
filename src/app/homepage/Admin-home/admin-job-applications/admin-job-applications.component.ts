// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-job-applications',
//   templateUrl: './admin-job-applications.component.html',
//   styleUrls: ['./admin-job-applications.component.css']
// })
// interface Alumni {
  

//   fullNames: string,
//   lastName: string,
//   skills: string[],
//   email: string,
//   experience: string,
//   qualification: string,
//   certificateNames: string[]
 
// };
// export class AdminJobApplicationsComponent {
// // Assume you have a list of job applications
// //  alumni: string[]=[
// //   fullNames: string,
// //   lastName: string,
// //   skills: string[],
// //   email: string,
// //   experience: string,
// //   qualification: string,
// //   certificateNames: string[]
// //  ];
// jobApplications: any[] = [
//   // ... Your job application data here (including alumni information)
//     application: Alumni[] =[{
//       fullNames: 'John Doe',
//       lastName: 'Doe',
//       skills: ['JavaScript', 'Angular', 'Node.js'],
//       email: 'john.doe@example.com',
//       experience: '5 years',
//       qualification: 'Bachelor of Science in Computer Science',
//       certificateNames: ['Certificate 1', 'Certificate 2'],
// }],
   
// ];

// // Function to respond to an application
// respondToApplication(application: any, response: string) {
//   // Handle the response logic here
//   console.log(`Responding to application from ${application.alumni.fullNames}: ${response}`);
// }
// }
// import { Component } from '@angular/core';

// interface Alumni {
//   fullNames: string;
//   lastName: string;
//   skills: string[];
//   email: string;
//   experience: string;
//   qualification: string;
//   certificateNames: string[];
// }

// @Component({
//   selector: 'app-admin-job-applications',
//   templateUrl: './admin-job-applications.component.html',
//   styleUrls: ['./admin-job-applications.component.css']
// })
// export class AdminJobApplicationsComponent {
//   applications: Alumni[] = [
//     {
//       fullNames: 'John Doe',
//       lastName: 'Doe',
//       skills: ['JavaScript', 'Angular', 'Node.js'],
//       email: 'john.doe@example.com',
//       experience: '5 years',
//       qualification: 'Bachelor of Science in Computer Science',
//       certificateNames: ['Certificate 1', 'Certificate 2'],
//     },
//     {
//       fullNames: 'Sihle Bandile',
//       lastName: 'Mhlongo',
//       skills: ['JavaScript', 'Angular', 'Node.js', 'HTML', 'CSS'],
//       email: 'john.doe@example.com',
//       experience: '2 years',
//       qualification: 'National Dip in Computer Science',
//       certificateNames: ['Certificate 1', 'Certificate 2'],
//     },

//     // Add more Alumni objects as needed
//   ];

//   respondToApplication(application: Alumni, response: string) {
//     // Handle the response logic here
//     console.log(`Responding to application from ${application.fullNames}: ${response}`);
//   }
// }

// Import necessary modules and components
import { Component } from '@angular/core';
import{ MatDialog} from '@angular/material/dialog';
import { JobInterviewSetterDialogComponent } from '../job-interview-setter-dialog/job-interview-setter-dialog.component';

// Define the interface for the Alumni object
interface Alumni {
  fullNames: string;
  lastName: string;
  skills: string[];
  email: string;
  experience: string;
  qualification: string;
  certificateNames: string[];
  certificates: string[];
  Bio: string;
  address: string;
   interests: string[];
   alumnipic: string;
}

// Decorate the class as an Angular component
@Component({
  selector: 'app-admin-job-applications',
  templateUrl: './admin-job-applications.component.html',
  styleUrls: ['./admin-job-applications.component.css']
})
export class AdminJobApplicationsComponent {


  constructor(private dialog: MatDialog){

  }
  openInterviewDialog() {
    const dialogRef = this.dialog.open(JobInterviewSetterDialogComponent, {
      width: '400px', // Adjust the width as per your requirement
      data: {
        // Pass any data you want to the dialog
      },
    });
    //Subscribe to the afterClosed event to get the result when the dialog is closed
  dialogRef.afterClosed().subscribe(result => {
    // Handle the result if needed
    if (result) {
      // User clicked send, and you have the interview details in the 'result' object
      console.log('Interview details:', result);

      // Add your logic here to handle the interview details, respond to the application,
      // and send the details to the applicable candidate
    } else {
      // User clicked cancel
      console.log('Interview canceled');
    }
  
  });

  }
  // Define the array of Alumni objects (applications)
     applications: Alumni[] = [
    {
      fullNames: 'John Dan',
      lastName: 'Doe',
      skills: ['JavaScript', 'Angular', 'Node.js'],
      email: 'john.doe@example.com',
      experience: '5 years',
      qualification: 'Bachelor of Science in Computer Science',
      certificateNames: ['Certificate 1', 'Certificate 2'],
      Bio: 'Young dedicated individual, with strong personality',
      address: '245 surder str',
       interests: ['coding','gaming'],
      //  certificateNames: ['HuaweiCloud','MS data Engineer', ''],
       certificates: ['certicate1Path','certificatePath2'],
       alumnipic: 'assets/Sneh.jpg',
    },
    // Add more Alumni objects as needed
    {
            fullNames: 'Sihle, Bandile',
            lastName: 'MccNear',
            skills: ['JavaScript', 'Angular', 'Node.js', 'HTML', 'CSS'],
            email: 'SihleM@gmail.com',
            experience: '1 year',
            qualification: 'National Dip in Computer Science',
            certificateNames: ['EWP', 'AWS'],
            Bio: 'Young dedicated individual, with strong personality',
            address: '245 surder str',
            interests: ['coding','sports', 'artificial intelligence'],
            // certificateNames: ['HuaweiCloud','MS data Engineer', ''],
            certificates: ['certicate1Path','certificatePath2'],
            alumnipic: 'assets/Sihle.jpg',

          },
      
  ];

  // Define a method to respond to an application
  respondToApplication(application: Alumni, response: string) {
    // Handle the response logic here
    console.log(`Responding to application from ${application.fullNames}: ${response}`);
  }
  acceptApplication() {
    // You can perform any logic related to accepting the application here
    // Open the interview details dialog
    this.openInterviewDialog();
  }
  
}


