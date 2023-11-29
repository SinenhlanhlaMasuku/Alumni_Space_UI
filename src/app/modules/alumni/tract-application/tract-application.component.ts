import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JobAppService } from 'src/app/services/jobApp/job-app.service';
interface Alumni{
  saved_job_title: string;
  application_status: string;
  application_date: string; 
  timeStamp?: Date;
}
@Component({
  selector: 'app-tract-application',
  templateUrl: './tract-application.component.html',
  styleUrls: ['./tract-application.component.css']
})
export class TractApplicationComponent {
  appData: Alumni[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private jobAppService: JobAppService
  ) {}

  ngOnInit() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    this.jobAppService.getApplications().subscribe(
      (data: any) => {
        this.appData = data.jobs;
        console.log(this.appData);
        
      },
      (error) => {
        console.error('Error fetching alumni data:', error);
      }
    );
  }

  trackByFn(index: number, item: Alumni) {
    return item.saved_job_title; 
  
  }

  toggleResponseForm(row: Alumni) {
    
    const index = this.appData.indexOf(row);
    if (index !== -1) {
      this.appData.splice(index, 1);
    }
  }
}
