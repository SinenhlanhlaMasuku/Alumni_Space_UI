import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css','assets/css/bootstrap.min.css',
'assets/css/owl.carousel.min.css',
'assets/css/price_rangs.css',
'assets/css/flaticon.css',
'assets/css/slicknav.css',
'assets/css/animate.min.css',
'assets/css/magnific-popup.css',
'assets/css/fontawesome-all.min.css',
'assets/css/themify-icons.css',
'assets/css/slick.css',
'assets/css/nice-select.css',
'assets/css/style.css']
})
export class JobsComponent {

  currDate: Date = new Date();
  time: string = '';
  name: string = '';
  num: number = 0 ;
  jobs: any[] = [];
  currentDate: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  //constructor(private jobService: Job) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/api/jobs' ).subscribe((response: any) => {
      console.log('Data sent to server:', response);
    // Fetch jobs using the service
    this.jobs = response.jobs;
    this.num = this.jobs.length;

    this.updateTime();
    this.updateCurrentDate();

    setInterval(() => {
      this.updateTime();
      this.updateCurrentDate();
    }, 1000);
  });
  }


  updateTime() {
    let now = new Date();
    this.time = this.getCurrentTimeWithAMPM(now);
  }

  getCurrentTimeWithAMPM(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;
    const AMPM = isPM ? 'PM' : 'AM';

    // Convert to 12-hour format
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${AMPM}`;
  }

  updateCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const date = now.getDate().toString().padStart(2, '0');

    this.currentDate = `${year}-${month}-${date}`;
  }
  //
  searchJobs(){
   var job_type = 'Full-time';
    var location = 'Emalahleni';
    var date_posted = '2023-10-26';
    
    const formData  = {job_type, location, date_posted};
    this.http.post('http://localhost:3000/api/search/jobs',formData).subscribe((response: any) => {
      console.log("Button clicked");
      //console.log('Data sent to server:', response);
    // Fetch jobs using the service
    this.jobs = response.result;
    this.num = this.jobs.length;
    
    
  });
    
  }
  
}