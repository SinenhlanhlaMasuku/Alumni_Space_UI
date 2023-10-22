import { Component } from '@angular/core';
//import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-track-alumni',
  templateUrl: './track-alumni.component.html',
  styleUrls: ['./track-alumni.component.css']
})
export class TrackAlumniComponent {
  displayedColumns: string[] = [ 'alumni_Id','alumniName', 'location', 'qualification', 'skills', 'experience'];
  dataSource = ELEMENT_DATA;
  //'position', 'name', 'weight', 'symbol',
}
export interface AlumniElement {
 
  alumni_Id: number;
  alumniName: string;
  location: string;
  qualification: string;
  skills: string[];
  experience: string;


}
const ELEMENT_DATA: AlumniElement[] = [
  {alumni_Id: 1, alumniName: 'Sihle Mhlongo', location: 'Soshanguve', qualification: 'Software Development', skills:['java','cpp','angular'], experience:' 3yrs'},
  {alumni_Id: 2, alumniName: 'Helium', location: 'Pretoria', qualification: 'teaching', skills:['java','cpp','angular'], experience:' 3yrs'},
  {alumni_Id: 3, alumniName: 'Lithium', location: 'Durban', qualification: 'teaching', skills:['java','cpp','angular'], experience:' 3yrs'},
  {alumni_Id: 4, alumniName: 'Beryllium', location: 'Midrand', qualification: 'teaching', skills:['java','cpp','angular'], experience:' 3yrs'},
  {alumni_Id: 5, alumniName: 'Boron',location: 'Johannesburg', qualification: 'teaching', skills:['java','cpp','angular'], experience:' 3yrs'},
];
