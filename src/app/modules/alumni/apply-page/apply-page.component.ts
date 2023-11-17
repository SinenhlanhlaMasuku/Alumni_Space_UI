import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent {
  applicant = {
    fullName: '',
    email: '' as string,
    resume: null
  };

  handleFileInput(event: any) {
    this.applicant.resume = event.target.files[0];
  }

  submitForm() {
   
    console.log('Form submitted:', this.applicant);
    this.applicant = {
      fullName: '',
      email: '' as string,
      resume: null
    };
  }
}