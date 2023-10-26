import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent {
  //  reportData: any[] = [];

  downloadReport() {
    // Logic for downloading the report goes here
    // You can use the data in reportData to generate the report
  }
 
  reportData =[
    { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
    { column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' },
    // Add more data as needed

  ];
  // this.reportData = this.sampleReportData[];

  dataSource = new MatTableDataSource<any>(this.reportData);

}
