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

  name: string = '';
  num: number = 0 ;
  jobs: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  //constructor(private jobService: Job) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/api/jobs' ).subscribe((response: any) => {
      console.log('Data sent to server:', response);
    // Fetch jobs using the service
    this.jobs = response.jobs;
    this.num = this.jobs.length;
  });
  }
  
}
