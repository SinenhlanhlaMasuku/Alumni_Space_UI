// query-entry.component.ts
import { Component, Query } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { QueryService } from '../query.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-query-entry',
  templateUrl: './query-entry.component.html',
  styleUrls: ['./query-entry.component.css']
})
export class QueryEntryComponent {
newQuestion: string='';
 queryText:string=''; 
 queryTimestamp: Date = new Date();
constructor(private dialog: MatDialog, private queryService: QueryService,private http:HttpClient){}

public openSuccessDialog(): void {

  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  this.dialog.open(SuccessDialogComponent, {
    data: { message: 'Your message was sent successfully!' },
    closeOnNavigation: true,
  });


  const userQuestionInput = document.getElementById('user-question-input') as HTMLInputElement;
  this.queryText = userQuestionInput.value;
  
  

  this.http.post<any>('http://localhost:3000/query',this.queryText,{headers}).subscribe(response=>{

  this.queryText ='';

  })

  // Create a new query and send it to the server
  const newQuery: any = {text:this.queryText, timestamp: new Date()};
  this.queryService.sendQuery(newQuery).subscribe((response) => {
    this.dialog.open(SuccessDialogComponent, {
      data: { message: 'Your message was sent successfully!' },
      closeOnNavigation: true,
    });
  });
}

}

/*public addQuestion(question: string): void {
  this.questionService.addQuestion(question); // Use the service to add a question
}
}*/
