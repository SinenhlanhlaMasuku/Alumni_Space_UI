import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.css']
})
export class StudentcrudComponent {

  currDate: Date = new Date();
   time: string='';
  StudentArray : any[] = [ ];
  isResultLoaded = false;
  isUpdateFormActive = false;

  num : number=0;
  
  id = '';
  job_title : string= ' ';
  Organisation : string= '';
  workplace_type: string= '';
  location : string= '';
  job_type : string= '';
  job_description : string= '';
  date_posted : string= '';
  deadline  = Date();

 /* stname: string ="";
  course: string ="";
  fee: string ="";
  currentStudentID = "";*/

  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/jobs' ).subscribe((response: any) => {
      console.log('Data sent to server:', response);
    // Fetch jobs using the service
    this.StudentArray = response.jobs;
   this.num = this.StudentArray.length;
    this.updateTime();
    setInterval(() => {
    this.updateTime();
  }, 1000)

  
  });
  }

  updateTime() {
    let now = new Date();
    this.time = this.getCurrentTimeWithAMPM(now);
    // .toTimeString().split(' ')[0];
  }          

  getCurrentTimeWithAMPM(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;
    const AMPM = isPM ? 'PM' : 'AM';

    // Convert to 12-hour format
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${AMPM}`;
  }

  getAllStudent()
  { 
    this.http.get("http://localhost:3000/api/newjob")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.StudentArray = resultData.data;
        console.log(this.StudentArray);
    });
  }

  

  
  


  register()
  {
   // this.isLogin = false; 
   // alert("hi");
    let bodyData = {

  "job_title" : this.job_title,
  "Organisation" : this.Organisation,
  "workplace_type" : this.workplace_type,
  "location" : this.location,
  "job_type" : this.job_type,
  "job_description" : this.job_description,
  "date_posted" : this.date_posted,
  "deadline" : this.deadline,
     
    };

    this.http.post("http://localhost:3000/api/newjob",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Job Added Successfully");
        this.getAllStudent();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
     
     
    });
  }

  setUpdate(data: any) 
  {
   
   this.job_title = data.job_title;
   this.Organisation = data.Organisation;
   this.workplace_type = data.workplace_type;
   this.location = data.location;
   this.job_type = data.job_type;
   this.job_description = data.job_description;
   this.date_posted = data.date_posted;
   this.deadline = data.deadline;
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      /*"stname" : this.stname,
      "course" : this.course,
      "fee" : this.fee*/
      "job_title" : this.job_title,
  "Organisation" : this.Organisation,
  "workplace_type" : this.workplace_type,
  "location" : this.location,
  "job_type" : this.job_type,
  "job_description" : this.job_description,
  "date_posted" : this.date_posted,
  "deadline" : this.deadline,
    };
    
    this.http.put("http://localhost:3000/api/Jobs/:job_id"+ "/"+ this.id,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Job Updateddd")
        this.getAllStudent();
      
    });
  }
 
  save()
  {
    if(this.id == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }


  setDelete(data :any)
  {
    //get job id
    const job_id =  data.StudentItem.id;
    console.log(job_id);
    //
    const url = "http://localhost:3000/api/job/delete" + "/" + job_id;
    this.http.delete(url).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Job Deletedddd")
        this.getAllStudent();
    });
  }


}
