import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent {

  title = 'Alumni_Space_UI';

  job_title = '';
  content_type = '';
  company = '';
  location = '';

  constructor(private http: HttpClient, private router: Router) {}
  postJob(){
    const formData = { job_title: this.job_title, content_type: this.content_type,  company: this.company, location:this.location};
    this.http.post('http://localhost:3000/api/newjob', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.job_title = '';
      this.content_type = '';
      this.company = '';
      this.location = '';
      

      this.router.navigate(['/Job Added successful']);
    });
  }
}
