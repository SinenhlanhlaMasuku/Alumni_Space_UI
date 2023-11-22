import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { FormModule } from '@coreui/angular';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent {

  title = 'Alumni_Space_UI';

  job_title = '';
  Organisation = '';
  workplace_type = '';
  location = '';
  job_type = '';
  job_description = '';
  date_posted = '';
  deadline = '';

  constructor(private http: HttpClient, private router: Router) {}
  postJob(){
    const formData = { job_title: this.job_title, Organisation: this.Organisation,  workplace_type: this.workplace_type, location:this.location, job_type:this.job_type, job_description:this.job_description, date_posted:this.date_posted, deadline:this.deadline};
    this.http.post('http://localhost:3000/api/newjob', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.job_title = '';
      this.Organisation = '';
      this.workplace_type = '';
      this.location = '';
      this.job_type = '';
      this.job_description = '';
      this.date_posted = '';
      this.deadline = '';

      //this.router.navigate(['/Job Added successful']);
    });
  }
}
