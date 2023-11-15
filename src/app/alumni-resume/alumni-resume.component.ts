import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import{MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
interface Alumni {
  fullNames: string;
  lastName: string;
  skills: string[];
  address: string;
  email: string;
  experience: string;
  qualification: string;
  certificateNames: string[];
  interests: string[];
};
@Component({
  selector: 'app-alumni-resume',
  templateUrl: './alumni-resume.component.html',
  styleUrls: ['./alumni-resume.component.css']
})


export class AlumniResumeComponent {
    //  alumni_fullName = "Sihle Mhlongo";
    //  alumni: string[] =[{
    //     fullNames: '',
    //  }]


     alumni: Alumni[] = [
      {
        fullNames: 'Sihle Bandile',
        lastName: 'Mhlongo',
        address: '245 burger str',
        skills: ['JavaScript', 'Angular', 'Node.js'],
        email: 'john.doe@example.com',
        experience: '5 years',
        qualification: 'Bachelor of Science in Computer Science',
        certificateNames: ['Certificate 1', ' Certificate 2'],
        interests: ['coding', ' gaming']
      }
    ];

}
