import { Component } from '@angular/core';
//import { MatTableModule } from '@angular/material/table';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
@Component({
  selector: 'app-track-alumni',
  templateUrl: './track-alumni.component.html',
  styleUrls: ['./track-alumni.component.css']
})
export class TrackAlumniComponent {
  displayedColumns: string[] = [ 'alumni_Id','alumniName', 'location', 'qualification', 'skills', 'experience', 'employment_Status', 'alumniPicture', 'alumni_Networks'];
  dataSource = ELEMENT_DATA;
  //'position', 'name', 'weight', 'symbol',

//   modalRef?: BsModalRef;
//   constructor(private modalService: BsModalService ){}

//   openImageModal(imageUrl: string) {
//     const initialState = {
//       image: imageUrl
//    };
//      this.modalRef = this.modalService.show(ImageViewerComponent, { initialState });
//      this.modalRef.content.closeBtnName = 'Close';
// }

showAlumniTable: boolean = false;
showAlumniStats: boolean = false;

toggleAlumniTable() {
  this.showAlumniTable = !this.showAlumniTable;
}

toggleAlumniStatsChart(){
 this.showAlumniStats = ! this.showAlumniStats;
}

}
export interface AlumniElement {
 
  alumni_Id: number;
  alumniName: string;
  location: string;
  qualification: string;
  skills: string[];
  experience: string;
  employment_Status: string;
  alumniPicture: string;
  alumni_Networks: number;
  

     //constructor(private modalService: BsModalService ){}

  

 
}
const ELEMENT_DATA: AlumniElement[] = [
  {alumni_Id: 1, alumniName: 'Sihle Mhlongo', location: 'Soshanguve', qualification: 'Software Development', skills:['java','cpp','angular'], experience:' 3yrs', employment_Status: 'Unemployed', alumniPicture: 'assets/Sihle.jpg', alumni_Networks: 200},
  {alumni_Id: 2, alumniName: 'Helium', location: 'Pretoria', qualification: 'teaching', skills:['java','cpp','angular'], experience:' 3yrs', employment_Status: 'employed', alumniPicture: 'assets/Sneh.jpg', alumni_Networks: 120},
  {alumni_Id: 3, alumniName: 'Lithium', location: 'Durban', qualification: 'teaching', skills:['java','cpp','angular'], experience:' 3yrs', employment_Status: 'unemployed', alumniPicture: 'assets/Themba.jpg', alumni_Networks: 500},
  {alumni_Id: 4, alumniName: 'Beryllium', location: 'Midrand', qualification: 'teaching', skills:['java','cpp','angular'], experience:' 3yrs', employment_Status: 'Unemployed', alumniPicture: 'assets/Kfentse.jpg', alumni_Networks: 430},
  {alumni_Id: 5, alumniName: 'Boron',location: 'Johannesburg', qualification: 'teaching', skills:['java','cpp','angular'], experience:' 3yrs', employment_Status: 'Unemployed', alumniPicture: 'assets/Xolly.jpg', alumni_Networks: 670},
];
