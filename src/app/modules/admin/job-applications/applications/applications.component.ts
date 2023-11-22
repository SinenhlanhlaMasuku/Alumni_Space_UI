import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

//
import { AcceptApplicationComponent } from '../accept-application/accept-application.component';
import { RejectApplicationComponent } from '../reject-application/reject-application.component';
import { ApplicationStatusComponent } from '../application-status/application-status.component';
import { AlumniResumeComponent } from '../alumni-resume/alumni-resume.component';

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
   jobAppliedFor: string;
   idCopy: string;
   motivationalLetter: string;
   applicationStatus?: string;
  shortlisted?: boolean;
  interviewDate?: string;
  interviewTime?: string;
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  removeApplication: boolean = false;
  //  type DialogType = 'interview' | 'rejection';
  isAcceptDialog: boolean = false;
  isRejectDialog: boolean = false;
  selectedAlumni: any; // Holds the data of the selected alumni
 //the variables below to be sent to alumni via notification or email(sendNotifications(alumnId, message, date);)
  applicationStatus!: string;
  shortlisted!: boolean;
  interviewDate!: string ;
  interviewTime!: string; 
  firstName: string ='';  
  lastName: string = 'Doe';
  rejectionReason!: string;
  adminComments!: string;
  
  isApplicationDone: boolean = false;//if the application is done the remove application(details) from the db and table
  //then the  applicant's employment status will automatically change to employed on profile if the interview went well
  isInterviewDone: boolean= false;
  updateApplicantStatus: string = '';//Hired/Rejected



 
  constructor(private dialog: MatDialog, private snackbar: MatSnackBar){

  }
  showSnackbar(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 2000, // Duration the snackbar is shown in milliseconds
      verticalPosition: 'top', // Set the vertical position to 'top'
      horizontalPosition: 'center', // Set the horizontal position to 'center'
      panelClass: ['snackbar'], // Add your custom class for styling
    });
  }
  openInterviewDialog(application: Alumni): void {
    const dialogRef = this.dialog.open(AcceptApplicationComponent, {
      width: '400px', // Adjust the width as per your requirement
      data: {
        // Pass any data you want to the dialog
        application,
          jobTitle: application.jobAppliedFor, // Pass the job title
          firstname: application.fullNames,
          surname: application.lastName,
           dialogType: this.dialog,
           applicationStatus: application.applicationStatus || '',
        shortlisted: application.shortlisted || false,
        interviewDate: application.interviewDate || '',
        interviewTime: application.interviewTime || '',
        // interviewDate: this.datePipe.transform(this.interviewDate, 'yyyy-MM-dd'),

      },
    });


    dialogRef.componentInstance.interviewConfirmed.subscribe((interviewDetails: any) => {
      // Update the job application details in the table
      // You can access the application object and update its properties
      console.log('Interview details received:', interviewDetails);
        this.shortlisted = true;
      // Update the application object or perform other actions as needed
       application.interviewDate = interviewDetails.interviewDate;
       application.interviewTime = interviewDetails.interviewTime;
       application.shortlisted = true;
       application.applicationStatus = 'waiting for interview';
      // ...
  
      // Refresh the table if needed
      // this.refreshTable();
    });
    //Subscribe to the afterClosed event to get the result when the dialog is closed
  dialogRef.afterClosed().subscribe(result => {
    // Handle the result if needed
    if (result) {
      // User clicked send, and you have the interview details in the 'result' object
      console.log('Interview details:', result);

      // Add your logic here to handle the interview details, respond to the application,
      // and send the details to the applicable candidate
      this.notifyApplicant(application, result);
    } else {
      // User clicked cancel
      console.log('Interview canceled');
    }
  
  });

  }

 //job rejection component
 openRejectionDialog(application: Alumni): void {
  const dialogRef = this.dialog.open(RejectApplicationComponent, {
    width: '400px', // Adjust the width as per your requirement
    data: {
      application,
       jobTitle: application.jobAppliedFor,
       
    },
  });
//  this.applicationStatus = 'rejected';
  application.applicationStatus = this.applicationStatus;
   application.shortlisted = false;
   application.interviewDate = '----';
   application.interviewTime = '----';
   dialogRef.componentInstance.RejectionConfirmed.subscribe((jobRejectionDetails: any) => {
      // Update the job application details in the table
      // You can access the application object and update its properties
      console.log('Interview details received:', jobRejectionDetails);
        this.shortlisted = true;
      // Update the application object or perform other actions as needed
      //  application.interviewDate = interviewDetails.interviewDate;
      //  application.interviewTime = interviewDetails.interviewTime;
      //  application.shortlisted = true;
       application.applicationStatus = 'Rejected';
          this.rejectionReason = jobRejectionDetails.rejectionReason;
      // ...
  console.log(this.rejectionReason);
      // Refresh the table if needed
      // this.refreshTable();
   });
  dialogRef.afterClosed().subscribe(result => {
    // Handle the result if needed
    if (result) {
      // Logic after dialog is closed
      // this.showSnackbar('results are empty, please fill the fields');
    }
    else{
      // this.showSnackbar('done!');
    }
  });
}
//success dialog
openSuccessDialog(application: Alumni){
  const dialogRef = this.dialog.open(ApplicationStatusComponent, {
    width: '400px', // Adjust the width as per your requirement
    data: {
      application,
       jobTitle: application.jobAppliedFor,
       firstname: application.fullNames,
       surname: application.lastName,
    },
  });
  dialogRef.componentInstance.interviewConfirmed.subscribe((interviewDetails: any) => {
     // Update the job application details in the table
      // You can access the application object and update its properties
      console.log('Interview details received:', interviewDetails);
          application.applicationStatus = interviewDetails.applicationStatus;
          // this.rejectionReason = interviewDetails.rejectionReason;
          application.interviewDate = '----';
          application.interviewTime = '----';
          application.shortlisted = interviewDetails.shortlisted;
          
  });
  dialogRef.afterClosed().subscribe(result => {
    // Handle the result if needed
    if (result) {
      // Logic after dialog is closed
    }
    else{
      //logic
    }
  });

}

  // Define the array of Alumni objects (applications) that will fetch the data from the db
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
      idCopy: 'pathtoId',
       certificates: ['certicate1Path','certificatePath2'],
       alumnipic: 'assets/Sneh.jpg',
       jobAppliedFor: 'Software Engineering',
       motivationalLetter: 'pathtomotivationalLetter'
    },
    // Add more Alumni objects as needed
    {
            fullNames: 'Sihle Bandile',
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
            jobAppliedFor: 'Full-stack Developer',
            idCopy: 'pathtoId',
            motivationalLetter: 'assets/List of alumni.pdf'
          },
      
  ];
  // firstName = this.applications.fullNames;
  // Define a method to respond to an application
  respondToApplication(application: Alumni, response: string) {
    // Handle the response logic here
    console.log(`Responding to application from ${application.fullNames}: ${response}`);
  }
  acceptApplication(application: Alumni) {
    // You can perform any logic related to accepting the application here
    // Open the interview details dialog
     this.openInterviewDialog(application);
    // this.isAcceptDialog = true;
  }
  rejectApplication(){
     console.log('application rejected');
    //  this.removeApplication = true;
    this.isRejectDialog = true;
  }

  // toggleAlumniResume() {
  //   this.removeApplication = !this.removeApplication;
  // }
  toggleAlumniResume(alumni: any) {
    // this.removeApplication = !this.removeApplication;
    // this.selectedAlumni = alumni;
    //new
    if (this.selectedAlumni === alumni) {
      // If the same alumni is clicked again, toggle the removeApplication flag
      this.removeApplication = !this.removeApplication;
    } else {
      // If a different alumni is selected, close the currently displayed resume
      this.removeApplication = true;
      this.selectedAlumni = alumni;
    }
  }
  closeResume(alumni: any){
    this.removeApplication = false;
    this.selectedAlumni = alumni;
  }
  notifyApplicant(application: Alumni, applicationStatus: string){
    const message: string = applicationStatus;
    this.showSnackbar('Sending application status details to :' + application.fullNames + ' ' + message);
  }
}
