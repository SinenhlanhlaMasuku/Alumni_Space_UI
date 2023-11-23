import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobTrackService } from 'src/app/services/job-track/job-track.service';
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
export class ApplicationsComponent  {
  removeApplication: boolean = false;
  isAcceptDialog: boolean = false;
  isRejectDialog: boolean = false;
  selectedAlumni: any; 
  applicationStatus!: string;
  shortlisted!: boolean;
  interviewDate!: string ;
  interviewTime!: string; 
  firstName: string ='';  
  lastName: string = 'Doe';
  rejectionReason!: string;
  adminComments!: string;
  alumniData: any;

  isApplicationDone: boolean = false;
  isInterviewDone: boolean= false;
  updateApplicantStatus: string = '';

  constructor(private dialog: MatDialog, private snackbar: MatSnackBar, private jobTrackService: JobTrackService){

  }
  showSnackbar(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 2000, 
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      panelClass: ['snackbar'],
    });
  }
  openInterviewDialog(application: Alumni): void {
    const dialogRef = this.dialog.open(AcceptApplicationComponent, {
      width: '400px', 
      data: {
        application,
          jobTitle: application.jobAppliedFor, 
          firstname: application.fullNames,
          surname: application.lastName,
           dialogType: this.dialog,
           applicationStatus: application.applicationStatus || '',
        shortlisted: application.shortlisted || false,
        interviewDate: application.interviewDate || '',
        interviewTime: application.interviewTime || '',

      },
    });


    dialogRef.componentInstance.interviewConfirmed.subscribe((interviewDetails: any) => {
      console.log('Interview details received:', interviewDetails);
        this.shortlisted = true;
       application.interviewDate = interviewDetails.interviewDate;
       application.interviewTime = interviewDetails.interviewTime;
       application.shortlisted = true;
       application.applicationStatus = 'waiting for interview';
    
    });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Interview details:', result);

      this.notifyApplicant(application, result);
    } else {
      console.log('Interview canceled');
    }
  
  });

  }

 openRejectionDialog(application: Alumni): void {
  const dialogRef = this.dialog.open(RejectApplicationComponent, {
    width: '400px', 
    data: {
      application,
       jobTitle: application.jobAppliedFor,
       
    },
  });
  application.applicationStatus = this.applicationStatus;
   application.shortlisted = false;
   application.interviewDate = '----';
   application.interviewTime = '----';
   dialogRef.componentInstance.RejectionConfirmed.subscribe((jobRejectionDetails: any) => {
    
      console.log('Interview details received:', jobRejectionDetails);
        this.shortlisted = true;
      
       application.applicationStatus = 'Rejected';
          this.rejectionReason = jobRejectionDetails.rejectionReason;
  console.log(this.rejectionReason);
     
   });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
    }
    else{
    }
  });
}
openSuccessDialog(application: Alumni){
  const dialogRef = this.dialog.open(ApplicationStatusComponent, {
    width: '400px',
    data: {
      application,
       jobTitle: application.jobAppliedFor,
       firstname: application.fullNames,
       surname: application.lastName,
    },
  });
  dialogRef.componentInstance.interviewConfirmed.subscribe((interviewDetails: any) => {
    
      console.log('Interview details received:', interviewDetails);
          application.applicationStatus = interviewDetails.applicationStatus;
          application.interviewDate = '----';
          application.interviewTime = '----';
          application.shortlisted = interviewDetails.shortlisted;
          
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
    }
    else{
    }
  });

}

     applications: Alumni[] = [
    {
      fullNames: ' ',
      lastName: ' ',
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
            certificates: ['certicate1Path','certificatePath2'],
            alumnipic: 'assets/Sihle.jpg',
            jobAppliedFor: 'Full-stack Developer',
            idCopy: 'pathtoId',
            motivationalLetter: 'assets/List of alumni.pdf'
          },
      
  ];
  respondToApplication(application: Alumni, response: string) {
    console.log(`Responding to application from ${application.fullNames}: ${response}`);
  }
  acceptApplication(application: Alumni) {
    
     this.openInterviewDialog(application);
  }
  rejectApplication(){
     console.log('application rejected');
   
    this.isRejectDialog = true;
  }

  toggleAlumniResume(alumni: any) {
  
    if (this.selectedAlumni === alumni) {
      this.removeApplication = !this.removeApplication;
    } else {
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

  ngOnInit(): void {
    this.jobTrackService.getAlumni().subscribe(
      (data) => {
        this.alumniData = data.jobs;
      },
      (error) => {
        console.error('Error fetching alumni data:', error);
      }
    );
  }

}
