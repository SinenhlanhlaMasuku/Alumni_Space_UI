import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import{ saveAs} from 'file-saver';
// import * as ExcelJS from  'exceljs';
type ReportData = Array<Array<string | number>>;
@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent {
  //  reportData: any[] = [];
  
  //  type ReportData = Array<Array<string | number>>;
  
//    function downloadReport(reportData: ReportData, fileName: string, fileType: 'txt' | 'csv' | 'xlsx') {
//      // Logic for downloading the report goes here/   // You can use the data in reportData to generate the report
//      if (fileType === 'txt') {
//       const data = reportData.map(row => row.join('\t')).join('\n');
//       const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
//       saveAs(blob, `${fileName}.txt`);
//       console.log(`Report downloaded as ${fileName}.txt`);
//   } else if (fileType === 'csv') {
//       const csvContent = reportData.map(row => row.join(',')).join('\n');
//       const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
//       saveAs(blob, `${fileName}.csv`);
//       console.log(`Report downloaded as ${fileName}.csv`);
//   } else if (fileType === 'xlsx') {
//       const workbook = new ExcelJS.Workbook();
//       const worksheet = workbook.addWorksheet('Sheet 1');
//       reportData.forEach(row => {
//           worksheet.addRow(row);
//       });
//       workbook.xlsx.writeBuffer().then((data: any) => {
//           const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//           saveAs(blob, `${fileName}.xlsx`);
//           console.log(`Report downloaded as ${fileName}.xlsx`);
//       });
//   } else {
//       console.log('Invalid file type. Please choose either txt, csv, or xlsx.');
//   }
     
// }
Date_registered: string='';
Total_alumni_registered: number = 0;
Total_jobs_posted: number = 0;
Total_jobs_expired: number = 0;
Total_events_posted: number = 0;
Total_events_cancelled: number = 0;
Total_alumni_employed: number = 0;
Total_alumni_not_employed: number = 0;
 
   reportData: ReportData =[
      [this.Date_registered= '12/10/2023', this.Total_alumni_registered=13, this.Total_jobs_posted, this.Total_jobs_expired, this.Total_events_posted, this.Total_events_cancelled, this.Total_alumni_employed=5, this.Total_alumni_not_employed=8],
      [this.Date_registered= '25/10/2023', this.Total_alumni_registered= 7, this.Total_jobs_posted=7, this.Total_jobs_expired, this.Total_events_posted, this.Total_events_cancelled, this.Total_alumni_employed=5, this.Total_alumni_not_employed=2],
      [this.Date_registered= '26/10/2023', this.Total_alumni_registered=8, this.Total_jobs_posted=13, this.Total_jobs_expired, this.Total_events_posted, this.Total_events_cancelled, this.Total_alumni_employed=0, this.Total_alumni_not_employed=8],
      [this.Date_registered= '27/10/2023', this.Total_alumni_registered=7, this.Total_jobs_posted=9, this.Total_jobs_expired, this.Total_events_posted, this.Total_events_cancelled, this.Total_alumni_employed=3, this.Total_alumni_not_employed=4]
  ];
  month: string;
  dataSource = new MatTableDataSource<any>(this.reportData);
  // this.reportData = this.sampleReportData[];
  constructor() {
    const currentDate = new Date();
    this.month = this.getMonthAsString(currentDate.getMonth());
  }
 
  displayedColumns: string[] = ['Total_alumni_registered', 'Total_jobs_posted', 'Total_jobs_expired', 'Total_events_posted', 'Total_events_cancelled', 'Total_alumni_employed', 'Total_alumni_not_employed'];
    
  downloadReport(reportData: ReportData, fileName: string, fileType: 'txt' | 'csv' | 'xlsx'): void {
    // Logic for downloading the report goes here
    // You can use the data in reportData to generate the report
  //   if (fileType === 'txt') {
  //     const data = reportData.map(row => row.join('\t')).join('\n');
  //     const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  //     saveAs(blob, `${fileName}.txt`);
  //     console.log(`Report downloaded as ${fileName}.txt`);
  //   } else if (fileType === 'csv') {
  //     const csvContent = reportData.map(row => row.join(',')).join('\n');
  //     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  //     saveAs(blob, `${fileName}.csv`);
  //     console.log(`Report downloaded as ${fileName}.csv`);
  //   } else if (fileType === 'xlsx') {
  //     const workbook = new ExcelJS.Workbook();
  //     const worksheet = workbook.addWorksheet('Sheet 1');
  //     reportData.forEach(row => {
  //       worksheet.addRow(row);
  //     });
  //     workbook.xlsx.writeBuffer().then((data: any) => {
  //       const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //       saveAs(blob, `${fileName}.xlsx`);
  //       console.log(`Report downloaded as ${fileName}.xlsx`);
  //     });
  //   } else {
  //     console.log('Invalid file type. Please choose either txt, csv, or xlsx.');
  //   }
   }


  getMonthAsString(monthIndex: number): string {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[monthIndex];
  }

  onDownloadReport(): void {
    this.downloadReport(this.reportData, 'example_report', 'csv');
  }
}
