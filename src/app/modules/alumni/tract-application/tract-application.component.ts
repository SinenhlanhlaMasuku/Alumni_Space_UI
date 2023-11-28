import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JobAppService } from 'src/app/services/jobApp/job-app.service';
interface Alumni{
  job_title: string;
  application_status: string;
  application_date: string; 
}
@Component({
  selector: 'app-tract-application',
  templateUrl: './tract-application.component.html',
  styleUrls: ['./tract-application.component.css']
})
export class TractApplicationComponent {
  timeReplied: string = '';
  Repliedtime?: Date;
  appData: any[] = []; 
  responseForms: boolean[] = new Array(this.appData.length).fill(false);


  constructor(private changeDetectorRef: ChangeDetectorRef, private jobAppService: JobAppService){}

  ngOnInit(){
  
    this.jobAppService.getApplications().subscribe(
      (data) => {
        this.appData = data.jobs;
      },
      (error) => {
        console.error('Error fetching alumni data:', error);
      }
    );

    this.fetchDataFromApi();
  }
  
  

  fetchDataFromApi() {
    this.jobAppService.getApplications().subscribe(data => {
      this.appData = data;
    });
  }

  toggleResponseForm(index: number) {
    this.responseForms[index] = !this.responseForms[index];
  }

  submitResponse(index: number) {
    // this.data[index].status = 'Answered' + ' ' + this.timeReplied;
    // this.responseForms[index] = false;

    const currentTime = new Date();
  

  this.appData[index].status = 'Answered';
  this.appData[index].timeStamp = new Date();
  this.responseForms[index] = true;
  }
}
