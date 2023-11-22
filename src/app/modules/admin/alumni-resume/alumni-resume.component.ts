import { Component, Input } from '@angular/core';

interface Alumni {
  Bio: string;
  fullNames: string;
  lastName: string;
  skills: string[];
  address: string;
  email: string;
  experience: string;
  qualification: string;
  interests: string[];
  certificates: string[];
  certificateNames: string[];
  alumnipic: string;
  idCopy: string;
  motivationalLetter: string;
};
@Component({
  selector: 'app-alumni-resume',
  templateUrl: './alumni-resume.component.html',
  styleUrls: ['./alumni-resume.component.css']
})
export class AlumniResumeComponent {

  @Input() alumni: Alumni | undefined;
}
