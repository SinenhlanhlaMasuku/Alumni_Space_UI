import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent implements OnInit{
     name: string = '';
     surname: string = '';
     email: string = '';

  applicant = {
    name: '',
    email: ''
  };

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    // Fetch data from the database and populate the form fields
    this.dataService.getUserData().subscribe(
      (userData: any) => {
        this.applicant.name = userData.name;
        this.applicant.email = userData.email;
      },
      error => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  submitForm(form: NgForm) {
    // Handle form submission
    if (form.valid) {
      console.log('Form submitted:', this.applicant);
      // Add logic to submit the form data to the server or perform other actions
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  handleFileInput(event: any) {
    // Handle file input changes
    console.log('File selected:', event.target.files);
    // Add logic to handle file uploads
  }
}